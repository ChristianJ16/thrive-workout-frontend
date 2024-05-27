import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import LoginPage from '../pages/LoginSignUp/Login'

const URL = `${process.env.REACT_APP_BACKEND_URL}/users/login`

const Login = (props) => {
   const [toggleLogin, setToggleLogin] = useState(true)
   const [toggleError, setToggleError] = useState(false)
   const [errorMessage, setErrorMessage] = useState('')
   const [toggleLogout, setToggleLogout] = useState(false)
   const [currentUser, setCurrentUser] = useState({})
 
      const handleLogin = async (user) => {
    

        const response = await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(user)
        })


        const loginResult = await response.json()
        if(loginResult.status !== 200){
            setToggleError(true)
            setErrorMessage(loginResult.msg)
        }else{
            //setCurrentUser(loginResult.user)
            setToggleError(false)
            props.onLoginSuccess(loginResult.user)
        }
        console.log("loginResult:", loginResult.status)
      }
    
      const handleLogout = () => {
        setCurrentUser({})
        handleToggleLogout()
      }
    
      const handleToggleForm = () => {
        setToggleError(false)
        if(toggleLogin === true) {
          setToggleLogin(false)
        } else {
          setToggleLogin(true)
        }
      }
    
      const handleToggleLogout = () => {
        if(toggleLogout) {
          setToggleLogout(false)
        } else {
          setToggleLogout(true)
        }
      }


    return (
        <main>
            <Routes>
                <Route path='*' element={<LoginPage handleLogin={handleLogin} toggleError={toggleError} errorMessage={errorMessage} />}/>
            </Routes>
        </main>
    )
}

export default Login