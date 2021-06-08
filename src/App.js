import MainPage from "./components/MainContent/Main"
import SideBar from "./components/SideBar/SideBar"
import "./App.css"

function App() {
  return (
    <div className='container'>
      <div className='SideBar'>
    <SideBar/>
    </div>
    <div className="MainContent">
   <MainPage/>
    </div>
    </div>
  );
}

export default App;
