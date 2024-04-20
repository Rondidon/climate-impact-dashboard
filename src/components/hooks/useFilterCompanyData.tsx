import { CompanyData } from "../../types/companyData";
import { FilterQuery } from "../../types/filterQuery";

type FilteredCompanyLine = {
  companyName: string;
  countryCode: string;
  [key: `co2_${number}`]: string | undefined;
};

const useFilterCompanyData = (
  companyData?: CompanyData[],
  query?: FilterQuery
) => {
  if (!query || !companyData) {
    return { filteredCompanyData: [], header: [] };
  }

  let filteredCompanyData = companyData.filter((company) => {
    const queryCompanyNameLowered = query.companyName
      ? query.companyName?.toLowerCase()
      : "";

    // Filter by companyName

    console.log(query.companyName?.toLowerCase());
    console.log(company.companyName?.toLowerCase());

    if (
      query.companyName &&
      !company.companyName.toLowerCase().includes(queryCompanyNameLowered)
    ) {
      return false;
    }

    // Filter by countryCode
    const countryCodeArray: string[] | undefined = query.countryCode
      ?.split(",")
      .map((code) => code.trim().toLowerCase());

    const lineCountryCodeLower = company.countryCode.toLowerCase();
    if (
      !countryCodeArray ||
      countryCodeArray.length === 0 ||
      countryCodeArray[0] === ""
    ) {
      return true;
    }
    if (countryCodeArray) {
      return countryCodeArray.includes(lineCountryCodeLower);
    }

    return true;
  });

  // Filter data based on year range if provided
  const yearFrom = query.yearFrom || -Infinity;
  const yearTo = query.yearTo || Infinity;

  filteredCompanyData = filteredCompanyData.map((company) => {
    const filteredLine: Partial<FilteredCompanyLine> = {
      companyName: company.companyName,
      countryCode: company.countryCode,
    };
    for (
      let year = Math.max(yearFrom, 2015);
      year <= Math.min(yearTo, 2023);
      year++
    ) {
      const yearKey = `co2_${year}`;
      // Type assertion to avoid typing problems
      if (company[yearKey as keyof typeof company]) {
        filteredLine[yearKey as keyof FilteredCompanyLine] = company[
          yearKey as keyof typeof company
        ] as string;
      }
    }

    return filteredLine as FilteredCompanyLine; // Stellt sicher, dass das Objekt korrekt als FilteredCompanyLine zurückgegeben wird.
  });

  // Generate header based on year range
  const header = ["companyName", "countryCode"];
  for (
    let year = Math.max(yearFrom, 2015);
    year <= Math.min(yearTo, 2023);
    year++
  ) {
    header.push(`co2_${year}`);
  }

  return { filteredCompanyData, header };
};

export default useFilterCompanyData;
