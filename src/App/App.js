import { BrowserRouter } from 'react-router-dom';
import RootRoutes from '../Router/RootRoutes';
import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <RootRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
