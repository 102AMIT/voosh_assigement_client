import Login from "./pages/Login.jsx";
import Addorder from "./pages/Addorder.jsx";
import Orderdetails from "./pages/Orderdetails.jsx";
import Signup from "./pages/Signup.jsx";
import './index.css'
import{BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
// import Header from "./components/Header.jsx";


function App() {
  return (
    <div className="App">
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addorder" element={<Addorder />} />
        <Route path="/orderdetails" element={<Orderdetails />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
