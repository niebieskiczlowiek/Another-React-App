import './Panel.scss'
import '../../App.scss'

const Panel = () => {
    return (
        <div className="panel-container">
            <h2> Control Panel </h2>
            <ul>
                <li>
                    <p>Slider</p>
                    <input type='checkbox'  />
                </li>
                <li>
                    <p> Slides count </p>
                    <input type='text' />
                </li>
            </ul>
        </div>
    )
}

export default Panel;