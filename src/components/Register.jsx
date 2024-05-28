import {Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

import SignUp from '../pages/LoginSignUp/SignUp'

const URL = `${process.env.REACT_APP_BACKEND_URL}/users/`

const Register = (props) => {
    const navigate = useNavigate()

    const [toggleError, setToggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [userCreated, setUserCreated] = useState(false)
    // // getPeople from our API 
    // const getUser = async () => {
    //     const response = await fetch(URL)
    //     const data = await response.json()
    //     // console.log(data)
    //     setUser(data)
    // }

    // // createUser
    const createUser = async (newUser) => {
        const response = await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newUser)
        })
        const createdUser = await response.json()
        if(createdUser.errorResponse){

            const error = createdUser.errorResponse.code === 11000 ? "Email already in use" : "Something went wrong. Please try again later"

            setToggleError(true)
            setErrorMessage(error)
            setUserCreated(false)
        }else{
            setToggleError(false)
            setErrorMessage('')
            setUserCreated(true)
            setTimeout(()=>{
                navigate('/login')
            }, 3000)
        }
    } 


    return (
            <Routes>
                <Route path='/sign-up' element={<SignUp createUser={createUser} userCreated={userCreated} toggleError={toggleError} errorMessage={errorMessage} />}/>
            </Routes>
    )
}

export default Register