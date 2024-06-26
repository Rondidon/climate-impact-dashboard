import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FilterQuery } from "../../types/filterQuery";
import CompanyDataTable from "./CompanyDataTable";
import CountryDataTable from "./CountryDataTable";
import FilterSidebar from "./FilterSidebar";

type DatabaseViewerProps = {
  initialQuery: FilterQuery;
};

const DatabaseViewer: React.FunctionComponent<DatabaseViewerProps> = ({
  initialQuery,
}) => {
  const { t } = useTranslation();
  const [currentFilterQuery, setCurrentFilterQuery] =
    useState<FilterQuery>(initialQuery);

  return (
    <div className="container">
      <div className="row my-xl-5 my-1 gap-4">
        <h1 className="mb-4">{t("routes.databaseviewer.title")}</h1>
        <p>{t("routes.databaseviewer.text")}</p>
      </div>
      <div className="d-flex gap-4 flex-xl-row flex-column w-xl-25 w-100">
        <aside className="climate-scheme-database-container">
          <FilterSidebar
            currentFilterQuery={currentFilterQuery}
            setCurrentFilterQuery={setCurrentFilterQuery}
          />
        </aside>

        <div className="d-flex flex-column gap-4 w-xl-75 w-100">
          {currentFilterQuery.display.includes("companies") && (
            <div className="climate-scheme-database-container">
              <CompanyDataTable filterQuery={currentFilterQuery} />
            </div>
          )}
          {currentFilterQuery.display.includes("countries") && (
            <div className="climate-scheme-database-container">
              <CountryDataTable filterQuery={currentFilterQuery} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatabaseViewer;
