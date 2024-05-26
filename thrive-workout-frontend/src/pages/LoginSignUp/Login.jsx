import {useState} from 'react'

import "./LoginSignUp.scss"

const Login = (props) => {

    const [user, setUser] = useState({
        email: '',
        password: '' 
    })

    const handleChange = (event) => {
        setUser(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleLogin(user)
    }


    return (
        <section className="tw-login--container">
        <div className="tw-login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input 
                        type="email"
                        id="tw-login--email"
                        name="email"
                        placeholder="enter email@gmail.com"
                        onChange={handleChange}
                        autoComplete="true"
                        required />
                </label>
                <label>
                    Password:
                    <input 
                        type="password"
                        id="tw-login--password"
                        name="password"
                        placeholder="enter password"
                        onChange={handleChange}
                        minLength="8"
                        autoComplete="current-password"
                        required
                    /> 
                </label>
                {props.toggleError ?
                    <h5 className='errorMsg'>{props.errorMessage}</h5>
                    :
                    null
                }
                <input type="Submit" value="Login" readOnly />
                {/* <Link to={`sign-in/`}>
                    signin
                </Link> */}
            </form>
        </div>
</section>
    )
}
export default Login