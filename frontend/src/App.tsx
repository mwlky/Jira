import "./App.css";

import { AuthProvider } from "./components/auth/AuthProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { isTokenValid } from "./Utils";

import MainApp from "./MainApp";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isLoggedIn = token && isTokenValid(token);

    if (!isLoggedIn && location.pathname !== "/login" && location.pathname !== "/register") 
    {
      localStorage.removeItem("token");
      navigate("/login");
    }
    
    if (isLoggedIn && (location.pathname === "/login" || location.pathname === "/register")) {
      navigate("/board");
    }

  }, [navigate, location]);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route
          path="/board"
          element={
            <ProtectedRoute>
              <MainApp />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<SignupForm />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
