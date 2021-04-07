import CartWidget from "./CartWidget";
import {BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom';

export  default function NavBar(){
    return(
        <>
      <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo mr-auto">HELL <span>TSHIRTS</span></h1>
      <nav class="nav-menu d-none d-lg-block">
        <ul id ="thisAnchor">
        <li><Link to = "/ItemListContainer">CONTAINER/HOME</Link></li>
        <li><Link to = "/category/Remeras">REMERAS</Link></li>
        <li><Link to = "/category/Pantalones">PANTALONES</Link></li>
          <li><a href="#staff">Nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
<section class="d-flex align-items-center">
  <div class="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay="100">
    <div class="row">
      <div class="col-lg-8">
        <h1>Bienvenidos a <span>Hell remeras</span></h1>
        <h2>Trayendo las remeras del infierno hace mas de 3 años</h2>
      </div>
      <CartWidget/>
    </div>
  </div>
</section>
</>
    );
}


// CONSIGNA NAVBAR DESAFIO CLASE 3 
// >> Consigna: en el directorio de tu proyecto, crea una carpeta dentro de src llamada “components”, que contenga a NavBar.js para crear una barra de menú simple.
// >>Aspectos a incluir en el entregable:
// Crea una carpeta dentro de src llamada components que contenga a NavBar.js para crear una barra de menú simple, que tenga:
// Brand (título/nombre de la tienda)
// Un listado de categorías clickeables (p)
// Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).
