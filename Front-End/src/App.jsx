import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LogIn/LoginPage';
import SignUpPage from './components/LogIn/SignUpPage';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
