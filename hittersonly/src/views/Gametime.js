import React from 'react'
import PlayBall from './PlayBall'
import {Route, Link} from 'react-router-dom'

function Gametime(){
    return(
        <div>
        
            <h1>gametime scenarios page</h1>
            <p>This page will have the game schedules and history of games where you can view the analyitics for those games</p>
            <button>
                <Link to="/gametime/playball">Start a Game Analysis</Link>
            </button>
            
        </div>
    )
}

export default Gametime;