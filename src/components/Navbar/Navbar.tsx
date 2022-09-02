import { Link } from "react-router-dom"
import "./Navbar.css"

import {AppUser} from "../../App"

interface NavbarProps{
    appUser: AppUser | null;
}

export default function Navbar({appUser}: NavbarProps){

    // const navigate = useNavigate();   -> navigate allows us to replace the URL
   return <ul className="navbar">
        <>
            {appUser && <AuthNavbarElements appUser={appUser}/>}
            {!appUser && <NoAuthNavbarElements/>}
        </>
    </ul>
}

function AuthNavbarElements({appUser}: NavbarProps){
    return <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/exercises">Exercises</Link></li>
        <li className="element right">Hello, {appUser?.username}</li>
    </>
}

function NoAuthNavbarElements(){
    return <>
        <li className="element">Gym App</li>
    </>
}