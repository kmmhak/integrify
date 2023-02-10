
import {Link} from 'react-router-dom'

function Button ({icon, url, onClick}) {

    if (url) {
        return(
            <Link to={url}>
            <button >{icon}</button>
            </Link>
        )
    } else {
        return (
            <button onClick={onClick}>{icon}</button>
        )
    }
    
}

export default Button;