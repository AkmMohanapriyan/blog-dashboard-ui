import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login'
import UserDashBoard from './Pages/UserDashBoard'
import AdminDashboard from "../src/Pages/AdminDashBoard"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashBoard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>


    </>
  )
}

export default App
