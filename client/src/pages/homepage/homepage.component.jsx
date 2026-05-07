import React from 'react';
import './homepage.css';
import Header from '../../components/header/header.component';
import github from '../../assets/github.jpg';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
const HomePage = () => (
    <div className='homes' >
        <Header />
        <div className='support'>
        <div className='edithome'>
        <p className='paragraph'>
                Hello there! I'm a Web Developer. 
                My name is Gabriel Natividad
                Browse my Website to get to know me personally and the services I offer.
        </p>
        </div>
        </div>
            <div className='ads'>
                <a className='adsitems' href ={"https://github.com/gabrielnatividaddev-coder"}>Github&nbsp;<img src={github} className='github'></img></a> 
                <a className='adsitems' href ={"https://www.facebook.com/profile.php?id=61587686044885"}>Facebook&nbsp;<img src={facebook} className='github'></img></a> 
                <a className='adsitems' href ={"https://x.com/DevNat88579"}>Twitter &nbsp;<img src={twitter} className='twitter'></img></a> 
            </div>
    </div>
);

export default HomePage;
