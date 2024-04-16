import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import getAssetLocation from "../utils/assetLocator";
import { AppRoute } from "./routes";

type AppHeaderProps = {
  onSetSearchQuery: (searchQuery: string | undefined) => void;
  searchQuery: string | undefined;
};

const AppHeader: FunctionComponent<AppHeaderProps> = ({
  onSetSearchQuery,
  searchQuery,
}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchInputFieldValue, setSearchInputFieldValue] = useState<string>(
    searchQuery ? searchQuery : ""
  );

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSetSearchQuery(searchInputFieldValue);
    navigate(AppRoute.SearchResults);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(AppRoute.Home);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg climate-scheme-bg-black">
        <div className="container-fluid">
          <a
            className="navbar-brand brand-logo d-flex align-items-center"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="ECOTRACE"
            onClick={handleLogoClick}
          >
            <img
              src={getAssetLocation("logo.png", "img")}
              alt="Bootstrap"
              width="48"
              height="52"
            />
            <div className="d-inline-block d-lg-none d-xxl-block brand-claim ms-2">
              <strong>{t("claim.part1")}</strong>
              {t("claim.part2")}
            </div>
          </a>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSuppor  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);tedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            title="Navigation aufklappen"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={AppRoute.Database}>
                  {t("navigation.database")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={AppRoute.CO2Info}>
                  {t("navigation.co2info")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={AppRoute.Participation}>
                  {t("navigation.participation")}
                </Link>
              </li>
            </ul>
            <li className="dropdown">
              <a
                className="dropdown-toggle nav-link mx-lg-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("header.languageSelector")}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      i18n.changeLanguage("de");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    {t("common.languages.de")}
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      i18n.changeLanguage("en");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    {t("common.languages.en")}
                  </a>
                </li>
              </ul>
            </li>
            <form
              className="d-flex"
              role="search"
              onSubmit={handleSearchSubmit}
            >
              <input
                className="climate-scheme-input-field me-2"
                type="search"
                placeholder={t("header.searchPlaceholder")}
                aria-label="Search"
                value={searchInputFieldValue}
                onChange={(event) => {
                  // escape input (XSS)
                  const sanitizedValue = event.target.value.replace(
                    /<script.*?>.*?<\/script>|[<>]/gi,
                    ""
                  );
                  setSearchInputFieldValue(sanitizedValue);
                }}
              />
              <button
                className="btn climate-scheme-btn"
                type="submit"
                disabled={
                  searchInputFieldValue.length === 0 ||
                  searchInputFieldValue.length > 20
                }
              >
                {t("common.actions.search")}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
