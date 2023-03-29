import { getCookie } from './cookie';
import { getApiUrl } from './helpers';
import toast from '@/components/toast/toast';

interface RequestOptions extends RequestInit {
  responseType?:
    | 'TEXT'
    | 'JSON'
    | 'BLOB'
    | 'ARRAYBUFFER'
    | 'text'
    | 'json'
    | 'blob'
    | 'arraybuffer';
  body?: any;
}

// 发送数据请求
const request = async (url: string, config?: RequestOptions) => {
  const finalUrl: string = getApiUrl(url);

  const inital: RequestOptions = {
    method: 'GET',
    body: null,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCookie('token') ? 'Bearer ' + getCookie('token') : ''
    },
    credentials: 'include',
    cache: 'no-cache',
    mode: 'cors',
    responseType: 'JSON'
  };

  const configs: RequestOptions = {
    ...inital,
    ...config
  };
  if (config && config.headers)
    configs.headers = {
      ...inital.headers,
      Authorization: getCookie('token') ? 'Bearer ' + getCookie('token') : '',
      ...config.headers
    };

  // 基于fetch请求数据
  const finalConfig: RequestInit = {
    method: configs.method?.toUpperCase(),
    credentials: configs.credentials,
    mode: configs.mode,
    cache: configs.cache,
    headers: configs.headers,
    body: configs.body
  };

  return fetch(`${finalUrl}`, finalConfig)
    .then((response: Response) => {
      // 走到这边不一定是成功的：
      // Fetch的特点的是，只要服务器有返回结果，不论状态码是多少，它都认为是成功
      const { status } = response;

      if (status >= 200 && status < 400) {
        // 真正成功获取数据
        let result: any;
        switch (configs.responseType && configs.responseType.toUpperCase()) {
          case 'TEXT':
            result = response.text();
            break;
          case 'JSON':
            result = response.json();
            break;
          case 'BLOB':
            result = response.blob();
            break;
          case 'ARRAYBUFFER':
            result = response.arrayBuffer();
            break;
          default:
            result = response.json();
        }
        return result;
      }
      // 失败的处理
      return Promise.reject(response);
    })
    .catch((reason: any) => {
      // @2:断网
      if (typeof window !== 'undefined' && navigator && !navigator.onLine) {
        toast.error('Your network is break!', { id: 'statusnetwork' });
      }
      // @1:状态码失败
      if (reason && reason.status) {
        switch (reason.status) {
          case 400:
            toast.error('Please verify your info!', { id: 'status400' });
            break;
          case 401:
            toast.error('Please Login!', { id: 'status401' });
            break;
          case 403:
            toast.error('You have no access to this', { id: 'status403' });
            break;
          case 500:
            toast.error("Oops, there's something wrong!", { id: 'status500' });
            break;
          case 504:
            toast.error("Oops, there's something wrong!", { id: 'status504' });
            break;
          default:
        }
      } else {
        // @3:处理返回数据格式失败
        toast.error("Oops, there's something wrong!", { id: 'status500' });
      }

      return Promise.reject(reason);
    });
};

export default request;
