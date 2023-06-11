/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';

export default ( { black } ) => {
    return (
        <header className={ black ? 'black' : '' }>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar User" />
                </a>
            </div>
        </header>
    );
}