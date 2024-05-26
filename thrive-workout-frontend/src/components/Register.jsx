import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import SignUp from '../pages/LoginSignUp/SignUp'

const URL = `${process.env.REACT_APP_BACKEND_URL}/users/`

const Register = (props) => {
   const [toggleError, setToggleError] = useState(false)
   const [errorMessage, setErrorMessage] = useState('')
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
            console.log("error")

            const error = createdUser.errorResponse.code === 11000 ? "Email already in use" : "Something went wrong. Please try again later"

            setToggleError(true)
            setErrorMessage(error)
        }else{
            setToggleError(false)
            setErrorMessage('')
        }
        //redirect
    } 


    return (
        <main>
            <Routes>
                <Route path='/sign-up' element={<SignUp createUser={createUser} toggleError={toggleError} errorMessage={errorMessage} />}/>
            </Routes>
        </main>
    )
}

export default Register