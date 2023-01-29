import React from 'react'

const OrderCard = (item) => {
  return (
    <div >

      <div className="orderlist">
        <div className='number'>
          <span>Number : -</span> <span>{item.order.number}</span>
        </div>

        <div className='itemName'>
          <span>Item Name : -</span> <span>{item.order.item_name}</span>
        </div>

        <div className='sub-total'>
          <span>Sub Total : -</span> <span>{item.order.sub_total}</span>
        </div>

      </div>
      </div>
  )
}

export default OrderCard