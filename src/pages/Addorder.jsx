import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axiosBaseURL from './baseurl'


const Addorder = () => {
    const [number, setNumber] = useState("");
    const [sub_total, setSubTotal] = useState("");
    const [item_name, setItemName] = useState("");
    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
    }



    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // getting the token from local storage and set to headers
            const token = localStorage.getItem('token');
            const headers = {
                authorization: token
            }

            const res = await axiosBaseURL.post(`api/add-order`, { sub_total, number, item_name }, { headers });

            toast("Order added successfully")

            console.log(res)

            // res.data && window.location.replace('/orderdetails');

        } catch (err) {
            toast.error("Check Your Ph.Number")
            console.log(err);

        }

    }


    return (
        <div className="container">

            <div className="screen">
                <div className="screen__content">
                    <div className="orderdetails-btn">
                        <div>
                            <Link to="/orderdetails"><button className='order-details-btn'>Order Details</button></Link>
                        </div>
                        <div>
                            <Link to="/"><button className='order-details-btn' onClick={logout}>LogOut</button></Link>
                        </div>
                    </div>
                    <form className="login" onSubmit={handleSubmit}>
                        <h3 >Add Your Order</h3>
                        <div className="login__field">
                            <i className="login__icon fas fa-user" />
                            <input type="number" className="login__input" name='number' placeholder="Phone Number"
                               required onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock" />
                            <input type="number" className="login__input" name='sub_total' placeholder="sub_total"
                               required onChange={e => setSubTotal(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock" />
                            <input type="text" className="login__input" name='item_name' placeholder="Item name"
                               required onChange={e => setItemName(e.target.value)} />
                        </div>
                        <button className="button login__submit" type='submit'>
                            <span className="button__text">Order Now</span>
                            <i className="button__icon fas fa-chevron-right" />
                        </button>
                    </form>



                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4" />
                    <span className="screen__background__shape screen__background__shape3" />
                    <span className="screen__background__shape screen__background__shape2" />
                    <span className="screen__background__shape screen__background__shape1" />
                </div>
            </div>
        </div>
    )
}

export default Addorder