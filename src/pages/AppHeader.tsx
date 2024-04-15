import { FunctionComponent } from "react";
import getAssetLocation from "../utils/assetLocator";

type AppHeaderProps = {

}

const AppHeader: FunctionComponent<AppHeaderProps> = ({ }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg climate-scheme-bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand brand-logo d-flex align-items-center" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="ECOTRACE">
                        <img src={getAssetLocation("logo.png", "img")} alt="Bootstrap" width="48" height="52" />
                        <div className="d-inline-block d-lg-none d-xxl-block brand-claim ms-2"><strong>ECO</strong>TRACE</div>
                    </a>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" title="Navigation aufklappen">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Emissionsdatenbank</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Was ist CO<sub>2</sub>?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Was kann ich beitragen?</a>
                            </li>
                        </ul>
                        <li className="dropdown">
                            <a className="dropdown-toggle nav-link mx-lg-3" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Sprache
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Deutsch</a></li>
                                <li><a className="dropdown-item" href="#">Englisch</a></li>
                            </ul>
                        </li>
                        <form className="d-flex" role="search">
                            <input className="climate-scheme-input-field me-2" type="search" placeholder="Suchbegriff" aria-label="Search" />
                            <button className="btn climate-scheme-btn" type="submit">Suchen</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader;