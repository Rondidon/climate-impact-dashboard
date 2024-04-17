import React, { FunctionComponent, useState } from "react";
import useReadCSV, { CompanyData } from "./partials/useReadCSV";

type DatabaseViewerProps = {};

const DatabaseViewer: FunctionComponent<DatabaseViewerProps> = () => {
  const { companyValues } = useReadCSV();
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [isAsc, setIsAsc] = useState<boolean>(true);

  const sortData = (key: string) => {
    setSortKey(key);
    setIsAsc(!isAsc);
  };

  const sortedData = React.useMemo(() => {
    if (!companyValues?.data || sortKey === null) return companyValues?.data;
    return [...companyValues.data].sort((a, b) => {
      // Stellen Sie sicher, dass sortKey ein String ist, und verwenden Sie eine Typ-Assertion
      const key = sortKey as keyof CompanyData;
      const aValue = a[key];
      const bValue = b[key];

      // Vergleichen Sie aValue und bValue. Stellen Sie sicher, dass beide Werte für den Vergleich geeignet sind
      // Möglicherweise müssen Sie die Logik anpassen, um unterschiedliche Datentypen zu handhaben
      if (aValue < bValue) return isAsc ? -1 : 1;
      if (aValue > bValue) return isAsc ? 1 : -1;
      return 0;
    });
  }, [companyValues, sortKey, isAsc]);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            {Object.keys(companyValues?.data[0] || {}).map((key) => (
              <th
                key={key}
                onClick={() => sortData(key)}
                style={{ cursor: "pointer" }}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, cellIndex) => (
                <td key={cellIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseViewer;
