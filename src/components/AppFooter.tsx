import { FunctionComponent, MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import getAssetLocation from "../utils/assetLocator";
import {
  co2InfoRoute,
  databaseRoute,
  homeRoute,
  imprintRoute,
  participationRoute,
  privacyRoute,
} from "./appRoute";

type AppFooterProps = {};

const AppFooter: FunctionComponent<AppFooterProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <footer className="text-center text-lg-start text-muted climate-scheme-bg-black p-1">
      <section className="climate-scheme-color-green">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img
                  src={getAssetLocation("logo.png", "img")}
                  alt="Bootstrap"
                  width="32"
                  height="32"
                />
                &nbsp;<strong>{t("claim.part1")}</strong>
                {t("claim.part2")}
              </h6>
              <p>{t("footer.projectDescription")}</p>
              <p>{t("footer.projectContext")}</p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {t("footer.linkHeader")}
              </h6>
              <p>
                <Link className="nav-link" to={homeRoute}>
                  {t("navigation.home")}
                </Link>
              </p>
              <p>
                <Link className="nav-link" to={databaseRoute}>
                  {t("navigation.database")}
                </Link>
              </p>
              <p>
                <Link className="nav-link" to={co2InfoRoute}>
                  {t("navigation.co2info")}
                </Link>
              </p>
              <p>
                <Link className="nav-link" to={participationRoute}>
                  {t("navigation.participation")}
                </Link>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {t("footer.legal.header")}
              </h6>
              <p>
                <Link className="nav-link" to={imprintRoute}>
                  {t("footer.legal.imprint")}
                </Link>
              </p>
              <p>
                <Link className="nav-link" to={privacyRoute}>
                  {t("footer.legal.privacy")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 climate-scheme-color-green">
        © 2024 {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default AppFooter;
