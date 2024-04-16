import { FunctionComponent } from "react";

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = ({}) => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card">
            <img
              src="placeholder-image-url"
              className="card-img-top"
              alt="CO2 Emissions"
            />
            <div className="card-body">
              <h5 className="card-title">Was ist CO2?</h5>
              <p className="card-text">
                Erfahren Sie mehr über CO2, dessen Auswirkungen auf das Klima
                und warum es wichtig ist, die Emissionen zu reduzieren.
              </p>
              <a href="/was-ist-co2" className="btn btn-primary">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card">
            <img
              src="placeholder-image-url"
              className="card-img-top"
              alt="Reduce CO2"
            />
            <div className="card-body">
              <h5 className="card-title">Wie kann ich beitragen?</h5>
              <p className="card-text">
                Entdecken Sie, wie Sie durch einfache Änderungen in Ihrem
                täglichen Leben zur Reduzierung von CO2-Emissionen beitragen
                können.
              </p>
              <a href="/beitragen-co2-reduzieren" className="btn btn-primary">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <h2 className="mb-4">Entdecken Sie CO2 Emissionen</h2>
          <p>
            Tauchen Sie ein in unsere Datenbank und erkunden Sie CO2-Emissionen
            nach Ländern und Unternehmen. Nutzen Sie unsere Such- und
            Sortierfunktionen, um spezifische Daten zu finden und zu
            vergleichen.
          </p>
          <a href="/datenbank" className="btn btn-success">
            Zur Datenbank
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
