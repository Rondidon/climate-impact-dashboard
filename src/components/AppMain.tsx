import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import CO2Info from "./CO2Info";
import Home from "./Home";
import Imprint from "./Imprint";
import NotFoundPage from "./NotFoundPage";
import Participation from "./Participation";
import PrivacyPolicy from "./PrivacyPolicy";
import SearchResults from "./SearchResults";
import {
  co2InfoRoute,
  databaseRoute,
  homeRoute,
  imprintRoute,
  participationRoute,
  privacyRoute,
  searchResultsRoute,
} from "./appRoute";
import DatabaseViewer from "./databaseViewer/DatabaseViewer";
import { FilterQuery } from "../types/filterQuery";

type AppMainProps = {
  searchQuery: string;
};

const initialFilterQuery: FilterQuery = {
  yearFrom: 2021,
  yearTo: 2023,
  display: ["companies", "countries"],
  countryCode: undefined,
  companyName: undefined,
};

const AppMain: FunctionComponent<AppMainProps> = ({ searchQuery }) => (
  <div className="climate-scheme-content-page">
    <Routes>
      <Route path={homeRoute} element={<Home />} />
      <Route path={co2InfoRoute} element={<CO2Info />} />
      <Route
        path={databaseRoute}
        element={<DatabaseViewer initialQuery={initialFilterQuery} />}
      />
      <Route path={imprintRoute} element={<Imprint />} />
      <Route path={participationRoute} element={<Participation />} />
      <Route path={privacyRoute} element={<PrivacyPolicy />} />
      <Route
        path={searchResultsRoute}
        element={<SearchResults searchQuery={searchQuery} />}
      />
      {/* Wildcard / 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default AppMain;
