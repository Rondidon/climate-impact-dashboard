import { FunctionComponent } from "react";
import getAssetLocation from "../utils/assetLocator";

type ParticipationProps = {};

const Participation: FunctionComponent<ParticipationProps> = ({}) => {
  return (
    <div className="container">
      <h1 className="row mt-3 my-xl-5 mb-5 my-xl-0">
        Wie kann ich beitragen zur CO2-Reduktion?
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
                Öffentliche Verkehrsmittel und Fahrradfahren
              </h5>
              <p className="card-text">
                Nutzen Sie wo möglich öffentliche Verkehrsmittel oder das
                Fahrrad für Ihre täglichen Wege. Dies verringert nicht nur den
                CO2-Ausstoß, sondern fördert auch Ihre Gesundheit.
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
              <h5 className="card-title">Energieeffizienz steigern</h5>
              <p className="card-text">
                Achten Sie auf den Energieverbrauch Ihrer Haushaltsgeräte und
                bevorzugen Sie energieeffiziente Produkte. Das spart nicht nur
                Kosten, sondern schützt auch die Umwelt.
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
              <h5 className="card-title">Recycling und Wiederverwendung</h5>
              <p className="card-text">
                Fördern Sie die Wiederverwendung von Produkten und beteiligen
                Sie sich aktiv am Recycling, um die Produktion von Abfällen zu
                minimieren und Ressourcen zu schonen.
              </p>
            </div>
          </div>
        </div>
        {/* Weitere Spalten/Karten für zusätzliche Tipps können hier hinzugefügt werden */}
      </div>
      <div className="row">
        <div className="col">
          <p className="mt-5">
            Jeder Beitrag zählt, wenn es darum geht, die CO2-Emissionen zu
            reduzieren. Durch bewusste Entscheidungen im Alltag können wir
            gemeinsam einen Unterschied machen. Beginnen Sie heute, für eine
            nachhaltigere Zukunft.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Participation;
