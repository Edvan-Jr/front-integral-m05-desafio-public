import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ContextProvider } from './Context/context';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
