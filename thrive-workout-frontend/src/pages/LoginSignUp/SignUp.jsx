import {useState} from 'react'
// import {Link} from 'react-router-dom'
import "./LoginSignUp.scss"

const SignUp = (props) => {

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        console.log("handleChange")
        setNewUser(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createUser(newUser)
    }
    
    return (
        <section className="tw-sign-up--container">
                {
                props.userCreated ? 
                    <h3 className="tw-sign-up-success">Thanks for signing up!<br/>You will now be redirecterd to the login page.</h3>
                    :
                    <div className="tw-sign-up">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="tw-sign-up--name">
                            <label>
                                First Name:*
                                <input 
                                    type="text"
                                    id="tw-sign-up--name__first-name"
                                    name="firstName"
                                    placeholder="input first name"
                                    onChange={handleChange}
                                    required  />
                            </label>
                            <label>
                                Last Name:
                                <input 
                                    type="text"
                                    id="tw-sign-up--name__last-name"
                                    name="lastName"
                                    placeholder="input last name"
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <label>
                            Email:*
                            {props.toggleError ?
                            <h5 className='errorMsg'>{props.errorMessage}</h5>
                                :
                                null
                            }
                            <input 
                                type="email"
                                id="tw-sign-up--email"
                                name="email"
                                placeholder="example: email@gmail.com"
                                onChange={handleChange}
                                autoComplete="true"
                                required />
                        </label>
                        <label>
                            Password:*
                            <input 
                                type="password"
                                id="tw-sign-up--password"
                                name="password"
                                placeholder="Enter at least 8+ characters"
                                onChange={handleChange}
                                minLength="8"
                                autoComplete="current-password"
                                required
                            /> 
                        </label>
                        <input type="Submit" value="Sign Up" readOnly />
                        {/* <Link to={`sign-in/`}>
                            signin
                        </Link> */}
                    </form>
                </div>
                }
        </section>
    )
}
export default SignUp