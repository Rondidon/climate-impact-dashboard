import { FunctionComponent } from "react";
import getAssetLocation from "../utils/assetLocator";
import { useTranslation } from "react-i18next";

type AppFooterProps = {

}

const AppFooter: FunctionComponent<AppFooterProps> = ({ }) => {
    const {t} = useTranslation();

    return (
        <footer className="text-center text-lg-start text-muted climate-scheme-bg-black p-1">
            <section className="climate-scheme-color-green">
                <div className="container text-center text-md-start">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={getAssetLocation("logo.png", "img")} alt="Bootstrap" width="32" height="32" />
                                &nbsp;<strong>{t("claim.part1")}</strong>{t("claim.part2")}
                            </h6>
                            <p>
                                {t("footer.projectDescription")}
                            </p>
                            <p>
                                {t("footer.projectContext")}
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                {t("footer.linkHeader")}
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">{t("navigation.home")}</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">{t("navigation.database")}</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">{t("navigation.co2info")}</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">{t("navigation.participation")}</a>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                {t("footer.legal.header")}
                            </h6>
                            <p>
                                {t("footer.legal.imprint")}
                            </p>
                            <p>
                                <a href="#!" className="text-reset">{t("footer.legal.privacy")}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4 climate-scheme-color-green">
                © {t("footer.copyright")}
            </div>
        </footer>
    )
}

export default AppFooter;