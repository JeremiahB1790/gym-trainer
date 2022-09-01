import { useNavigate, Link } from "react-router-dom"
import React, {CSSProperties} from "react"
import "./Navbar.css"

export default function Navbar(){

    // const navigate = useNavigate();   -> navigate allows us to replace the URL
   return <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/exercises">Exercises</Link></li>
    </ul>
}