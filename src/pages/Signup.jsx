import React from 'react'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" method='POST'>
                        <div className="login__field">
                            <i className="login__icon fas fa-user" />
                            <input type="text" className="login__input" name='name' placeholder="Enter Your Name" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock" />
                            <input type="password" className="login__input" name='password' placeholder="Password" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-user" />
                            <input type="text" className="login__input" name='number' placeholder="Phone Number" />
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Sign UP Now</span>
                            <i className="button__icon fas fa-chevron-right" />
                        </button>
                    </form>
                    <span style={{textAlign:"center", color:"black" , fontWeight:"bolder", width:"100%",marginLeft:"50px"}} >Not A Member? <Link  to="/" style={{color:"lightgreen",fontSize:"20px"}}>Login Now</Link></span>
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