import './App.css';
import Navbar from './globals/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';

export default function App() {
  return (
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
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
