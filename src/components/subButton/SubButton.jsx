import '../header/Header.scss'
import { Link } from 'react-router-dom'
import Context from './../../context/App.context';
import { useContext } from 'react';

const SubButton = (props) => {
    const isAdmin = (props.title).toUpperCase() === "ADMIN";
    const context = useContext(Context);
    const {fullScreenState} = context;
    const buttonState = !fullScreenState;
    
    return (
        <div className="subB-container">
            {buttonState && <div className="container subB">
                {isAdmin 
                ? <Link className="button" to='/'>Home</Link> 
                : <Link className="button" to='/admin'>Admin Panel</Link>
                }
            </div>}
        </div>
    )
}

export default SubButton;