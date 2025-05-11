import "./App.css";

import { AuthProvider } from "./components/auth/AuthProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import ProtectedRoute from "./components/ProtectedRoute";
import MainApp from "./MainApp";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) 
      navigate("/board"); 
    
    else navigate("/login");
  }, [navigate]);

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
