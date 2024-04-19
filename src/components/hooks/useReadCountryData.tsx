import Papa, { ParseResult } from "papaparse";
import { useEffect, useState } from "react";
import { CountryData } from "../../types/countryData";

const countryCsv = `${process.env.PUBLIC_URL}/data/countries.csv`;

type CountryValues = {
  data: CountryData[];
};

const useReadCountryData = () => {
  const [countryValues, setCountryValues] = useState<CountryValues | undefined>(
    undefined
  );

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
    getCountryCSV();
  }, []);

  return { countryValues };
};

export default useReadCountryData;
