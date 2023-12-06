import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import DashBoard from "../elements/DashBoard"
import Login from "../elements/components/Login _ Registration/Login"
import Logout from "../elements/components/Login _ Registration/Logout"
import Register from "../elements/components/Login _ Registration/Register"
import Profile from "../elements/components/Service Profile/Profile"
import AdminPanel from '../pages/AdminPanel'
import Earnings from '../pages/Earnings.jsx'
import Home from "../pages/Home.jsx"
import Jobs from "../pages/Jobs.jsx"
import Services from "../pages/Services"
import Settings from "../pages/Settings.jsx"
import Withdrawl from '../pages/Withdrawl.jsx'
import AdminRoute from './AdminRoute'
import ProtectedRoute from './ProtectedRoute'
import WorkerRoute from './WorkerRoute'

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
            <Route path="/settings" element={
               <ProtectedRoute>
                  <Settings />
               </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
               <ProtectedRoute>
                  <DashBoard />
               </ProtectedRoute>} />

            <Route path="/myprofile" element={
               <WorkerRoute>
                  <Profile />
               </WorkerRoute>} />
            <Route path="/jobs" element={
               <WorkerRoute>
                  <Jobs />
               </WorkerRoute>} />
            <Route path="/earnings" element={
               <WorkerRoute>
                  <Earnings />
               </WorkerRoute>} />
            <Route path="/withdrawl" element={
               <WorkerRoute>
                  <Withdrawl />
               </WorkerRoute>} />
            <Route path="/adminPanel" element={
               <AdminRoute>
                  <AdminPanel />
               </AdminRoute>} />

         </Routes>
      </Router>)
}
export default AppRoutes