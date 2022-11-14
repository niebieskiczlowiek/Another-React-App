import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Website from './views/website';
import Admin from './views/admin';
import './App.scss';
import Context from './context/App.context';


function App() {
  const { Provider } = Context;
  const [picContent, setPicContent] = useState('');
  const [twitterProfile, setTwitterProfile] = useState('xqc');
  const [twitterProfileState, setTwitterProfileState] = useState(true);
  const [colorTheme, setColorTheme] = useState('default');
  const [ profileBio, setProfileBio ] = useState('');
  const [ userName, setUserName ] = useState('User');
  const [ fullScreenState, setFullScreenState ] = useState(true);
  const [ layout, setLayout ] = useState('default');
  const [ banerState, setBanerState ] = useState(false);
  const [ banerContent, setBanerContent ] = useState('');


  return (
    <div className='App'>
      <Provider value={{ picContent,
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
                         setBanerContent}}>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Website />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;