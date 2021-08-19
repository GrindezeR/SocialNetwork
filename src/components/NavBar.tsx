import React from "react";


function NavBar() {
    return(
        <div className={'sideBar'}>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </div>
    );
}

export default NavBar;