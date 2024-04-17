import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

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
      <BrowserRouter>
        <AppHeader
          searchQuery={searchQuery}
          onSetSearchQuery={(query: string) => setSearchQuery(query)}
        />
        <AppMain searchQuery={searchQuery} />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
