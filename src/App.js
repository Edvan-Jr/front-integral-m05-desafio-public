import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ContextProvider } from './Context/context';
import Login from './Pages/Login';
import SignUp from './Pages/signUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
