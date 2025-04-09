import './App.css';

import Sidebar from './sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import MainView from './components/navbar/MainView';

function App() {
  return (
    <div className='app-container'>
        <Navbar />  
      <div className='app-layout'>
        <Sidebar />
        <MainView />
      </div>
    </div>
  );
}

export default App;
