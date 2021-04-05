import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';
import NavBar from './Components/NavBar'
import image from './Components/Image/CartWidgetLogo.jpg'
import { useContext, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Item from './Components/Item';
import { useParams } from 'react-router-dom';
import RouterApp from './Components/RouterApp'
import ItemList from './Components/ItemList'
import { products } from './Components/Products';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CartContext from "./CartContext";
function App() {
  const context = useContext(CartContext);
  const [cart, setCart] = useState([]); //CREAMOS AL CART COMO UN ARRAY VACIO

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {/* EL value es un objeto por eso tiene doble llaves, tomo el valor en una expresion de JS  */}
      <BrowserRouter>
        <div className="App" id="hero">
          <NavBar />
          <Switch>
            <Route exact path="/category/:id"> <ItemListContainer></ItemListContainer></Route>
            <Route exact path="/ItemListContainer"> <ItemListContainer></ItemListContainer></Route>
            <Route exact path="/ItemDetailContainer/:id"> <ItemDetailContainer></ItemDetailContainer></Route>
            {/* <Route exact path = "/CartContext"><CartContext/></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
