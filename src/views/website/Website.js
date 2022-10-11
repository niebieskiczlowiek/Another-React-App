import Header from '../../components/header';
import Profile from '../../components/profile';
import Gallery from '../../components/gallery'
import '../../App.scss'

const Website = () => {
    return(
        <div className="App">
            <Header title={'Website'} />
            <div className="main">
            <Profile title={'Website'} />  
                <div className="gallery">
                    <Gallery title={'Website'} /> 
                    <Gallery title={'Website'} /> 
                    <Gallery title={'Website'} /> 
                </div>
            </div>
        </div>
    )
}

export default Website;