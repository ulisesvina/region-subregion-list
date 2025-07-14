export type City = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
};

export type Division = {
  id: number;
  name: string;
  state_code: string;
  latitude: string;
  longitude: string;
  type: string;
  cities: City[];
};

export type Country = {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
  emoji: string;
  region: string;
  subregion: string;
  native: string;
  capital: string;
  phonecode: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  latitude: string;
  longitude: string;
  translations: Record<string, string>;
  timezones: any[];
  divisions: Division[];
};
