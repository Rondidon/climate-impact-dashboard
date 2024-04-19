import { FunctionComponent } from "react";
import { FilterQuery } from "../../types/filterQuery";
import useFilterCompanyData from "../hooks/useFilterCompanyData";
import useReadCompanyData from "../hooks/useReadCompanyData";
import { useSortData } from "../hooks/useSortData";
import { renderSortIcon } from "./renderSortItem";

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
                {key} {renderSortIcon(key, sortKey)}
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
