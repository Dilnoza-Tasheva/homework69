export interface IShow {
  id: number;
  name: string;
  genres: string;
  summary: string;
  image? : {
    medium: string;
    original: string;
  }
  rating? : {
    average: number;
  }
}
