import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import "../ItemListContainer/Item.css"
import { useCartContext } from '../../Context/CartContext'


const ItemDetail = ({ data }) => {

  const [irAlCarrito, setIrAlCarrito] = useState(false)
  const {addProduct} = useCartContext();
  const onAdd = (quantity) =>{
    setIrAlCarrito(true);
    addProduct(data, quantity);
  }

  return (
    <>
      <div>
        <div>
          <img src={data.img} className="imgProd" alt="imagen" />
          <div>
            <h2>{data.name}</h2>
          </div>
          { irAlCarrito 
            ? <Link to='/cart'>Terminar Compra</Link>
            : <ItemCount initial={0} stock={5} onAdd={onAdd}/>
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetail