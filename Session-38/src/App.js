import "./App.css";

import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Support from "./components/support/Support";
import ProductDetails from "./components/productdetails/ProductDetails";
import PageNotfound from "./components/pagenotfound/PageNotfound";
import NestedProducts from "./components/products-2/NestedProducts";
import Electronic from "./components/products-2/Electronic";
import Jewelery from "./components/products-2/Jewelery";
import UseRef from "./components/useref/UseRef";
import Cart from "./components/cart/Cart";
import ClassDemo from "./components/class-components/ClassDemo";
import State from "./components/class-components/State";

function App() {
  return (
    <div className="App">
      <Nav />
      <State />
      <ClassDemo title="First Title" color="red" />
      <ClassDemo title="Second Title" color="green" />
    </div>
  );
}

export default App;
