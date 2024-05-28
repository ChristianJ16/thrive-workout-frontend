import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import "./UserSettings.scss"

const UserSettings = (props) => {

    const { id } = useParams()

    const URL = `${process.env.REACT_APP_BACKEND_URL}/users/${id}`

    const [editUser, setEditUser] = useState({
        age: 0,
        height: 0,
        weight: 0
    })

    const handleOnChange = (event) => {
        setEditUser(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
  
    const [ userProfile, setUserProfile ] = useState( null )
    const [ inEdit, setInEdit ] = useState( false )

    const getUser = async (url) => {
        const response = await fetch(URL)
        const user =  await response.json()

        setUserProfile( user )
    }

    const handleEdit = async () => {
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(editUser)
        })
        const editedUser = await response.json()

        setUserProfile( editedUser )
        setInEdit(false)
    }

    useEffect(() => {
        getUser(URL)
    }, [])

    const Profile = () => {
        return (
            <div className="tw-user-profile--container">
                <div className="tw-user-profile">
                    {
                        !inEdit ?
                            <div className="tw-user-profile--info">
                                <button type="button" onClick={ ()=>{ setInEdit( true ) } }>Edit</button>
                                <div className="tw-user-profile--info-inner">
                                    <h2 className="tw-user-profile--info-inner__name">{userProfile.firstName} {userProfile.lastName}</h2>
                                    <h3 className="tw-user-profile--info-inner__age"><span>Age:</span> {userProfile.age}</h3>
                                    <h3 className="tw-user-profile--info-inner__height"><span>Height:</span> {userProfile.height}</h3>
                                    <h3 className="tw-user-profile--info-inner__weight"><span>Weight:</span> {userProfile.weight}</h3>
                                </div>
                            </div>
                        :
                            <div className="tw-user-profile--edit-form">
                                <form onSubmit={handleEdit}>
                                    <label>
                                        Age:
                                        <input 
                                            type="text"
                                            id="tw-user-profile--age"
                                            name="age"
                                            placeholder="enter age"
                                            onChange={handleOnChange} />
                                    </label>
                                    <label>
                                        Height: (inches)
                                        <input 
                                            type="number"
                                            id="tw-user-profile--height"
                                            name="height"
                                            placeholder="enter height"
                                            onChange={handleOnChange} />
                                    </label>
                                    <label>
                                        Weight: (lbs)
                                        <input 
                                            type="number"
                                            id="tw-user-profile--weight"
                                            name="weight"
                                            placeholder="enter weight"
                                            onChange={handleOnChange} />
                                    </label>
                                    <input type="Submit" value="Submit" readOnly />
                                </form>
                            </div>
                    }

                </div>
            </div>
        )
    }

    const Loading = () => <h1>loading...</h1>

    return userProfile ? <Profile /> : <Loading />
}

export default UserSettings