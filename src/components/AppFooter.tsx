import { FunctionComponent } from "react";
import getAssetLocation from "../utils/assetLocator";

type AppFooterProps = {

}

const AppFooter: FunctionComponent<AppFooterProps> = ({ }) => {
    return (
        <footer className="text-center text-lg-start text-muted climate-scheme-bg-black p-1">
            <section className="climate-scheme-color-green">
                <div className="container text-center text-md-start">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={getAssetLocation("logo.png", "img")} alt="Bootstrap" width="32" height="32" />
                                &nbsp;<strong>ECO</strong>TRACE
                            </h6>
                            <p>
                            Darstellung von CO<sub>2</sub> Emissionen nach Land und Unternehmen.<br/>
                            </p>
                            <p>
                                Ein Projekt im Rahmen einer Fallstudie für die IU Internationale Hochschule.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Übersicht
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Startseite</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Emissionsdatenbank</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Was ist CO<sub>2</sub>?</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Was kann ich beitragen?</a>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Rechtliches
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Impressum</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Datenschutz</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4 climate-scheme-color-green">
                © 2024 Robin Fabian Alexander Kindler
            </div>
        </footer>
    )
}

export default AppFooter;