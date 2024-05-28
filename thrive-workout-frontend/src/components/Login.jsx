import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import LoginPage from '../pages/LoginSignUp/Login'

const URL = `${process.env.REACT_APP_BACKEND_URL}/users/login`

const Login = (props) => {

   const [toggleError, setToggleError] = useState(false)
   const [errorMessage, setErrorMessage] = useState('')
  
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
            setToggleError(false)
            props.onLoginSuccess(loginResult.user)
        }

      }
    
      


    return (
        <main>
            <Routes>
                <Route path='/login' element={<LoginPage handleLogin={handleLogin} toggleError={toggleError} errorMessage={errorMessage} />}/>
            </Routes>
        </main>
    )
}

export default Login