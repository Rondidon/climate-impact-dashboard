import { FunctionComponent } from "react";
import { FilterQuery } from "../../types/filterQuery";
import useFilterCountryData from "../hooks/useFilterCountryData";
import useReadCountryData from "../hooks/useReadCountryData";
import { useSortData } from "../hooks/useSortData";
import { renderSortIcon } from "./renderSortItem";
import { useTranslation } from "react-i18next";
import { translateTableHeader } from "./translateHeader";

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
  const { t } = useTranslation();

  if (!header || !sortedData) {
    return <div>No table data.</div>;
  }

  return (
    <div>
      <h3>{t("routes.databaseviewer.countrytable.title")}</h3>
      <p>{t("routes.databaseviewer.countrytable.text")}</p>
      <div className="overflow-auto">
        <table className="table table-dark table-striped text-nowrap">
          <thead>
            <tr>
              {header.map((key) => (
                <th
                  scope="col"
                  key={key}
                  onClick={() => sortDataFunc(key)}
                  style={{
                    cursor: "pointer",
                    minWidth: "11em",
                  }}
                  className="climate-scheme-table-header"
                >
                  {renderSortIcon(key, sortKey)} {translateTableHeader(key, t)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr key={index}>
                {header.map((head, cellIndex) => (
                  <td key={cellIndex} className="">
                    {head === "countryCode" ? (
                      <div className="d-inline-block">
                        <span
                          className={`flag-icon me-1 flag-icon-${row[
                            head
                          ].toLowerCase()}`}
                        ></span>
                        <span>{row[head]}</span>
                      </div>
                    ) : (
                      row[head]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryDataTable;
