import { FunctionComponent } from "react";

type CO2InfoProps = {};

const CO2Info: FunctionComponent<CO2InfoProps> = ({}) => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <h1 className="mb-4">Was ist CO2?</h1>
          <p>
            Kohlendioxid (CO2) ist ein farbloses, geruchloses Gas, das natürlich
            in der Erdatmosphäre vorkommt. Es spielt eine entscheidende Rolle im
            natürlichen Treibhauseffekt und trägt dazu bei, die Erde bewohnbar
            zu machen. Allerdings führen menschliche Aktivitäten, insbesondere
            die Verbrennung fossiler Brennstoffe und die Abholzung, zu einem
            Anstieg der CO2-Konzentration in der Atmosphäre, was den
            Treibhauseffekt verstärkt und den Klimawandel antreibt.
          </p>
          <p>
            Die Reduzierung der CO2-Emissionen ist entscheidend, um die
            schlimmsten Auswirkungen des Klimawandels zu vermeiden. Dies kann
            durch Energieeffizienz, den Umstieg auf erneuerbare Energiequellen,
            die Aufforstung und viele andere Maßnahmen erreicht werden.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Häufig gestellte Fragen</h2>
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Warum ist CO2 ein Problem?
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  CO2 trägt zum Treibhauseffekt bei und ist eine der
                  Hauptursachen für den globalen Klimawandel. Ein Überschuss an
                  CO2 in der Atmosphäre kann zu extremen Wetterereignissen, dem
                  Anstieg des Meeresspiegels und anderen schädlichen
                  Auswirkungen führen.
                </div>
              </div>
            </div>
            {/* Weitere Fragen können hier analog hinzugefügt werden */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CO2Info;
