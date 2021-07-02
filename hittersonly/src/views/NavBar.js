import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/gametime">Gametime</Link>
            </li>
            <li>
                <Link to="/recap">Game Recap</Link>
            </li>
            <li>
                <Link to="/login">Login & Signup</Link>
            </li>
        </ul>
    )
}

export default NavBar;