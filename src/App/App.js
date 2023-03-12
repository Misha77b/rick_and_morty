import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import RootRoutes from "../Router/RootRoutes";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Search />
        <RootRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
