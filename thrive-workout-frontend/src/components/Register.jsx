import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import SignUp from '../pages/SignUp'

const URL = `${process.env.REACT_APP_BACKEND_URL}/users/`

const Register = (props) => {
   const [users, setUsers] = useState(null)
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
        console.log(createdUser)
        setUsers(createdUser)
    } 


    return (
        <main>
            <Routes>
                <Route path='/sign-up' element={<SignUp createUser={createUser}/>}/>
            </Routes>
        </main>
    )
}

export default Register