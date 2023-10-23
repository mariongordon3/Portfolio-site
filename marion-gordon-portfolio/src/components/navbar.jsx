import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav>
        <Link className="lnk" to='/'>Home</Link>
        <Link className="lnk" to='/projects'>Projects</Link>
        <Link className="lnk" to='/journey'>Journey</Link>
        </nav>
    )
}