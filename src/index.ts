import { readFileSync } from "fs";
import { join } from "path";
import addAllCountriesToMap from "./lib/addToMap";
import type { Country, Division, City } from "./types";

const map = addAllCountriesToMap();

export const getAllCountries = (): Map<
  string,
  Pick<Country, "name" | "iso3">
> => {
  return map;
};

export const getCountryByISO2 = (iso2: string): Country | undefined => {
  try {
    const filePath = join(
      import.meta.dir,
      "../",
      "data",
      `${iso2.toLowerCase()}.json`
    );
    return JSON.parse(readFileSync(filePath, "utf-8")) as Country;
  } catch {
    return undefined;
  }
};

export const getDivisionsByISO2 = (iso2: string): Division[] | undefined => {
  try {
    const filePath = join(
      import.meta.dir,
      "../",
      "data",
      `${iso2.toLowerCase()}.json`
    );
    const parsed = JSON.parse(readFileSync(filePath, "utf-8")) as Country;

    return parsed.divisions;
  } catch {
    return undefined;
  }
};

export const getCitiesByCountryAndDivision = (
  iso2: string,
  division: string
): City[] | undefined => {
  const divisions = getDivisionsByISO2(iso2);
  if (!divisions) return undefined;
  const foundDivision = divisions.find(
    (div) => div.name.toLowerCase() === division.toLowerCase()
  );
  return foundDivision ? foundDivision.cities : undefined;
};