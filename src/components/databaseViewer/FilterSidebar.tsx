import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import escapeStringRegexp from "escape-string-regexp";
import { DisplayOption, FilterQuery } from "../../types/filterQuery";

type FilterSidebarProps = {
  currentFilterQuery: FilterQuery;
  setCurrentFilterQuery: (filterQuery: FilterQuery) => void;
};

const FilterSidebar: React.FunctionComponent<FilterSidebarProps> = ({
  currentFilterQuery,
  setCurrentFilterQuery,
}) => {
  const { t } = useTranslation();
  const [yearFrom, setYearFrom] = useState(currentFilterQuery.yearFrom);
  const [yearTo, setYearTo] = useState(currentFilterQuery.yearTo);
  const [displayCompanies, setDisplayCompanies] = useState(
    currentFilterQuery.display.includes("companies")
  );
  const [displayCountries, setDisplayCountries] = useState(
    currentFilterQuery.display.includes("countries")
  );
  const [companyName, setCompanyName] = useState(
    currentFilterQuery.companyName || ""
  );
  const [countryCode, setCountryCode] = useState(
    currentFilterQuery.countryCode || ""
  );
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    const yearValid = yearFrom && yearTo ? yearFrom <= yearTo : false;
    const isValid = yearValid && (displayCompanies || displayCountries);
    setIsFormValid(isValid);
  }, [yearFrom, yearTo, displayCompanies, displayCountries]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    const displayOptions: DisplayOption[] = [];
    if (displayCompanies) displayOptions.push("companies");
    if (displayCountries) displayOptions.push("countries");

    const newQuery: FilterQuery = {
      // Stellen Sie sicher, dass newQuery dem FilterQuery Typ entspricht
      yearFrom,
      yearTo,
      display: displayOptions,
      companyName: escapeStringRegexp(companyName),
      countryCode: escapeStringRegexp(countryCode),
    };
    setCurrentFilterQuery(newQuery);
  };

  // Preset-Handler
  const handlePreset = (preset: string) => {
    let newQuery: FilterQuery;
    switch (preset) {
      case "all":
        newQuery = {
          companyName: undefined,
          countryCode: undefined,
          display: ["companies", "countries"],
          yearFrom: undefined,
          yearTo: undefined,
        };
        break;
      case "currentYear":
        const currentYear = 2023;
        newQuery = {
          companyName: undefined,
          countryCode: undefined,
          display: ["companies", "countries"],
          yearFrom: currentYear,
          yearTo: undefined,
        };
        break;
      case "lastThreeYears":
        const threeYearsAgo = 2021;
        newQuery = {
          companyName: undefined,
          countryCode: undefined,
          display: ["companies", "countries"],
          yearFrom: threeYearsAgo,
          yearTo: undefined,
        };
        break;
      default:
        return;
    }
    setCurrentFilterQuery(newQuery);
    setYearFrom(newQuery.yearFrom);
    setYearTo(newQuery.yearTo);
    setDisplayCompanies(newQuery.display.includes("companies"));
    setDisplayCountries(newQuery.display.includes("countries"));
  };

  const handleChangeYearFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = parseInt(e.target.value, 10);
    if (newYear >= 2015 && newYear <= 2023) {
      setYearFrom(
        newYear as 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023
      );
    } else {
      setYearFrom(undefined);
    }
  };

  const handleChangeYearTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = parseInt(e.target.value, 10);
    if (newYear >= 2015 && newYear <= 2023) {
      setYearTo(
        newYear as 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023
      );
    } else {
      setYearTo(undefined);
    }
  };

  return (
    <div className="d-flex flex-column">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="yearFrom" className="form-label">
            {t("yearFrom")}
          </label>
          <input
            type="number"
            className="climate-scheme-input-field"
            id="yearFrom"
            value={yearFrom}
            onChange={handleChangeYearFrom}
            min={2015}
            max={2023}
          />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="yearTo" className="form-label">
            {t("yearTo")}
          </label>
          <input
            type="number"
            className="climate-scheme-input-field"
            id="yearTo"
            value={yearTo}
            onChange={handleChangeYearTo}
            min={2015}
            max={2023}
          />
        </div>
        <div className="mb-3 d-flex gap-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="displayCompanies"
            checked={displayCompanies}
            onChange={() => setDisplayCompanies(!displayCompanies)}
          />
          <label className="form-check-label" htmlFor="displayCompanies">
            {t("displayCompanies")}
          </label>
        </div>
        <div className="mb-3 d-flex gap-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="displayCountries"
            checked={displayCountries}
            onChange={() => setDisplayCountries(!displayCountries)}
          />
          <label className="form-check-label" htmlFor="displayCountries">
            {t("displayCountries")}
          </label>
        </div>
        {displayCompanies && (
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="companyName" className="form-label">
              {t("companyName")}
            </label>
            <input
              type="text"
              className="climate-scheme-input-field"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        )}
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="countryCode" className="form-label">
            {t("countryCode")}
          </label>
          <input
            type="text"
            className="climate-scheme-input-field"
            id="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn climate-scheme-btn"
          disabled={!isFormValid}
        >
          {t("submit")}
        </button>
      </form>
      <hr />
      <div>
        <button className="nav-link m-2" onClick={() => handlePreset("all")}>
          {t("presetAll")}
        </button>
        <button
          className="nav-link m-2"
          onClick={() => handlePreset("currentYear")}
        >
          {t("presetCurrentYear")}
        </button>
        <button
          className="nav-link m-2"
          onClick={() => handlePreset("lastThreeYears")}
        >
          {t("presetLastThreeYears")}
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
