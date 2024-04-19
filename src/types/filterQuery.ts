export type YearOption =
  | 2015
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022
  | 2023;
export type DisplayOption = "companies" | "countries";

export type FilterQuery = {
  yearFrom?: YearOption;
  yearTo?: YearOption;
  countryCode?: string;
  companyName?: string;
  display: DisplayOption[];
};
