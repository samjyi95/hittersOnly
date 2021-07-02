import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './views/Home'
import Gametime from './views/Gametime'
import Recap from './views/Recap'
import NavBar from './views/NavBar'
import PlayBall from './views/PlayBall'
import {Route, Link} from 'react-router-dom'
import Login from "./views/Login"
import FirebaseConfig from "./config/FirebaseConfig"

function App() {

  const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        FirebaseConfig.auth().onAuthStateChanged(setCurrentUser)
        console.log(currentUser)
    }, [])

  return <div className="App">
    <NavBar />
    <Route exact path="/" component={Home}/>
    <Route exact path="/Recap" component={Recap}/>
    <Route exact path="/login" render={ () => <Login currentUser={currentUser}/>} />    
    <Route exact path="/gametime" component={Gametime}/>
    <Route exact path="/gametime/playball" component={PlayBall}/>
  </div>
}

export default App;
