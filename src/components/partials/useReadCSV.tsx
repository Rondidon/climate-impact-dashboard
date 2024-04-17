import Papa, { ParseResult } from "papaparse";
import { useEffect, useState } from "react";

const countryCsv = `${process.env.PUBLIC_URL}/data/countries.csv`;
const companyCsv = `${process.env.PUBLIC_URL}/data/companies.csv`;

export type CountryData = {
  countryId: string;
  countryName: string;
  co2_2015: number;
  co2_2016: number;
  co2_2017: number;
  co2_2018: number;
  co2_2019: number;
  co2_2020: number;
  co2_2021: number;
  co2_2022: number;
  co2_2023: number;
};

export type CompanyData = {
  companyId: string;
  companyName: string;
  countryId: string;
  co2_2015: number;
  co2_2016: number;
  co2_2017: number;
  co2_2018: number;
  co2_2019: number;
  co2_2020: number;
  co2_2021: number;
  co2_2022: number;
  co2_2023: number;
};

type CountryValues = {
  data: CountryData[];
};

type CompanyValues = {
  data: CompanyData[];
};

const useReadCSV = () => {
  const [countryValues, setCountryValues] = useState<CountryValues | undefined>(
    undefined
  );
  const [companyValues, setCompanyValues] = useState<CompanyValues | undefined>(
    undefined
  );

  const getCompanyCSV = () => {
    Papa.parse(companyCsv, {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (result: ParseResult<CompanyData>) => {
        setCompanyValues({ data: result.data });
      },
    });
  };

  const getCountryCSV = () => {
    Papa.parse(countryCsv, {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (result: ParseResult<CountryData>) => {
        setCountryValues({ data: result.data });
      },
    });
  };

  useEffect(() => {
    getCompanyCSV();
    getCountryCSV();
  });

  return { countryValues, companyValues };
};

export default useReadCSV;
