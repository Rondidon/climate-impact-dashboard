import { CountryData } from "../../types/countryData";
import { FilterQuery } from "../../types/filterQuery";

type FilteredCountryLine = {
  countryCode: string;
  countryName: string;
  [key: `co2_${number}`]: string;
};

const useFilterCountryData = (
  countryData?: CountryData[],
  query?: FilterQuery
) => {
  if (!query || !countryData) {
    return { filteredCountryData: [], header: [] };
  }

  const countryCodeArray: string[] | undefined = query.countryCode
    ?.split(",")
    .map((code) => code.trim().toLowerCase());

  let filteredCountryData = countryData.filter((line) => {
    const lineCountryCodeLower = line.countryCode.toLowerCase();
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
  });

  // Filter data based on year range if provided
  const yearFrom = query.yearFrom || -Infinity;
  const yearTo = query.yearTo || Infinity;

  filteredCountryData = filteredCountryData.map((line) => {
    const filteredLine: Partial<FilteredCountryLine> = {
      countryCode: line.countryCode,
      countryName: line.countryName,
    };
    for (
      let year = Math.max(yearFrom, 2015);
      year <= Math.min(yearTo, 2023);
      year++
    ) {
      const yearKey = `co2_${year}`;
      // Type assertion to avoid um typing problems
      if (line[yearKey as keyof typeof line]) {
        filteredLine[yearKey as keyof FilteredCountryLine] =
          line[yearKey as keyof typeof line];
      }
    }

    return filteredLine as FilteredCountryLine;
  });

  // Generate header based on year range
  const header = ["countryCode", "countryName"];
  for (
    let year = Math.max(yearFrom, 2015);
    year <= Math.min(yearTo, 2023);
    year++
  ) {
    header.push(`co2_${year}`);
  }

  return { filteredCountryData, header };
};

export default useFilterCountryData;
