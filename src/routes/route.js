import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import DashBoard from "../elements/DashBoard"
import Login from "../elements/components/Login _ Registration/Login"
import Register from "../elements/components/Login _ Registration/Register"
import Profile from "../elements/components/Service Profile/Profile"
import Home from "../pages/Home.jsx"
import Services from "../pages/Services"

function AppRoutes() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/profile" element={<Profile />} />

         </Routes>
      </Router>)
}
export default AppRoutes