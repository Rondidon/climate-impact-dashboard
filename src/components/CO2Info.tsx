import { FunctionComponent } from "react";

type CO2InfoProps = {};

const CO2Info: FunctionComponent<CO2InfoProps> = ({}) => {
  return (
    <div className="container">
      <div className="row my-1 my-xl-5">
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

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Warum ist CO2 ein Problem für das Klima?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              CO2 (Kohlendioxid) ist ein Treibhausgas, das zur Erwärmung der
              Erdatmosphäre beiträgt. Obwohl CO2 auf natürliche Weise vorkommt
              und ein wichtiger Bestandteil des Erdklimasystems ist, hat die
              durch menschliche Aktivitäten verursachte Zunahme der
              CO2-Emissionen, vor allem durch die Verbrennung fossiler
              Brennstoffe und Abholzung, zu einem unnatürlichen Anstieg der
              Konzentration dieses Gases in der Atmosphäre geführt. Dies
              verstärkt den Treibhauseffekt, führt zu einer globalen Erwärmung
              und hat weitreichende Auswirkungen auf das Klima.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Wie kann ich meinen CO2-Fußabdruck verringern?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Jeder kann dazu beitragen, seinen CO2-Fußabdruck zu verringern,
              indem er bewusstere Entscheidungen im täglichen Leben trifft.
              Einige Maßnahmen umfassen die Reduzierung des Energieverbrauchs zu
              Hause durch effizientere Geräte und bessere Isolierung, die
              Nutzung öffentlicher Verkehrsmittel oder Fahrradfahren anstelle
              des Autofahrens, den Wechsel zu erneuerbaren Energiequellen, wie
              z.B. Solar- oder Windenergie, für Ihr Zuhause, die Reduzierung des
              Konsums von tierischen Produkten und die Unterstützung von
              Unternehmen, die nachhaltige Praktiken fördern.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Was sind die Vorteile der Reduzierung von CO2-Emissionen?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Die Verringerung der CO2-Emissionen hat zahlreiche Vorteile, nicht
              nur für das Klima, sondern auch für die Gesundheit, die Wirtschaft
              und die Umwelt im Allgemeinen. Zu den positiven Auswirkungen
              gehören eine verbesserte Luftqualität, die Verringerung von
              gesundheitsschädlichen Luftverschmutzungen, die Stärkung der
              Wirtschaft durch die Schaffung von Arbeitsplätzen im Bereich der
              erneuerbaren Energien, die Verringerung der Abhängigkeit von
              fossilen Brennstoffen und damit verbundenen Energiekosten sowie
              der Schutz von Ökosystemen und Artenvielfalt, die durch den
              Klimawandel bedroht sind.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CO2Info;
