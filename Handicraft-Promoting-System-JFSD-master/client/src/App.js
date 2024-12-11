import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Register from './pages/UserAuthentication/Register';
import Login from './pages/UserAuthentication/Login';
import PrivateRoute from './pages/UserAuthentication/PrivateRoute';
import TopScroll from './pages/BackToTopButton/BackToTopButton';
import UserHome from './pages/UserHome/UserHome';
import AdLogin from './pages/AdminAuthentication/AdLogin'
import AdHome from './pages/AdminHome/AdHome';

function App() {
  const isUserSignedIn = !!localStorage.getItem('token')
  return (
    <div>
        <TopScroll/>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adlogin" element={<AdLogin />} />
          <Route path="/adhome" element={<AdHome />} />
          {
        isUserSignedIn && <Route
          path="/home"
          element={
           
              <UserHome/>
            
          }
        />
      }
        
          {/* Protect the "/protected" route */}
          <Route
            path="/protected"
            element={
              <PrivateRoute>
                <h1>Protected Page</h1>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
