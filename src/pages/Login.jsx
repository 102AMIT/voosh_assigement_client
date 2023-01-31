import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosBaseURL from './baseurl'



const Login = () => {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const headers = { key: "sdadhhsahd" };

            const res = await axiosBaseURL.post(`api/login-user`, { password, number }, { headers });
            toast("Login successfully")

            // store the token and id in the local storage
            const token = res.data.token;
            localStorage.setItem("token", token)
            localStorage.setItem("id", res.data.id)
            setVerify(true);

            // res.data && window.location.replace('/addorder');
        } catch (err) {
            toast.error("Wrong Credentials")
        }

    }

    return (

        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    {
                        verify && <Link to="/addorder"><button className='order-details-btn'>Add Order</button></Link>
                    }

                    <form className="login" onSubmit={handleSubmit}>
                        <h3 >Login /AddUser</h3>
                        <div className="login__field">
                            <i className="login__icon fas fa-user" />
                            <input type="text" className="login__input" name='number' placeholder="Phone Number"
                              required  onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock" />
                            <input type="password" className="login__input" name='password' placeholder="Password"
                              required  onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button className="button login__submit" type='submit'>
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right" />
                        </button>
                    </form>
                    <span style={{ textAlign: "center", color: "black", fontWeight: "bolder", width: "100%", marginLeft: "50px" }} >Not A Member?
                        <Link to="/signup" style={{ color: "lightgreen", fontSize: "20px" }}>Sign Up Now</Link></span>
                    <br />


                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4" />
                    <span className="screen__background__shape screen__background__shape3" />
                    <span className="screen__background__shape screen__background__shape2" />
                    <span className="screen__background__shape screen__background__shape1" />
                </div>
            </div>
        </div>


    );
}

export default Login
