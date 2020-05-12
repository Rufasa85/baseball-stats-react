import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import StatsPage from './pages/StatsPage';
import AddPlayerPage from './pages/AddPlayerPage';
import DetailsPage from "./pages/DetailsPage"
import LoginPage from './pages/LoginPage';
import SignupPage from "./pages/SignupPage"
import NavBar from './components/NavBar';
import API from './utils/API';


function App() {
  const [currentUser,setCurrentUser] = useState(false);

  useEffect(()=>{
    API.readSessions().then(res=>{
      if(res.data.user){
        setCurrentUser(res.data.user)
      }else {
        setCurrentUser(false)
      }
    })
  },[])

  const loginSubmitHandler= userData=>{
    setCurrentUser(userData)
  }

  const logoutHandle = ()=>{
    setCurrentUser(false)
  }

  return (
    <Router>
      <NavBar  currentUser={currentUser} logoutHandle = {logoutHandle}/>
      <Switch>
        <Route exact path="/">
          <StatsPage />
        </Route>
        <Route exact path = "/login">
          <LoginPage submitHandler={loginSubmitHandler}/>
        </Route>
        <Route exact path = "/signup">
         <SignupPage />
        </Route>
        <Route exact path="/add">
          <AddPlayerPage currentUser={currentUser}/>
        </Route>
        <Route exact path ="/player/:id">
          <DetailsPage currentUser = {currentUser}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
