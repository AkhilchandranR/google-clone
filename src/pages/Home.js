import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerleft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home__headerright">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className="home__body">
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
                alt="google-logo"/>
                <div className="home__inputcontainer">
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home
