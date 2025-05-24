import "./App.css";

import { useEffect } from "react";
import { isTokenValid } from "./utils/Utils";
import { AuthProvider } from "./components/auth/AuthProvider";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import MainApp from "./MainApp";
import LoginForm from "./components/auth/login/LoginForm";
import SignupForm from "./components/auth/login/SignupForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isLoggedIn = token && isTokenValid(token);

    if (
      !isLoggedIn &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      localStorage.removeItem("token");
      navigate("/login");
    }

    if (
      isLoggedIn &&
      (location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/")
    ) {
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
