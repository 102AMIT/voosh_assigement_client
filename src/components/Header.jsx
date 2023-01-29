import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

  const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  }
  const auth= localStorage.getItem('id');

  return (
    <>
      <nav>
        <h2>Voosh Assigement</h2>
        <ul>
        {
          auth ? (
                  <>
                      <li><Link to="/addorder">Add Order</Link></li>
                      <li><Link to="/" onClick={logout}>Logout</Link></li>
                      <li><Link to="/orderdetails">Order Details</Link></li>
                  </>
                  )
                  :
                  <>
                      <li><Link to="/signup">Sign Up</Link></li>
                      <li><Link to="/">Home</Link></li>
                  </>
                  
                  
        }
                 
          
        </ul>
      </nav>
    </>
  )
}

export default Header