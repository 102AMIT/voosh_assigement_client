import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosBaseURL from './baseurl'
const Signup = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const res = await axiosBaseURL.post(`api/add-user`, {
                name, password, number
            });
            toast("Sign up successfully")

            res.data && window.location.replace('/');
        } catch (err) {
            toast.error("Please check your Input")

        }
    }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleSubmit}>
                        <h3 >SignUp /Register</h3>
                        <div className="login__field">
                            <i className="login__icon fas fa-user" />
                            <input type="text" className="login__input" name='name' placeholder="Enter Your Name"
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock" />
                            <input type="password" className="login__input" name='password' placeholder="Password"
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-user" />
                            <input type="number" className="login__input" name='number' placeholder="Phone Number"
                                onChange={e => setNumber(e.target.value)} />
                        </div>
                        <button className="button login__submit" type='submit'>
                            <span className="button__text">Sign UP Now</span>
                            <i className="button__icon fas fa-chevron-right" />
                        </button>
                    </form>
                    <span style={{ textAlign: "center", color: "black", fontWeight: "bolder", width: "100%", marginLeft: "50px" }} >Not A Member?
                        <Link to="/" style={{ color: "lightgreen", fontSize: "20px" }}>Login Now</Link></span>
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
    )
}

export default Signup