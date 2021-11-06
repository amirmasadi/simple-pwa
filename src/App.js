import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage";
import  DataProvider  from "./DataProvider";

function App() {
  return (
    <Router>
      <DataProvider>
        <MainPage />
      </DataProvider>
    </Router>
  );
}

export default App;
