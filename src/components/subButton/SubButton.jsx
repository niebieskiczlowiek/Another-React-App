import './SubButton.scss';
import { Link } from 'react-router-dom'

const SubButton = (props) => {
    const isAdmin = (props.title).toUpperCase() === "ADMIN";
    
    return (
        <div className="subB-container">
             <div className="container subB">
                {isAdmin 
                ? <Link className="button" to='/'>Home</Link> 
                : <Link className="button" to='/admin'>Admin Panel</Link>
                }
            </div>
        </div>
    )
}

export default SubButton;