import { BrowserRouter } from "react-router-dom";
import RootRoutes from "../Router/RootRoutes";
import Header from "../components/Header/Header"
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="pages">
          <RootRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
