// //Es agrupador de set de componentes item.js
import ItemListContainer from './ItemListContainer.js'
import Item from './Item'
import ItemDetail from './ItemDetail'


function DetailList({ details }) {
    return (<div id="hero">
        <h1>componente DetailList</h1>
        {details.map((x) => <ItemDetail key={x} details={x} />)}
    </div>);
}
export default DetailList;
