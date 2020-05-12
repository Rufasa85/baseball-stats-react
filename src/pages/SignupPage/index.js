import React, {useState} from 'react'
import API from "../../utils/API"


export default function LoginPage() {
    const [signupState, setSignupState] = useState({
        username:"",
        password:""
    })

    const handleInputChange = event=>{
        const {name,value} = event.target;
        setSignupState({
            ...signupState,
            [name]:value
        })
    }

    const handleFormSubmit = event=>{
        event.preventDefault();
        API.signup(signupState).then(res=>{
            console.log(res.data);
        })
    }

    return (
        <div>
            <form>
                <input type = 'text' name = 'username' onChange = {handleInputChange} value = {signupState.username}/>
                <input type = 'password' name = 'password' onChange = {handleInputChange} value = {signupState.password}/>
                <button onClick={handleFormSubmit}>Signup</button>
            </form>
        </div>
    )
}
