import escapeStringRegexp from "escape-string-regexp";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
    const isYearValid = (year: number | "" | undefined): boolean => {
      return (
        year === "" || (year !== undefined && year >= 2015 && year <= 2023)
      );
    };
    const areYearsInOrder = !yearFrom || !yearTo || yearFrom <= yearTo;
    const isValid =
      isYearValid(yearFrom) &&
      isYearValid(yearTo) &&
      areYearsInOrder &&
      (displayCompanies || displayCountries);

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
          display: ["companies", "countries"],
          companyName: "",
          countryCode: "",
          yearFrom: 2015,
          yearTo: 2023,
        };
        setCompanyName("");
        setCountryCode("");
        break;
      case "currentYear":
        newQuery = {
          display: ["companies", "countries"],
          companyName: "",
          countryCode: "",
          yearFrom: 2023,
          yearTo: 2023,
        };
        setCompanyName("");
        setCountryCode("");
        break;
      case "lastThreeYears":
        newQuery = {
          display: ["companies", "countries"],
          companyName: "",
          countryCode: "",
          yearFrom: 2021,
          yearTo: 2023,
        };
        setCompanyName("");
        setCountryCode("");
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
    const value = e.target.value;
    const newYear = value ? parseInt(value, 10) : "";
    setYearFrom(newYear);
  };

  const handleChangeYearTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newYear = value ? parseInt(value, 10) : "";
    setYearTo(newYear);
  };

  return (
    <div className="d-flex flex-column">
      <div>
        <h4 className="mb-3">{t("routes.databaseviewer.sidebar.preset")}</h4>
        <button className="nav-link m-2" onClick={() => handlePreset("all")}>
          {t("routes.databaseviewer.sidebar.presetAll")}
        </button>
        <button
          className="nav-link m-2"
          onClick={() => handlePreset("currentYear")}
        >
          {t("routes.databaseviewer.sidebar.presetCurrentYear")}
        </button>
        <button
          className="nav-link m-2"
          onClick={() => handlePreset("lastThreeYears")}
        >
          {t("routes.databaseviewer.sidebar.presetLastThreeYears")}
        </button>
      </div>
      <hr className="my-3" />
      <h4 className="mb-3">{t("routes.databaseviewer.sidebar.filter")}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="yearFrom" className="form-label">
            {t("routes.databaseviewer.sidebar.yearFrom")}
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
            {t("routes.databaseviewer.sidebar.yearTo")}
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
            {t("routes.databaseviewer.sidebar.displayCompanies")}
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
            {t("routes.databaseviewer.sidebar.displayCountries")}
          </label>
        </div>
        {displayCompanies && (
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="companyName" className="form-label">
              {t("routes.databaseviewer.sidebar.companyName.label")}
            </label>
            <input
              type="text"
              className="climate-scheme-input-field"
              id="companyName"
              placeholder={t(
                "routes.databaseviewer.sidebar.companyName.placeholder"
              )}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        )}
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="countryCode" className="form-label">
            {t("routes.databaseviewer.sidebar.countryCode.label")}
          </label>
          <input
            type="text"
            className="climate-scheme-input-field"
            id="countryCode"
            value={countryCode}
            placeholder={t(
              "routes.databaseviewer.sidebar.countryCode.placeholder"
            )}
            onChange={(e) => setCountryCode(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn climate-scheme-btn"
          disabled={!isFormValid}
        >
          {t("routes.databaseviewer.sidebar.submit")}
        </button>
      </form>
    </div>
  );
};

export default FilterSidebar;
