import { Data } from './data';

export interface Beer {
  currentPage: number;
  numberOfPages: number;
  totalResults: number;
  data: Data[];
  status: string;
}