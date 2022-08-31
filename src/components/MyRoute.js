import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Menu from "./Menu";
import Search from "./Search";
import SignIn from "./SingIn";

export default function MyRoute(){

    return(
        <Routes>
        <Route path="/" element={<Navigate to ='/login'/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/singin" element={ <SignIn/>}/>
        </Routes>
    )
}