import Papa, { ParseResult } from "papaparse";
import { useEffect, useState } from "react";
import { CountryData } from "../../types/countryData";
import { CompanyData } from "../../types/companyData";

const countryCsv = `${process.env.PUBLIC_URL}/data/countries.csv`;
const companyCsv = `${process.env.PUBLIC_URL}/data/companies.csv`;

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
  }, []);

  return { countryValues, companyValues };
};

export default useReadCSV;
