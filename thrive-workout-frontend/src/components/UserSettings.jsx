import {Routes, Route, useParams} from 'react-router-dom'

import { useEffect, useState } from "react"

import UserSettingsPage from '../pages/UserSettings/UserSettings'


const UserSettings = (props) => {

    const { userId } = useParams()

    const URL = `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`

    const [toggleError, setToggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [ currentUser, setCurrentUser ] = useState( null )

    const getUser = async (URL) => {

        const response = await fetch(URL)
        const user =  await response.json()
        console.log("user: ", user)

        setCurrentUser( user )
    }

    useEffect(() => {
        getUser()
    }, [])
  
    



    return (
        <main>
            <Routes>
                <Route path='/user/:userId' element={<UserSettingsPage toggleError={toggleError} errorMessage={errorMessage} />}/>
            </Routes>
        </main>
    )
}

export default UserSettings