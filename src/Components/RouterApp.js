import { Router, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import NavBar from './NavBar';
export default function RouterApp(){
    return(
        <Router>
        <div>
            <NavBar/>
            <Switch>
            <Route path ="/">
                <ItemListContainer/>
            </Route>

            <Route path ="/category/:id">
                <ItemListContainer/>
            </Route>

            <Route path ="/item/:id">

            </Route>
            </Switch>
        </div>
        </Router>
    );
}