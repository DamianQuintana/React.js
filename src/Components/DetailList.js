// //Es agrupador de set de componentes item.js
import ItemListContainer from './ItemListContainer.js'
import Item from './Item'
import ItemDetail from './ItemDetail'


function DetailList({ details }) {
    return (<>
        {details.map((x) => <ItemDetail key={x} details={x} />)}
    </>);
}
export default DetailList;
