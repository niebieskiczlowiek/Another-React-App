import './Header.scss'
import '../../App.scss'
import { Link } from 'react-router-dom'
import Context from './../../context/App.context';
import { useContext } from 'react';

const Header = (props) => {
    const isAdmin = (props.title).toUpperCase() === "ADMIN";
    const context = useContext(Context);
    const {userName, fullScreenState} = context;
    
    return (
        <div className="header-container">
            {fullScreenState && <div className="container header">
                <h1>{userName}'s {props.title}</h1>
                {isAdmin 
                ? <Link className="button" to='/'>Home</Link> 
                : <Link className="button" to='/admin'>Admin Panel</Link>
                }
            </div> }
        </div>
    )
}

export default Header;