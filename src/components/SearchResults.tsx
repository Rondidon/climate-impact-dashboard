import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppRoute } from "./appRoute";
import { Link } from "react-router-dom";

type SearchResultsProps = {
  searchQuery: string;
};

type SearchResult = {
  appRoute: AppRoute;
  results: string[];
};

const pathToAppRoute = (routeKey: string): AppRoute | undefined => {
  switch (routeKey) {
    case "home":
      return "/";
    case "co2info":
      return "/co2info";
    case "participation":
      return "/participation";
    case "databaseviewer":
      return "/database";
    default:
      return undefined;
  }
};

// Diese Hilfsfunktion durchläuft rekursiv die Übersetzungsschlüssel
// und sammelt alle Strings, die die Suchanfrage enthalten.
const searchInTranslations = (
  translations: any,
  query: string,
  matchedResults: string[] = []
) => {
  Object.keys(translations).forEach((key) => {
    const value = translations[key];
    if (typeof value === "string") {
      // Prüft, ob der Wert die Abfrage enthält
      if (value.toLowerCase().includes(query.toLowerCase())) {
        matchedResults.push(value);
      }
    } else if (typeof value === "object") {
      // Wenn der Wert ein Objekt ist, durchlaufe seine Schlüssel rekursiv
      searchInTranslations(value, query, matchedResults);
    }
  });
  return matchedResults;
};

const calculateSearchResults = (
  query: string,
  translation: any
): SearchResult[] => {
  let results: SearchResult[] = [];

  // Durchläuft die Übersetzungsschlüssel auf oberster Ebene (z.B. 'home', 'co2info', etc.)
  Object.keys(translation).forEach((routeKey) => {
    const routeTranslations = translation[routeKey];
    let matchedResults: string[] = [];

    // Ruft die rekursive Suche auf
    searchInTranslations(routeTranslations, query, matchedResults);

    const appRoute: AppRoute | undefined = pathToAppRoute(routeKey);
    // Wenn Treffer gefunden wurden, füge sie den Ergebnissen hinzu
    if (matchedResults.length > 0 && appRoute !== undefined) {
      results.push({
        appRoute: appRoute,
        results: matchedResults,
      });
    }
  });

  return results;
};

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  searchQuery,
}) => {
  const { i18n, t } = useTranslation();

  const [searchResults, setSearchResults] = useState<
    SearchResult[] | undefined
  >(undefined);

  useEffect(() => {
    const currentLanguage = i18n.language; // Aktuelle Sprache erhalten
    const translation: JSON = i18n.getResource(
      currentLanguage,
      "translation",
      "routes"
    ); // 'namespace' und 'key' ersetzen
    setSearchResults(calculateSearchResults(searchQuery, translation));
  }, [searchQuery, i18n.language]);

  const appRouteToSitename = (appRoute: AppRoute): string | undefined => {
    switch (appRoute) {
      case "/":
        return t("routes.home.title");
      case "/co2info":
        return t("routes.co2info.title");
      case "/participation":
        return t("routes.participation.title");
      case "/database":
        return t("routes.database.title");
      default:
        return "?";
    }
  };

  if (!searchQuery) {
    return (
      <div>
        <h1>{t("routes.searchresults.title")}</h1>
        <p>{t("routes.searchresults.noresultsfound")}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>{t("routes.searchresults.title")}</h1>
      <div className="container">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <Link
              to={result.appRoute}
              key={index}
              className="card mb-3 climate-scheme-bg-dark-grey climate-scheme-card-btn"
            >
              <div className="card-header">
                {appRouteToSitename(result.appRoute)}
              </div>
              <ul className="list-group list-group-flush">
                {result.results.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="list-group-item climate-scheme-bg-dark-grey climate-scheme-bright-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))
        ) : (
          <p>{t("routes.searchresults.noresultsfound")}</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
