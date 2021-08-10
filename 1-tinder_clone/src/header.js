import React from 'react';
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

let Header =  () => {
    return (
        <div class="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            
            <img className="tinder__logo" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/338_Tinder_logo-256.png" alt="tinder-logo"/>

            <IconButton>
                <ForumIcon fontSize="large" className="forum__icon"/>
            </IconButton>

        </div>
    );
}

export default Header;