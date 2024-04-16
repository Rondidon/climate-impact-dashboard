import { useState } from 'react';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import { AppRoute } from './components/routes';

const appStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh"
}

function App() {

  const [route, setRoute] = useState<AppRoute>("Home");

  return (
    <div className="App" style={appStyle}>
      <AppHeader onChangeRoute={(route: AppRoute) => setRoute(route)}/>
      <AppMain route={route}/>
      <AppFooter onChangeRoute={(route: AppRoute) => setRoute(route)}/>
    </div>
  );
}

export default App;