import Header from '../../components/header';
import Panel from '../../components/panel';
import SubButton from '../../components/subButton';
import Context from './../../context/App.context';
import { useContext} from 'react';

const Admin = () => {
    const { colorTheme, fullScreenState } = useContext(Context);
    let themeClass;

    let themes = {
        default: 'default',
        red: 'red',
        blue: 'blue',
    }

    if (Object.keys(themes).includes(colorTheme)) {
        themeClass = themes[colorTheme];
    } else {
        themeClass = themes.default;
    }

    return (
        <div className='App'>
            <div className={themeClass}>
                { fullScreenState ? <Header title={'Admin'} /> : <SubButton title={'Admin'}/> }
                <Panel title={'Admin'} />
            </div>
        </div>
    )
}

export default Admin;