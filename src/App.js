import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Navbar & Footer
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

//Pages
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Detail from "./components/pages/Detail";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import SuccessCheckout from "./components/pages/SuccessCheckout";
import Cuatrocientoscuatro from "./components/pages/404";

//Context
import CartProvider from "./contexts/CartContext";

//Style
import "./App.css";

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
                <Detail />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
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
