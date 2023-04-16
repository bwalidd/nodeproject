import React, { Component } from 'react';
import './rightbar.css';

class Rightbar extends Component {
    render() {
        return(
            <div className="rightbarcontainer">
                <div className="wrapper">
                     <div className="birthdaycontainer">
                        <img className="birthdayimg" src="/assets/gift.png" alt="" />
                        <span className="birthdaytext">
                            <b>Paulo Henrique</b> and <b>3 other person</b> have a birthday today.
                        </span>
                     </div>
                        <img className="rightbarad" src="/assets/ad.png" alt="" />
                        <h4 className="rightbarTitle">Online Friends</h4>
                        <ul className="rightbarFriendList">
                            <li className="rightbarFriend">
                                <div className="rightbarProfileImgContainer">
                                    <img className="rightbarProfileImg" src="/assets/person/3.jpeg" alt="" />
                                    <span className="rightbarOnline"></span>
                                </div>
                                <span className="profilename"> Anna lora</span>
                            </li>
                            <li className="rightbarFriend">
                                <div className="rightbarProfileImgContainer">
                                    <img className="rightbarProfileImg" src="/assets/person/3.jpeg" alt="" />
                                    <span className="rightbarOnline"></span>
                                </div>
                                <span className="profilename"> Anna lora</span>
                            </li>
                            <li className="rightbarFriend">
                                <div className="rightbarProfileImgContainer">
                                    <img className="rightbarProfileImg" src="/assets/person/3.jpeg" alt="" />
                                    <span className="rightbarOnline"></span>
                                </div>
                                <span className="profilename"> Anna lora</span>
                            </li>
                            <li className="rightbarFriend">
                                <div className="rightbarProfileImgContainer">
                                    <img className="rightbarProfileImg" src="/assets/person/3.jpeg" alt="" />
                                    <span className="rightbarOnline"></span>
                                </div>
                                <span className="profilename"> Anna lora</span>
                            </li>
                            <li className="rightbarFriend">
                                <div className="rightbarProfileImgContainer">
                                    <img className="rightbarProfileImg" src="/assets/person/3.jpeg" alt="" />
                                    <span className="rightbarOnline"></span>
                                </div>
                                <span className="profilename"> Anna lora</span>
                            </li>
                        </ul>
                </div>
            </div>
        )
    }
}

export default Rightbar;