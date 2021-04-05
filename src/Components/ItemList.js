// //Es agrupador de set de componentes item.js
import ItemListContainer from './ItemListContainer.js'
import Item from './Item'


const ItemList = ({items})=>( 
<div id = "hero">
    <h1>componente ItemList</h1>
    {items.map((x)=> <Item key = {x} item= {x}/> )}
    {console.log("Itemlist")};
    {console.log(items)};
</div>
); 


export default ItemList;

//Le enviamos a item una prop que va a ser el item a mostra