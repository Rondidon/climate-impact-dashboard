import AppFooter from './pages/AppFooter';
import AppHeader from './pages/AppHeader';
import AppMain from './pages/AppMain';


function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppMain route="Home"/>
      <AppFooter/>
    </div>
  );
}

export default App;