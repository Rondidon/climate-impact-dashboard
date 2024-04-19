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
    // Filter by companyName (case-insensitive)
    if (
      query.companyName &&
      query.companyName.toLowerCase() !== company.companyName.toLowerCase()
    ) {
      return false;
    }

    // Filter by countryCode (case-insensitive)
    if (
      query.countryCode &&
      query.countryCode.toLowerCase() !== company.countryCode.toLowerCase()
    ) {
      return false;
    }

    return true; // Dieses true war notwendig, um die Filterfunktion korrekt zu schließen.
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
