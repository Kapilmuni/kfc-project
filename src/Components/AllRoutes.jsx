import {Route,Routes} from "react-router-dom"
import Home from "../Pages/Home"
import Menu from "../Pages/Menu"
import Deals from "../Pages/Deals"
import SignIn from "../Pages/SignIn"

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
     </Routes>
}