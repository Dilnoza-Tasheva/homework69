export interface IShow {
  id: number;
  name: string;
  genres: string;
  summary: string;
}

export interface IshowApi {
  [id: number]: IShow
}