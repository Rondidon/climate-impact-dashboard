import { FunctionComponent } from "react";
import { FilterQuery } from "../../types/filterQuery";
import useFilterCountryData from "../hooks/useFilterCountryData";
import useReadCountryData from "../hooks/useReadCountryData";
import { useSortData } from "../hooks/useSortData";

type CountryDataTableProps = {
  filterQuery: FilterQuery;
};

const CountryDataTable: FunctionComponent<CountryDataTableProps> = ({
  filterQuery,
}) => {
  const { countryValues } = useReadCountryData();
  const { filteredCountryData, header } = useFilterCountryData(
    countryValues?.data,
    filterQuery
  );
  const { sortedData, sortDataFunc, sortKey } =
    useSortData(filteredCountryData);

  const renderSortIcon = (key: string) => {
    if (sortKey.key === key) {
      return (
        <svg
          // SVG-Attribute
          style={{ transform: sortKey.isAsc ? "" : "rotate(180deg)" }}
        >
          <path d="M2 5L8 11L14 5" />
        </svg>
      );
    }
    return null;
  };

  if (!header || !sortedData) {
    return <div>No table data.</div>;
  }

  return (
    <div className="overflow-auto">
      <table className="table text-nowrap">
        <thead>
          <tr>
            {header.map((key) => (
              <th
                scope="col"
                key={key}
                onClick={() => sortDataFunc(key)}
                style={{ cursor: "pointer", minWidth: "11em" }}
                className="table-dark"
              >
                {key} {renderSortIcon(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              {header.map((head, cellIndex) => (
                <td key={cellIndex} className="table-dark">
                  {row[head]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryDataTable;
