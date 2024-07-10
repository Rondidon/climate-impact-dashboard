import { useState } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import ScrollToTop from "./scrollToTop";

const appStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
};

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="App climate-scheme-bg-grey" style={appStyle}>
      <HashRouter>
        <ScrollToTop />
        <AppHeader
          searchQuery={searchQuery}
          onSetSearchQuery={(query: string) => setSearchQuery(query)}
        />
        <AppMain searchQuery={searchQuery} />
        <AppFooter />
      </HashRouter>
    </div>
  );
}

export default App;
