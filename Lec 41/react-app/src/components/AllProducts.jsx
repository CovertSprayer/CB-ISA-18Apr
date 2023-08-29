import React, { useEffect, useState } from 'react' 
import axios from 'axios';
import Product from './Product';
import './AllProducts.css'

const AllProducts = () => {

  const [products, setProducts] = useState([]);

  async function getData(){
    const res = await axios.get('https://dummyjson.com/products');
    // console.log(res.data.products);
    setProducts(res.data.products)
  }

  useEffect(()=>{
    getData();
  }, [])


  return (
    <div className='container'>
        {
            products.map((item)=>{
                return <Product key={item.id} item={item}/>
            })
        }
    </div>
  )
}

export default AllProducts