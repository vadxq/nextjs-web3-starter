/**
 * @description 获取API URL，根据环境进行判断
 */
export const getApiUrl = (originUrl: string): string => {
  // const baseUrl = import.meta.env.VITE_BASE_API_URL;
  // if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'grey') {
  return originUrl;
  // }
  // return originUrl;
};

/**
 * @description 获取queryString
 */
export const getQueryString = (name: string): string | null => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
};

/**
 * @description 获取token
 */
export const getToken = (): string | null => {
  return getQueryString('token');
};

/**
 * @description isIos
 */
export const isIos = (): boolean => {
  const u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

/**
 * @description 获取平台
 */
export const getPlatform = (): string => {
  const ua = navigator.userAgent;
  if (ua.match(/MicroMessenger/i)) {
    return 'MicroMessenger';
  }
  if (ua.match(/WeiBo/i)) {
    return 'WeiBo';
  }
  if (ua.match(/QQ/i)) {
    return 'QQ';
  }
  return '';
};

/**
 * @description 字符串获取时间戳，兼容ios
 */
export const getDate = (date: string): Date => {
  return new Date(date.replace(/-/g, '/'));
};

/**
 * @description 百分比
 */
export const toPercent = (val: number) => {
  return `${(Math.abs(val) * 100).toFixed(2)}%`;
};

/**
 * @description 复制到剪切板
 */
export const copyMsg = (msg: string) => {
  navigator.clipboard.writeText(msg);
};

/**
 * 格式化时间为ISO，间隔符为-
 * @param {Number} date 大小，单位时间戳13位
 * @return {String} 格式化后的大小 2021-03-12 20:21:02
 */
export const formatDate = (date: any) => {
  const da = new Date(date).toISOString();
  const ymd = da.split('T')[0];
  const hms = da.split('T')[1];
  return `${ymd} ${hms.split('.')[0]}`;
};

/**
 * 格式化时间，间隔符为-
 * @param {Number} date 大小，单位时间戳13位
 * @return {String} 格式化后的大小 2021-03-12 20:21:02
 */
export const formatTime = (date: any) => {
  const da = new Date(date);
  const year = da.getFullYear();
  const month =
    da.getMonth() + 1 > 9 ? da.getMonth() + 1 : `0${da.getMonth() + 1}`;
  const day = da.getDate() > 9 ? da.getDate() : `0${da.getDate()}`;
  const hours = da.getHours() > 9 ? da.getHours() : `0${da.getHours()}`;
  const mins = da.getMinutes() > 9 ? da.getMinutes() : `0${da.getMinutes()}`;
  const secs = da.getSeconds() > 9 ? da.getSeconds() : `0${da.getSeconds()}`;
  return `${year}-${month}-${day} ${hours}:${mins}:${secs}`;
};

/**
 * 判断字符长度
 * @param {String} val name
 */
export const getStringWidth = (val: string): number => {
  let len = 0;
  for (let i = 0; i < val.length; i++) {
    const length = val.charCodeAt(i);
    if (length >= 0 && length <= 128) {
      len += 1;
    } else {
      len += 2;
    }
  }
  return len;
};

/**
 * base64 to blob
 * @param {String} dataurl base64
 */
export const dataURLtoBlob = (dataurl: string) => {
  const arr: any = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

/**
 * 将blob转换为file
 * @param {String} val name
 */
export const blobToFile = (theBlob: any, fileName: string) => {
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
};

/**
 * 打开新网址
 * @param {String} url url
 */
export const openBlankLink = (url: string) => {
  if (url.includes('https://') || url.includes('http://'))
    return window.open(url);
  return window.open('https://' + url);
};

/**
 * 滚动到底部
 * @param {String} url url
 */
export const scrollToBottom = () => {
  const currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop; // 已经被卷掉的高度
  const clientHeight = document.documentElement.clientHeight; // 浏览器高度
  const scrollHeight = document.documentElement.scrollHeight; // 总高度
  if (scrollHeight - 10 > currentScroll + clientHeight) {
    window.requestAnimationFrame(scrollToBottom);
    window.scrollTo(
      0,
      currentScroll + (scrollHeight - currentScroll - clientHeight) / 2
    );
  }
};

/**
 * 去重
 */
export const uniqueArray = (arr: any[], uniId: string) => {
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
};
