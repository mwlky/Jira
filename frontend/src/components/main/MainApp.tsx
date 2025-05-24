import { useEffect } from "react";
import { AuthProvider } from "../auth/AuthProvider";

import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import MainView from "./MainView";

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
