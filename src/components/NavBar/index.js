import React, {useState,useEffect} from 'react'
import {Link,useHistory} from "react-router-dom"
import "./style.css"
import API from '../../utils/API';

export default function NavBar(props) {
    const [loggedInUser,setLoggedInUser] = useState('');
   

    const history = useHistory()

    const handleLogoutClick = event=>{
        API.logout().then(res=>{
            props.logoutHandle();
        //    history.push('/')
        })
    }

    return (
        <div className = "NavBar">
            {props.currentUser? <h3>Welcome, {props.currentUser.username}</h3>:""}
            <button><Link to='/'>Stats Page</Link></button>
            {props.currentUser?<button><Link to ='/add'>Add a player!</Link></button>:""}

            {!props.currentUser?<button><Link to ='/login'>Login</Link></button>:""}
            {!props.currentUser?<button><Link to ='/signup'>Signup</Link></button>:""}
            {props.currentUser?<button onClick = {handleLogoutClick}>Logout </button>:""}
            
        </div>

    )
}
