import { Images } from './images';

export interface Brewery {
  id: string;
  name: string;
  nameShortDisplay: string;
  description?: string;
  website: string;
  established?: string;
  isOrganic: string;
  images?: Images;
  status: string;
  statusDisplay: string;
  createDate: string;
  updateDate: string;
  isMassOwned: string;
  brandClassification: string;
  locations: Location[];
  mailingListUrl?: string;
}