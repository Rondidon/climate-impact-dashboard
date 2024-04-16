import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "./routes";
import getAssetLocation from "../utils/assetLocator";

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = ({}) => {
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
              <h5 className="card-title">Was ist CO2?</h5>
              <p className="card-text">
                Erfahren Sie mehr über CO2, dessen Auswirkungen auf das Klima
                und warum es wichtig ist, die Emissionen zu reduzieren.
              </p>
              <Link to={AppRoute.CO2Info} className="btn climate-scheme-btn">
                Mehr erfahren
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
              <h5 className="card-title">Wie kann ich beitragen?</h5>
              <p className="card-text">
                Entdecken Sie, wie Sie durch einfache Änderungen in Ihrem
                täglichen Leben zur Reduzierung von CO2-Emissionen beitragen
                können.
              </p>
              <Link
                to={AppRoute.Participation}
                className="btn climate-scheme-btn"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col">
          <h2 className="mb-4">Entdecken Sie CO2 Emissionen</h2>
          <p>
            Tauchen Sie ein in unsere Datenbank und erkunden Sie CO2-Emissionen
            nach Ländern und Unternehmen. Nutzen Sie unsere Such- und
            Sortierfunktionen, um spezifische Daten zu finden und zu
            vergleichen.
          </p>
          <Link to={AppRoute.Database} className="btn climate-scheme-btn">
            Zur Datenbank
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
