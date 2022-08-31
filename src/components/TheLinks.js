import { Link } from "react-router-dom";
export default function TheLinks(){
 return(
    <h3 id = "thelinks"><span><Link to="/search"> search  </Link></span>
    <Link to="/menu"> menu  </Link>
    <Link to="/login" onClick={()=>{document.getElementById("toclose").style.display="grid"}}> login </Link></h3> 
 )
}