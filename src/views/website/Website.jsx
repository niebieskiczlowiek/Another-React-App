import Header from '../../components/header';
import Profile from '../../components/profile';
import Gallery from '../../components/gallery';
import Footer from '../../components/footer';
import Context from './../../context/App.context';
import SubButton from '../../components/subButton';
import { useContext} from 'react';
import '../../App.scss'

const Website = () => {
    const { colorTheme, layout } = useContext(Context);
    let themeClass;
    let divLayout;

    let themes = {
        default: 'default',
        red: 'red',
        blue: 'blue',
    }

    let layouts = {
        default: 'defaultLayout',
        short: 'shortLayout',
    }

    if (Object.keys(themes).includes(colorTheme)) {
        themeClass = themes[colorTheme];
    } else {
        themeClass = themes.default;
    }

    if (Object.keys(layouts).includes(layout)) {
        divLayout = layouts[layout];
    } else {
        divLayout = layouts.default;
    }

    return(
        <div className="App">
            <div className={themeClass}>
                <div className={divLayout}>
                    <Header title={'Website'} />
                    <SubButton title={'Website'}/>
                    <div className="main">
                        <Profile title={'Website'} />
                        <div className="lower">
                            <Gallery title={'Website'} />
                        </div>
                    </div>
                </div>
                <Footer title={'Website'} />
            </div>
        </div>
    )
}

export default Website;