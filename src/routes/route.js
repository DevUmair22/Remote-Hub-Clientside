import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AdminRoute from './AdminRoute'
import ProtectedRoute from './ProtectedRoute'
import WorkerRoute from './WorkerRoute'
import DashBoard from "../elements/DashBoard"
import Login from "../elements/components/Login _ Registration/Login"
import Logout from "../elements/components/Login _ Registration/Logout"
import Register from "../elements/components/Login _ Registration/Register"
import Profile from "../elements/components/Service Profile/Profile"
import AdminPanel from '../pages/AdminPanel'
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
            <Route path="/logout" element={
               <ProtectedRoute>
                  <Logout />
               </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
               <ProtectedRoute>
                  <DashBoard />
               </ProtectedRoute>} />

            <Route path="/profile" element={
               <WorkerRoute>
                  <Profile />
               </WorkerRoute>} />
            <Route path="/adminPanel" element={
               <AdminRoute>
                  <AdminPanel />
               </AdminRoute>} />

         </Routes>
      </Router>)
}
export default AppRoutes