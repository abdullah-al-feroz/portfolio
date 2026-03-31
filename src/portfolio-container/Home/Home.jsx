import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

function Home(props) {
    return (
        <div className="home-container" id={ props.id || ''}>
            <Header />
            <Profile />
            <Footer /> 
            <div className='icon'>
            <a href='https://www.linkedin.com/in/abdullah-al-firoz/' className='facebook'><i className='fa fa-linkedin'></i> LinkedIn </a>
            {/* <a href='https://x.com/Engineer_Feroz' className='twitter'> <i className='fa fa-twitter'></i> twitter </a> */}
            <a href='https://github.com/abdullah-al-feroz' className='youtube'> <i className='fa fa-github'></i>github</a>
            
          </div>
        </div>
    )
}

export default Home;
