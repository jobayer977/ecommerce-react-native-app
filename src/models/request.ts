export interface IBaseRequest {
  searchTerm?: string;
  page?: number;
  take?: number;
}
export interface IUpdate<Data> {
  id: string;
  data: Data;
}
export interface IOTPSendRequest {
  identifier?: string;
}
