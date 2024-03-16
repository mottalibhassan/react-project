import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Product from './Product';

function App() {
  const [products , setProducts] = useState([]);
  const[cart,setCart] = useState([]);
  useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  // console.log(products);
  const handelProduct = (product)=>{
    const isExist = cart.find((p)=>p.id == product.id);
    if(!isExist){
      setCart([...cart,product])
    }
    else{
      alert('already in cart')
    }
    // console.log(cart);
  }
  const handelDelete = (id) =>{
    // console.log(id);
    const newCart = cart.filter(e => e.id != id);
    // console.log(newCart);
    setCart(newCart);
  }

  return (
    <>
      <div className='main-container'>
        <div className='cards-container'>
          {
            products.map(product =><Product handelProduct={handelProduct} key={product.id} product={product}></Product>)
          }
        </div>
        <div className='cart-container'>
          <h1>This is cart Container</h1>
          <div className='cart-title'>
            <h4>Name</h4>
            <h4>Price</h4>
          </div>
          <div >
            {
              cart.map((i,index)=>(
                <div key={i.id} className='card-title'>
                <p>{index + 1}</p>
                <p>{i.title.slice(0,20)}</p>
                <p>{i.price}</p>
                <button onClick={()=>handelDelete(i.id)}>Delete</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
