import React from 'react';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import ChatIcon from '@mui/icons-material/Chat';

function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarleft">
                <span className="logo">Facebook</span>
            </div>
            <div className="topbarcenter">
                <div className="searchbar">
                    <SearchIcon className="searchicon" />
                    <input placeholder='Search what you want' className="searchinput" />
                </div>
            </div>
            <div className="topbarright">
                <div className="topbarlinks">
                    <span className="topbarlink">Homepage</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbaricons">
                   <div className="topbariconitem">
                       <PersonIcon />
                        <span className="topbariconbadge">1</span>
                    </div> 
                   <div className="topbariconitem">
                          <PublicIcon />
                        <span className="topbariconbadge">3</span>
                    </div> 
                   <div className="topbariconitem">
                            <ChatIcon />
                        <span className="topbariconbadge">4</span>
                    </div> 
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarimg" />
            </div>
        </div>
    )
}

export default Topbar;