import { Country } from './country';

export interface Location {
  id: string;
  name: string;
  streetAddress?: string;
  extendedAddress?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  phone?: string;
  website?: string;
  latitude?: number;
  longitude?: number;
  isPrimary: string;
  inPlanning: string;
  isClosed: string;
  openToPublic: string;
  locationType: string;
  locationTypeDisplay: string;
  countryIsoCode: string;
  yearOpened?: string;
  status: string;
  statusDisplay: string;
  createDate: string;
  updateDate: string;
  country: Country;
  hoursOfOperation?: string;
}