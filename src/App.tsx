import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';

const appStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh"
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <AppHeader/>
      <AppMain route="Home"/>
      <AppFooter/>
    </div>
  );
}

export default App;