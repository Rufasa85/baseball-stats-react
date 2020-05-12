import React, {useState} from 'react'
import API from "../../utils/API"
import {useHistory} from "react-router-dom"


export default function LoginPage(props) {
    const [loginState, setLoginState] = useState({
        username:"",
        password:""
    })

    const history = useHistory();

    const handleInputChange = event=>{
        const {name,value} = event.target;
        setLoginState({
            ...loginState,
            [name]:value
        })
    }

    const handleFormSubmit = event=>{
        event.preventDefault();
        API.login(loginState).then(res=>{
            console.log(res.data);
            if(res.data.user){
                props.submitHandler(res.data.user)
            } else {
                props.submitHandler(false)
            }

        })
    }

    const handleSessionBtnClick = event=>{
        event.preventDefault();
        API.readSessions().then(res=>{
            console.log(res.data);
        })
    }

    return (
        <div>
            <form>
                <input type = 'text' name = 'username' onChange = {handleInputChange} value = {loginState.username}/>
                <input type = 'password' name = 'password' onChange = {handleInputChange} value = {loginState.password}/>
                <button onClick={handleFormSubmit}>Login</button>
            </form>
            <button onClick={handleSessionBtnClick}>check login status</button>
        </div>
    )
}
