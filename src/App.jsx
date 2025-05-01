import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import AdminDashboard from "../src/Pages/AdminDashBoard";
import UserDashboard from "../src/Pages/UserDashBoard";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (

    <HashRouter>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      {/* </Router> */}
      </HashRouter>


  )
}

export default App
