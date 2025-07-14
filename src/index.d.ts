import type { Country, Division, City } from "./types";
export declare const getAllCountries: () => Map<string, Pick<Country, "name" | "iso3">>;
export declare const getCountryByISO2: (iso2: string) => Country | undefined;
export declare const getDivisionsByISO2: (iso2: string) => Division[] | undefined;
export declare const getCitiesByCountryAndDivision: (iso2: string, division: string) => City[] | undefined;
