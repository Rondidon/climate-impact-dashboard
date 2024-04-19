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

      <FilterSidebar
        currentFilterQuery={currentFilterQuery}
        setCurrentFilterQuery={setCurrentFilterQuery}
      />

      {currentFilterQuery.display.includes("companies") && (
        <CompanyDataTable filterQuery={currentFilterQuery} />
      )}
      {currentFilterQuery.display.includes("countries") && (
        <CountryDataTable filterQuery={currentFilterQuery} />
      )}
    </div>
  );
};

export default DatabaseViewer;
