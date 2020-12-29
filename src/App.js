import './App.css';
import Navbar from './globals/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Footer from './globals/Footer';
import CartWidget from './globals/CartWidget';
import Cuatrocientoscuatro from './globals/404';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
          <CartWidget />
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
            <Route path="*">
              <Cuatrocientoscuatro />
            </Route>
          </Switch>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
