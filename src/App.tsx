import { useState } from 'react';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import { AppRoute } from './components/routes';
import { BrowserRouter } from 'react-router-dom';

const appStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh"
}

function App() {

  return (
    <div className="App" style={appStyle}>
      <BrowserRouter>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;