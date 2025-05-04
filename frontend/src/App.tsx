import "./App.css";

import { AuthProvider } from "./components/auth/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainApp from "./MainApp";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="*" element={<MainApp />} />
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<SignupForm />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
