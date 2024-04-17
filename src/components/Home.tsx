import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import getAssetLocation from "../utils/assetLocator";
import { co2InfoRoute, databaseRoute, participationRoute } from "./appRoute";
type HomeProps = {};

const Home: FunctionComponent<HomeProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row my-1 my-xl-5">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card climate-scheme-bg-dark-grey climate-scheme-bright-text mb-4 mb-md-0">
            <img
              src={getAssetLocation("co2.png", "img")}
              className="card-img-top"
              alt="CO2 Emissions"
            />
            <div className="card-body">
              <h5 className="card-title">{t("routes.home.co2info.title")}</h5>
              <p className="card-text">{t("routes.home.co2info.text")}</p>
              <Link to={co2InfoRoute} className="btn climate-scheme-btn">
                {t("common.actions.readmore")}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card climate-scheme-bg-dark-grey climate-scheme-bright-text">
            <img
              src={getAssetLocation("participation.png", "img")}
              className="card-img-top"
              alt="Reduce CO2 emmissions"
            />
            <div className="card-body">
              <h5 className="card-title">
                {t("routes.home.participation.title")}
              </h5>
              <p className="card-text">{t("routes.home.participation.text")}</p>
              <Link to={participationRoute} className="btn climate-scheme-btn">
                {t("common.actions.readmore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col">
          <h2 className="mb-4">{t("routes.home.title")}</h2>
          <p>{t("routes.home.text")}</p>
          <Link to={databaseRoute} className="btn climate-scheme-btn">
            {t("common.actions.databaselink")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
