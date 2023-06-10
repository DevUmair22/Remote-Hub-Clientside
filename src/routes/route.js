import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

// import Blogs from "../pages/Blogs/blogs"
import Login from "../elements/components/Login _ Registration/Login"
import Register from "../elements/components/Login _ Registration/Register"
import Home from "../pages/Home.jsx"
// import BuildingMaterialRates from "../pages/BuildingMaterialRates/BuildingMaterialRates"
// import Vendors from "../pages/vendors/Vendors"
// import FloorPlans from "../pages/FloorPlans/floorPlans"
// import LoginPage from "../pages/Login/login"
// import SignupPage from "../pages/Signup/signup"
// import VenderProfile from "../pages/vendors/venderProfile"
function AppRoutes() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/blogs" element={<Blogs />} />
         <Route path="/material-rates" element={<BuildingMaterialRates />} />
         <Route path="/venders" element={<Vendors />} />
         <Route path="/floor-plans" element={<FloorPlans />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/sign-up" element={<SignupPage />} />
         <Route path="/vender-profile" element={<VenderProfile />} /> */}
         </Routes>
      </Router>)
}
export default AppRoutes