import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Common/Footer/index.footer";

import CoinPage from "./pages/CoinPage";
import DashboardPage from "./pages/DashboardPage";
import ComparePage from "./pages/ComparePage";
import WatchlistPage from "./pages/WatchlistPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomePage/>} />
          <Route path="/dasboard" element= {<DashboardPage/>} />
          {/* <Route path="/CoinPage" element= {<CoinPage/>} />*/}
          <Route path="/compare" element= {<ComparePage/>} />
          <Route path="/watchlish" element= {<WatchlistPage/>} /> 
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
