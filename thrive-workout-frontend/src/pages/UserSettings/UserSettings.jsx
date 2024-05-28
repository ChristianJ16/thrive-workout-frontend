import { useState } from "react"

import { useParams } from "react-router-dom"

import "./UserSettings.scss"

const UserSettings = (props) => {

    const params = useParams()

    const URL = `${process.env.REACT_APP_BACKEND_URL}/users/${params.id}`

    const user = props.users.find((u)=>{
       return u._id === params.id
    })
    
    const [editUser, setEditUser] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        height: user.height,
        weight: user.weight
    })

    const handleOnChange = (event) => {
        setEditUser(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
  
    const [ inEdit, setInEdit ] = useState( false )

     const handleEdit =  (event) => {
        event.preventDefault()
        props.updateUser(editUser, params.id)
        setInEdit(false)
     }

        return (
            <div className="tw-user-profile--container">
                <div className="tw-user-profile">
                    {
                        !inEdit ?
                            <div className="tw-user-profile--info">
                                <button type="button" onClick={ ()=>{ setInEdit( true ) } }>Edit</button>
                                <div className="tw-user-profile--info-inner">
                                    <h2 className="tw-user-profile--info-inner__name">{user.firstName} {user.lastName}</h2>
                                    <h3 className="tw-user-profile--info-inner__age"><span>Age:</span> {user.age}</h3>
                                    <h3 className="tw-user-profile--info-inner__height"><span>Height:</span> {user.height}</h3>
                                    <h3 className="tw-user-profile--info-inner__weight"><span>Weight:</span> {user.weight}</h3>
                                </div>
                            </div>
                        :
                            <div className="tw-user-profile--edit-form">
                                <form onSubmit={handleEdit}>
                                    <div className="tw-user-profile--name">
                                        <label>
                                            First Name:*
                                            <input 
                                                type="text"
                                                id="tw-user-profile--name__first-name"
                                                name="firstName"
                                                value = {editUser.firstName}
                                                onChange={handleOnChange}
                                                required  />
                                        </label>
                                        <label>
                                            Last Name:
                                            <input 
                                                type="text"
                                                id="tw-user-profile--name__last-name"
                                                name="lastName"
                                                value = {editUser.lastName}
                                                onChange={handleOnChange} />
                                        </label>
                                    </div>
                                    <label>
                                        Age:
                                        <input 
                                            type="text"
                                            id="tw-user-profile--age"
                                            name="age"
                                            value = {editUser.age}
                                            placeholder="enter age"
                                            onChange={handleOnChange} />
                                    </label>
                                    <label>
                                        Height: (inches)
                                        <input 
                                            type="number"
                                            id="tw-user-profile--height"
                                            name="height"
                                            value = {editUser.height}
                                            placeholder="enter height"
                                            onChange={handleOnChange} />
                                    </label>
                                    <label>
                                        Weight: (lbs)
                                        <input 
                                            type="number"
                                            id="tw-user-profile--weight"
                                            name="weight"
                                            value = {editUser.weight}
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

export default UserSettings