import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import OrderCard from '../components/OrderCard'
import axios from 'axios'


const Orderdetails = () => {
  const [order, setOrder] = useState([]);
  const fetchAllOrder =async () =>{
  let id=localStorage.getItem('id')
  const token = localStorage.getItem('token');
      const headers = {
          authorization:token
      }
  const res = await axios.get(`http://localhost:8000/api/get-order?id=${id}`,{headers});
  console.log(res);
  setOrder(res.data.orders);
    
  }
  useEffect(() => {
    fetchAllOrder()
  }, []);

  return (
    <>
    <Link to="/addorder"><button className='order-details-btn'>Back</button></Link>

    
    <div className='orderlistContainer'>
    {
      order.map((order) => {
         return <OrderCard order={order} key={order.id}/>
      })
    }
    </div>
    </>
  )
}

export default Orderdetails