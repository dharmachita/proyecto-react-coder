import React from "react";
import "./App.css";
import Navbar from "./globals/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import Footer from "./globals/Footer";
import Cuatrocientoscuatro from "./components/404";
import Cart from "./components/containers/Cart";
import Checkout from "./components/Checkout";
import CartProvider from "./contexts/CartContext";

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
                <ItemListContainer />
              </Route>
              <Route path="/categoria/:catid">
                <ItemListContainer />
              </Route>
              <Route path="/item/:itemid">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/checkout">
                <Checkout />
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
