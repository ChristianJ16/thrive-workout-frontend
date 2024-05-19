import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons'


import "./Header.scss"

const Header = (props) => {
    const location = useLocation();
    return (
        <header className="tw-main-header">
            <a href="/"><h1>{props.name}</h1></a>
        
            <div className="tw-main-header--content-right">
                <nav>
                {props.links.map( (link, i) => {
                    
                    if(location.pathname !== "/"+link){
                        return(
                            <Link className="header_nav_item" key={i} to={link}>
                                {link}
                            </Link>
                        )
                    }

                })}
                </nav>

                
                <button type='button'>
                    <FontAwesomeIcon icon={ faMagnifyingGlass } size="2x"  /> 
                </button>

                <div className="tw-main-header--profile-image">
                <FontAwesomeIcon icon={ faCircleUser } size="4x"  />
                </div>

                {/* wrap in link to UserSettings */}
                <FontAwesomeIcon icon={ faGear } size="xl"  />

            </div>
                  
        </header>
    )
}
export default Header