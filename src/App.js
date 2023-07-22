import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/home";
import "./app.css";
import UserList from "./pages/userList/userList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/"
            element = {<Home/>}
          /> 
          <Route exact path="/users"
            element = {<UserList/>}
          /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
