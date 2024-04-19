import { FunctionComponent } from "react";
import { FilterQuery } from "../../types/filterQuery";
import useFilterCompanyData from "../hooks/useFilterCompanyData";
import useReadCompanyData from "../hooks/useReadCompanyData";
import { useSortData } from "../hooks/useSortData";

type CompanyDataTableProps = {
  filterQuery: FilterQuery;
};

const CompanyDataTable: FunctionComponent<CompanyDataTableProps> = ({
  filterQuery,
}) => {
  const { companyValues } = useReadCompanyData();
  const { filteredCompanyData, header } = useFilterCompanyData(
    companyValues?.data,
    filterQuery
  );
  const { sortedData, sortDataFunc, sortKey } =
    useSortData(filteredCompanyData);

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

export default CompanyDataTable;
