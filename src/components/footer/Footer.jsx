import './Footer.scss'
import '../../App.scss'
import Context from './../../context/App.context';
import { useContext } from 'react';

const Footer = (props) => {
    const context = useContext(Context);
    const {userName, fullScreenState} = context;
    return (
        
        <div className="footer-container">
            {fullScreenState && <div className="container footer">
                <div className="footer">
                    <p>© 2022 Copyright: {userName}'s official page</p>
                </div>
            </div> }
        </div>
    )
}

export default Footer;