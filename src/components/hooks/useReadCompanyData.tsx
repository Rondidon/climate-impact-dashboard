import Papa, { ParseResult } from "papaparse";
import { useEffect, useState } from "react";
import { CompanyData } from "../../types/companyData";

const companyCsv = `${process.env.PUBLIC_URL}/data/companies.csv`;

type CompanyValues = {
  data: CompanyData[];
};

const useReadCompanyData = () => {
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

  useEffect(() => {
    getCompanyCSV();
  }, []);

  return { companyValues };
};

export default useReadCompanyData;
