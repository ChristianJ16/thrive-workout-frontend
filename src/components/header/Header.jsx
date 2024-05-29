import {Link} from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


import "./Header.scss"

const Header = (props) => {

    // const location = useLocation();


    return (
        <header className="tw-main-header">
            
            <Link to={ props.currentUser ? "/" : "/login" }>
                <h1>{props.name}</h1>
            </Link>
           
            <div className="tw-main-header--content-right">
                {
                    props.currentUser ?
                    <>
                        <nav className="tw-main-nav">   
                        {                    
                            props.links.map( (link, i) => {  
                                return(
                                    <Link className="header_nav_item" key={i} to={link}>
                                        {link}
                                    </Link>
                                )
                            })
                        }    
                        </nav>

                        {/* <div className="tw-main-header--profile-image">
                            <FontAwesomeIcon icon={ faCircleUser } size="4x"  />
                        </div> */}

                        <Link to={ `/user/${props.currentUser.id}` }>
                            <FontAwesomeIcon icon={ faGear } size="xl"  />
                        </Link>                        

                        <button type="button" onClick={props.onLogout}>
                            Logout
                        </button>
                    </>
                    :
                    <nav className="tw-login-sign-up-nav">
                        <Link className="new"  to="/sign-up">
                            Sign Up
                        </Link>
                        |
                        <Link className="new"  to="/login">
                            Login
                        </Link>
                    </nav>
         
                }
            </div>
                  
        </header>
    )
}
export default Header