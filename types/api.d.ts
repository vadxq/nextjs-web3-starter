export type LoginResType = {
  data?: {
    token: string;
    expire: string;
  };
  code: number;
  message: string;
};

export type LoginReqType = {
  message: string;
  sig: string;
  address: string;
};

export interface ResType {
  data?: any;
  code: number;
  message: string;
}
