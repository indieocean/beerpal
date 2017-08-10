import { Glass } from './glass';

export interface Style {
  id: number;
  categoryId: number;
  category: Glass;
  name: string;
  shortName: string;
  description: string;
  ibuMin: string;
  ibuMax: string;
  abvMin: string;
  abvMax: string;
  srmMin: string;
  srmMax: string;
  ogMin: string;
  fgMin: string;
  fgMax: string;
  createDate: string;
  updateDate: string;
}