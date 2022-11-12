import './Divider.scss'
import '../../App.scss'

const Divider = (props) => {
    return (
        <div className="divider-container">
            <div className="container divider">
                <div className="cell">
                    <div className="divider-line"></div>
                </div>
            </div>
        </div>
    )
}

export default Divider;