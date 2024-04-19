import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FilterQuery } from "../../types/filterQuery";
import CompanyDataTable from "./CompanyDataTable";
import CountryDataTable from "./CountryDataTable";

const defaultQuery: FilterQuery = {
  yearFrom: 2020,
  yearTo: 2023,
  display: ["companies", "countries"],
};

const DatabaseViewer: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const [currentFilterQuery, setCurrentFilterQuery] =
    useState<FilterQuery>(defaultQuery);

  return (
    <div className="row my-1 my-xl-5">
      <h1 className="mb-4">{t("routes.databaseviewer.title")}</h1>
      <p>{t("routes.databaseviewer.text1")}</p>
      {currentFilterQuery.display.includes("countries") && (
        <CountryDataTable filterQuery={currentFilterQuery} />
      )}

      {currentFilterQuery.display.includes("companies") && (
        <CompanyDataTable filterQuery={currentFilterQuery} />
      )}
    </div>
  );
};

export default DatabaseViewer;
