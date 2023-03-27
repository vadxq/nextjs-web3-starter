import { LoginReqType, LoginResType, ResType } from '@/types/api';
import request from '@/utils/request';
/**
 * @description 获取
 */
export const apiLogin = async (data: LoginReqType) => {
  const res: LoginResType = await request(
    `/api/login?address=${data.address}&sig=${data.sig}&message=${data.message}`
  );
  return res;
};

/**
 * @description 登出
 */
export const apiLogout = async () => {
  const res: ResType = await request(`/api/logout`);
  return res;
};
