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
import UseReducerDemo from "./components/usereducer/useReducer";
import Counter from "./components/counter/Counter";
import Input from "./components/redux/Input";
import Name from "./components/redux/Name";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Input />
      <br />
      <hr />
      <br />
      <Name /> */}
      {/* <Counter /> */}
      {/* <UseReducerDemo /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/useref" element={<UseRef />} />

        <Route path="/products" element={<Products />}>
          <Route path="" element={<Navigate to="electronics" />} />
          <Route path="electronics" element={<Electronic />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route
            path="mensc"
            element={
              <h2
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  margin: "0px",
                }}
              >
                Mens Clothing Component Under Implementation
              </h2>
            }
          />
          <Route
            path="womensc"
            element={
              <h2
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  margin: "0px",
                }}
              >
                Womens Clothing Component Under Implementation
              </h2>
            }
          />
        </Route>

        <Route path="/support" element={<Support />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/productdetails/:id" element={<ProductDetails />} />

        <Route
          path="/dummy"
          element={
            <div>
              <h2>Dummy Code</h2>
            </div>
          }
        />

        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </div>
  );
}

export default App;
