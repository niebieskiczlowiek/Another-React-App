import './Header.scss'
import '../../App.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const isAdmin = (props.title).toUpperCase() === "ADMIN";

    return (
        <div className="header-container">
            <div className="container header">
                <h1>{props.title}</h1>
                {isAdmin 
                ? <Link className="button" to='/'>Home</Link> 
                : <Link className="button" to='/admin'>Admin Panel</Link>
                }
            </div>
        </div>
    )
}

export default Header;

// 3 komponenty dowolne