import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FilterQuery } from "../../types/filterQuery";
import CompanyDataTable from "./CompanyDataTable";
import CountryDataTable from "./CountryDataTable";
import FilterSidebar from "./FilterSidebar";

const defaultQuery: FilterQuery = {
  yearFrom: 2021,
  yearTo: 2023,
  display: ["companies", "countries"],
  countryCode: undefined,
  companyName: undefined,
};

const DatabaseViewer: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const [currentFilterQuery, setCurrentFilterQuery] =
    useState<FilterQuery>(defaultQuery);

  return (
    <div className="row my-1 my-xl-5 gap-4">
      <div>
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
