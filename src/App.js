import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/home";
import "./app.css";
import UserList from "./pages/userList/userList";
import User from "./pages/user/user";
import ProductList from "./pages/productList/productList";
import Product from "./pages/product/product";
import NewUser from "./pages/newUser/newUser";
import NewProduct from "./pages/newProduct/newProduct";
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
          <Route exact path="/user/:userId"
            element = {<User/>}
          />
          <Route exact path="/newUser" 
            element = {<NewUser/>}
          />
          <Route exact path="/products" 
            element = {<ProductList/>}
          />
          <Route exact path="/product/:productId" 
            element = {<Product/>}
          />
          <Route exact path="/newproduct" 
            element = {<NewProduct/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
