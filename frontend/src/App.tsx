import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainApp from "./MainApp";
import LoginForm from "./components/auth/LoginForm";
import { AuthProvider } from "./components/auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="*" element={<MainApp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
