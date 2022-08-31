import { useContext , useState} from "react";
import { loginUser } from "../context/Context";
import { useNavigate } from "react-router-dom";



export default function SignIn(){
    const {user , setUser} = useContext(loginUser)
    const navigate = useNavigate()
    const onSubmit = (e)=>{
        e.preventDefault()
        const psw1 = e.currentTarget.elements.psw.value;
        const psw2 = e.currentTarget.elements.psw2.value;
        const name = e.currentTarget.elements.name.value
    if(validatePassword(psw1,psw2)){
         setUser({name: name ,password: psw1})
         navigate('../Login')
    }
    else{ 
        alert('passwords is not match');
    }
        

       
    }
const validatePassword = (ps1, ps2)=>{
if(ps1 === ps2){
    return true
}
else{
    return false
}
}
    return <div id="login">
    <form onSubmit={onSubmit}>
        <h1>Sign in</h1>

        <input placeholder="Enter Name" name="name" required /><br />
        <input type="password" placeholder="Enter Password" name="psw" required /><br />
        <input type="password" placeholder="Enter Password Secondly" name="psw2" required /><br />

        <button type="submit">Login</button><br />
    </form>
</div>
}

