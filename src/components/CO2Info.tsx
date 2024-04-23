import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

type CO2InfoProps = {};

const CO2Info: FunctionComponent<CO2InfoProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row my-1 my-xl-5">
        <div className="col">
          <h1 className="mb-4">{t("routes.co2info.title")}</h1>
          <p>{t("routes.co2info.text1")}</p>
          <p>{t("routes.co2info.text2")}</p>
        </div>
      </div>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item climate-scheme-bg-dark-grey climate-scheme-bright-text">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button climate-scheme-bg-dark-grey climate-scheme-faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {t("routes.co2info.faq.q1")}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{t("routes.co2info.faq.a1")}</div>
          </div>
        </div>
        <div className="accordion-item climate-scheme-bg-dark-grey climate-scheme-bright-text">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed climate-scheme-bg-dark-grey climate-scheme-faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {t("routes.co2info.faq.q2")}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{t("routes.co2info.faq.a2")}</div>
          </div>
        </div>
        <div className="accordion-item climate-scheme-bg-dark-grey climate-scheme-bright-text">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed climate-scheme-bg-dark-grey climate-scheme-faq-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {t("routes.co2info.faq.q3")}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{t("routes.co2info.faq.a3")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CO2Info;
