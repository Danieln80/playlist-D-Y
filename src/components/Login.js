import { useContext } from "react";
import {Link} from "react-router-dom";
import { loginUser } from "../context/Context";
import { useNavigate } from "react-router-dom";

function Login() {
    const {user , setUser} = useContext(loginUser)
    const navigate = useNavigate()
    const onSubmit = (e)=>{
        e.preventDefault()
        const psw1 = e.currentTarget.elements.psw.value;
        const name = e.currentTarget.elements.name.value
    if(user.name === name && user.password === psw1){
         
         navigate('../search')
    }
    else{ 
        alert('username and password is not match');
    }
    }
    return (
        <div id="login">
            <form onSubmit={onSubmit}>
                <h1>Login</h1>

                <input placeholder="Enter Name" name="name" required /><br />

                <input type="password" placeholder="Enter Password" name="psw" required /><br />

                <button>Login</button><br />
            </form>

             <Link to="/singin">Sign in</Link>
        </div>

    )

}

export default Login 