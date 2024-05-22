import {useState} from 'react'
import {Link} from 'react-router-dom'

const SignUp = (props) => {

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
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
       
        <section className="sign-up">
            <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="sign-up--user-name">
                        <label htmlFor="sign-up--first-name">First Name*</label>
                        <input 
                            type='text'
                            id='sign-up--first-name'
                            name='firstName'
                            placeholder='input first name'
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="sign-up--last-name">Last Name</label>
                        <input 
                            type='text'
                            id='sign-up--last-name'
                            name='lastName'
                            placeholder='input last name'
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="sign-up--email">Email*</label>
                    <input 
                        type='email'
                        id="sign-up--email"
                        name='email'
                        placeholder='example: email@gmail.com'
                        onChange={handleChange}
                        autoComplete='true'
                        required
                        
                    />
                    <label htmlFor="sign-up--password">Password*</label>
                    <input 
                        type='password'
                        id="sign-up--password"
                        name='password'
                        placeholder='Enter at least 8+ characters'
                        onChange={handleChange}
                        required
                    /> 
                    <input type='Submit' value="Sign Up" readOnly />
                    {/* <Link to={`sign-in/`}>
                        signin
                    </Link> */}
                </form>
        </section>
    )
}
export default SignUp