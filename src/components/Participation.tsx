import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import getAssetLocation from "../utils/assetLocator";

type ParticipationProps = {};

const Participation: FunctionComponent<ParticipationProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1 className="row mt-3 my-xl-5 mb-5 my-xl-0">
        {t("routes.participation.title")}
      </h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 climate-scheme-bg-dark-grey climate-scheme-bright-text">
            <img
              src={getAssetLocation("bicycle.png", "img")}
              className="card-img-top"
              alt="Fahrrad fahren"
            />
            <div className="card-body">
              <h5 className="card-title">
                {t("routes.participation.element1.title")}
              </h5>
              <p className="card-text">
                {t("routes.participation.element1.text")}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 climate-scheme-bg-dark-grey climate-scheme-bright-text">
            <img
              src={getAssetLocation("efficiency.png", "img")}
              className="card-img-top"
              alt="Energie sparen"
            />
            <div className="card-body">
              <h5 className="card-title">
                {t("routes.participation.element2.title")}
              </h5>
              <p className="card-text">
                {t("routes.participation.element2.text")}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 climate-scheme-bg-dark-grey climate-scheme-bright-text">
            <img
              src={getAssetLocation("recycling.png", "img")}
              className="card-img-top"
              alt="Wiederverwenden und recyceln"
            />
            <div className="card-body">
              <h5 className="card-title">
                {t("routes.participation.element3.title")}
              </h5>
              <p className="card-text">
                {t("routes.participation.element3.text")}
              </p>
            </div>
          </div>
        </div>
        {/* Weitere Spalten/Karten für zusätzliche Tipps können hier hinzugefügt werden */}
      </div>
      <div className="row">
        <div className="col">
          <p className="mt-5">{t("routes.participation.text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Participation;
