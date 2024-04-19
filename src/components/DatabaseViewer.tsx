import React from "react";
import { useTranslation } from "react-i18next";
import useReadCSV from "./hooks/useReadCSV";
import { useSortData } from "./hooks/useSortData"; // Pfad nach Bedarf anpassen

const DatabaseViewer: React.FunctionComponent = () => {
  const { companyValues } = useReadCSV();
  const { t } = useTranslation();
  const { sortedData, sortDataFunc, sortKey } = useSortData(
    companyValues?.data
  );

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

  return (
    <div className="row my-1 my-xl-5">
      <h1 className="mb-4">{t("routes.databaseviewer.title")}</h1>
      <p>{t("routes.databaseviewer.text1")}</p>
      <div className="overflow-auto">
        <table className="table text-nowrap">
          <thead>
            <tr>
              {Object.keys(companyValues?.data[0] || {}).map((key) => (
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
            {sortedData?.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, cellIndex) => (
                  <td scope="row" key={cellIndex} className="table-dark">
                    {value}
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

export default DatabaseViewer;
