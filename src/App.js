import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import DashBoard from 'pages/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<DashBoard/>} />
          <Route path="/auth">
            <Route path="login" element={<Login/>} />
            <Route path="logout" element={<Logout/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
