import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png'/>
            </header>
            <nav className='nav'>
                <div>
                    <a href=''>Profile</a>
                </div>
                <div>
                    <a href=''>Messages</a>
                </div>
                <div>
                    <a href=''>News</a>
                </div>
                <div>
                    <a href=''>Music</a>
                </div>
                <div>
                    <a href=''>Settings</a>
                </div>


            </nav>
            <div className='content'>
                maim content
            </div>
        </div>
    );
}

export default App;
