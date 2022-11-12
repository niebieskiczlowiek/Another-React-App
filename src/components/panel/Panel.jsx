import './Panel.scss';
import Context from './../../context/App.context';
import { useContext } from 'react';
import {Switch, checked} from 'react-ios-switch';

const Panel = () => {
    const context = useContext(Context);
    const { picContent,
            setPicContent,
            twitterProfile,
            setTwitterProfile,
            twitterProfileState,
            setTwitterProfileState,
            colorTheme,
            setColorTheme,
            profileBio,
            setProfileBio,
            userName,
            setUserName,
            fullScreenState,
            setFullScreenState,
            layout,
            setLayout,
            banerState,
            setBanerState,
            banerContent,
            setBanerContent } = context; 

    const setPicContentHandler = (e) => {
        const content = e.target.value;
        if (content === 'none') {
            setPicContent('../../../public/blank.jpg');
        } else{ 
            console.log(content)
            setPicContent(content);
        }
    };
    
    const setTwitterProfileStateHandler = () => {
        setTwitterProfileState(!twitterProfileState);
    };

    const setTwitterProfileHandler = (e) => {
        const profile = e.target.value;

        setTwitterProfile(profile);
    };

    const setColorThemeHandler = (e) => {
        const theme = e.target.value;
        setColorTheme(theme);
    };

    const setProfileBioHandler = (e) => {
        const bio = e.target.value;
        setProfileBio(bio);
    };

    const setUserNameHandler = (e) => {
        const name = e.target.value;
        setUserName(name);
    };

    const setFullScreenStateHandler = () => {
        setFullScreenState(!fullScreenState);
    };

    const setLayoutHandler = (e) => {
        const layout = e.target.value;
        setLayout(layout);
    };

    const setBanerStateHandler = () => {
        setBanerState(!banerState);
    };

    const setBanerContentHandler = (e) => {
        const content = e.target.value;
        setBanerContent(content);
    };

    return (
        <div className='panel-container'>
            <h2>Control Panel</h2>
            <ul>
                <li>
                    <p>Profile picture URL</p>
                    <input type='text'
                        defaultValue = {picContent}
                        onChange={(e) => setPicContentHandler(e)}
                        placeholder='Set URL...' /> <span>(copy image link)</span>
                </li>
                <li>
                    <p>Twitter profile</p>
                    <input type='checkbox'
                        defaultChecked = {twitterProfileState}
                        onChange={setTwitterProfileStateHandler} />
                </li>
                <li>
                    <p>Twitter profile URL</p>
                    <input type='text'
                        defaultValue = {twitterProfile}
                        onChange={(e) => setTwitterProfileHandler(e)}
                        placeholder='Set username...' />
                </li>
                <li>
                    <p>Themes</p>
                    <input 
                        type="radio" 
                        name="theme" 
                        checked = { colorTheme === 'default' ? true : false }
                        value="default" 
                        onChange={(e) => setColorThemeHandler(e)} 
                    />
                    <label for="default">Default</label>

                    <input 
                        type="radio" 
                        name="theme" 
                        value="red" 
                        checked = { colorTheme === 'red' ? true : false }
                        onChange={(e) => setColorThemeHandler(e)} 
                    />
                    <label for="red">Red</label>

                    <input
                        type="radio"
                        name="theme"
                        value="blue"
                        checked = { colorTheme === 'blue' ? true : false }
                        onChange={(e) => setColorThemeHandler(e)}
                    />
                    <label for="blue">Blue</label>
                </li>
                <li>
                    <p>Username</p>
                    <input type='text'
                        defaultValue = {userName}
                        onChange={(e) => setUserNameHandler(e)}
                        placeholder='Set username...'
                        maxLength={24} />
                </li>
                <li>
                    <p> Bio </p>
                    <textarea 
                        defaultValue={profileBio} 
                        onChange={(e) => setProfileBioHandler(e)} 
                        placeholder='Set bio...' 
                        maxLength={150} />
                </li>
                <li>
                    <p> Full screen </p>
                    <input type='checkbox'
                        defaultChecked = {!fullScreenState}
                        onChange={setFullScreenStateHandler} />
                </li>
                <li>
                    <p> Layout </p>
                    <input 
                        type="radio" 
                        name="layout" 
                        value="default" 
                        checked = { layout === 'default' ? true : false }
                        onChange={(e) => setLayoutHandler(e)} 
                    />
                    <label for="default">default</label>

                    <input 
                        type="radio" 
                        name="layout" 
                        value="short" 
                        checked = { layout === 'short' ? true : false }
                        onChange={(e) => setLayoutHandler(e)} 
                    />
                    <label for="short">short</label>
                </li>
                <li>
                    <p> Baner </p>
                    <input type='checkbox'
                        defaultChecked = {banerState}
                        onChange={setBanerStateHandler} />
                </li>
                <li>
                    <p> Baner content </p>
                    <input type='text'
                        defaultValue = {banerContent}
                        onChange={(e) => setBanerContentHandler(e)}
                        placeholder='Set URL...' /> <span>(copy image link)</span>
                </li>
            </ul>
        </div>
    )
}

export default Panel;