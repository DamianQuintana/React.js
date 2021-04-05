import logo from './Image/CartWidgetLogo.jpg'
export default function CartWidget(){
    return(
        <div id = "hero">
            <h1 style = {{paddingTop: "50px"}}>COMPONENTE<span>CART WIDGET</span></h1>
            <img id = "cartLogo"src = {logo}></img>
        </div>
    );
}