import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import CO2Info from "./CO2Info";
import DatabaseViewer from "./DatabaseViewer";
import Home from "./Home.tsx";
import Imprint from "./Imprint";
import NotFoundPage from "./NotFoundPage";
import Participation from "./Participation";
import PrivacyPolicy from "./PrivacyPolicy";
import SearchResults from "./SearchResults";
import { AppRoute } from "./routes";

type AppMainProps = {};

const AppMain: FunctionComponent<AppMainProps> = ({}) => {
  return (
    <div className="climate-scheme-content-page">
      <Routes>
        <Route path={AppRoute.Home} element={<Home />} />
        <Route path={AppRoute.CO2Info} element={<CO2Info />} />
        <Route path={AppRoute.Database} element={<DatabaseViewer />} />
        <Route path={AppRoute.Imprint} element={<Imprint />} />
        <Route path={AppRoute.Participation} element={<Participation />} />
        <Route path={AppRoute.PrivacyNote} element={<PrivacyPolicy />} />
        <Route path={AppRoute.SearchResults} element={<SearchResults />} />
        {/* Wildcard / 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AppMain;
