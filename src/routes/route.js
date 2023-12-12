import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import DashBoard from "../elements/DashBoard"
import Login from "../elements/components/Login _ Registration/Login"
import Logout from "../elements/components/Login _ Registration/Logout"
import Register from "../elements/components/Login _ Registration/Register"
import ProfilePage from "../elements/components/Profiles_Management/ProfilePage.jsx"
import AdminPanel from '../pages/AdminPanel'
import Hirings from "../pages/Employer/Hirings.jsx"
import PurchaseHistory from "../pages/Employer/PurchaseHistory.jsx"
import ReportUser from "../pages/Employer/ReportUser.jsx"
import Terminate from "../pages/Employer/Terminate.jsx"
import Home from "../pages/Home.jsx"
import Services from "../pages/Services"
import Earnings from '../pages/Worker/Earnings.jsx'
import Jobs from "../pages/Worker/Jobs.jsx"
import Settings from "../pages/Worker/Settings.jsx"
import SetupProfile from "../pages/Worker/SetupProfile.jsx"
import Withdrawl from '../pages/Worker/Withdrawl.jsx'
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



            <Route path="/hirings" element={
               <ProtectedRoute>
                  <Hirings />
               </ProtectedRoute>} />
            {/* <Route path="/advancedsearch" element={
               <ProtectedRoute>
                  <AdvancedSearch />
               </ProtectedRoute>} /> */}
            <Route path="/purchasehistory" element={
               <ProtectedRoute>
                  <PurchaseHistory />
               </ProtectedRoute>} />

            <Route path="/settings" element={
               <ProtectedRoute>
                  <Settings />
               </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
               <ProtectedRoute>
                  <DashBoard />
               </ProtectedRoute>} />


            <Route path="/report/:id" element={
               <ProtectedRoute>
                  <ReportUser />
               </ProtectedRoute>} />



            {/* <Route path="/myprofile" element={
               <WorkerRoute>
                  <ProfilePage />
               </WorkerRoute>} /> */}
            <Route path="/profile/:id" element={
               <ProtectedRoute>
                  <ProfilePage />
               </ProtectedRoute>} />
            <Route path="/terminate/:id" element={
               <ProtectedRoute>
                  <Terminate />
               </ProtectedRoute>} />
            <Route path="/jobs" element={
               <WorkerRoute>
                  <Jobs />
               </WorkerRoute>} />
            <Route path="/earnings" element={
               <WorkerRoute>
                  <Earnings />
               </WorkerRoute>} />
            <Route path="/setupProfile/:id" element={
               <WorkerRoute>
                  <SetupProfile />
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