import React, { useEffect } from "react";
import { AuthProvider } from "./components/auth/AuthProvider";

import Sidebar from "./sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import MainView from "./components/navbar/MainView";

const MainApp = () => {
  useEffect(() => {
    document.title = "Jira";
  }, []);

  return (
    <AuthProvider>
      <div className="app-container">
        <Navbar />
        <div className="app-layout">
          <Sidebar />
          <MainView />
        </div>
      </div>
    </AuthProvider>
  );
};

export default MainApp;
