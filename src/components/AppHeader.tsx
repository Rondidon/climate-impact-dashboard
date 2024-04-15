import { FunctionComponent } from "react";
import getAssetLocation from "../utils/assetLocator";
import { useTranslation } from "react-i18next";

type AppHeaderProps = {

}

const AppHeader: FunctionComponent<AppHeaderProps> = ({ }) => {

    const { t, i18n } = useTranslation();

    return (
        <header>
            <nav className="navbar navbar-expand-lg climate-scheme-bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand brand-logo d-flex align-items-center" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="ECOTRACE">
                        <img src={getAssetLocation("logo.png", "img")} alt="Bootstrap" width="48" height="52" />
                        <div className="d-inline-block d-lg-none d-xxl-block brand-claim ms-2"><strong>{t("claim.part1")}</strong>{t("claim.part2")}</div>
                    </a>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" title="Navigation aufklappen">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t("navigation.database")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t("navigation.co2info")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t("navigation.participation")}</a>
                            </li>
                        </ul>
                        <li className="dropdown">
                            <a className="dropdown-toggle nav-link mx-lg-3" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {t("header.languageSelector")}
                            </a>
                            <ul className="dropdown-menu">
                                <li><a onClick={(e) => { e.preventDefault(); i18n.changeLanguage("de"); }} className="dropdown-item" href="#">{t("common.languages.de")}</a></li>
                                <li><a onClick={(e) => { e.preventDefault(); i18n.changeLanguage("en"); }} className="dropdown-item" href="#">{t("common.languages.en")}</a></li>
                            </ul>
                        </li>
                        <form className="d-flex" role="search">
                            <input className="climate-scheme-input-field me-2" type="search" placeholder={t("header.searchPlaceholder")} aria-label="Search" />
                            <button className="btn climate-scheme-btn" type="submit">{t("common.actions.search")}</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader;