import Login from "./pages/Login.jsx";
import Adduser from "./pages/Adduser.jsx";
import Orderdetails from "./pages/Orderdetails.jsx";
import Signup from "./pages/Signup.jsx";
import './index.css'
import{BrowserRouter as Router, Route ,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/orderdetails" element={<Orderdetails />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
