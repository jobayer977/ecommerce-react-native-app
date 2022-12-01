import { IUserEntity } from "./entities";
export interface ISendOTPResponse {
  success: boolean;
  statusCode: number;
  payload: { otp: string; message: string };
  message: string;
}
export interface IVerifyOTPResponse {
  success: boolean;
  statusCode: number;
  payload: {
    user: IUserEntity;
    token: string;
    refreshToken: string;
  };
  message: string;
}
