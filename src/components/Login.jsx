import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import LoginPage from '../pages/LoginSignUp/Login'

const URL = `${process.env.REACT_APP_BACKEND_URL}/users/login`

const Login = (props) => {

    const [toggleError, setToggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = async (credentials) => {

        try{
            const response = await fetch(URL, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(credentials)
            })
            const loginResult = await response.json()
            console.log('Received login result:', loginResult)
            if (response.ok){
                localStorage.setItem("token", loginResult.token)
                props.onLoginSuccess(loginResult.user)
                console.log(loginResult.token)
                console.log('Received login result:', loginResult)
            } else {
                setToggleError(true)
                setErrorMessage(loginResult.msg || 'login failed. Please try again')
            }
        } catch(error){
            console.error('Login Error:', error)
            setToggleError(true)
            setErrorMessage('network error. Please try again')
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