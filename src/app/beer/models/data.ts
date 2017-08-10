import { Labels } from './labels';
import { Glass } from './glass';
import { Srm } from './srm';
import { Available } from './available';
import { Style } from './style';
import { Brewery } from './brewery';

export interface Data {
  id: string;
  name: string;
  nameDisplay: string;
  description?: string;
  abv?: string;
  ibu?: string;
  glasswareId?: number;
  srmId?: number;
  availableId?: number;
  styleId: number;
  isOrganic: string;
  labels?: Labels;
  status: string;
  statusDisplay: string;
  servingTemperature?: string;
  servingTemperatureDisplay?: string;
  createDate: string;
  updateDate: string;
  glass?: Glass;
  srm?: Srm;
  available?: Available;
  style: Style;
  breweries: Brewery[];
  foodPairings?: string;
}