import React from "react";
import "./App.css";
import Navbar from "./globals/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import Footer from "./globals/Footer";
import Cuatrocientoscuatro from "./components/404";
import Cart from "./components/containers/Cart";
import Checkout from "./components/Checkout";
import CartProvider from "./contexts/CartContext";
import Home from "./components/Home";
import Categories from "./components/Categories";
import SuccessCheckout from "./components/SuccessCheckout"; 
//import Upload form "./utils/Upload.jsx";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/categoria/:caturl">
                <Categories />
              </Route>
              <Route path="/item/:itemid">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              {/*
                <Route path="/upload">
                  <Upload />
              </Route>
              */}
              <Route exact path="/checkout/:idOrden">
                <SuccessCheckout />
              </Route>
              <Route path="*">
                <Cuatrocientoscuatro />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
