import React, { Component } from 'react';
import './sidebar.css';
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@mui/icons-material';
class Sidebar extends Component {
        render() {
            return(
                <div className="sidebarcontainer">
                    <div className="sidebarwrapper">
                        <ul className="sidebarlist">
                            <li className="sidebarListItem">
                                <RssFeed className="sidebarIcon" />
                                <span className="sidebarListItemText">Feed</span>
                            </li>
                            <li className="sidebarListItem">
                                <Chat className="sidebarIcon" />
                                <span className="sidebarListItemText">Chats</span>
                            </li>
                            <li className="sidebarListItem">
                                <PlayCircleFilledOutlined className="sidebarIcon" />
                                <span className="sidebarListItemText">Videos</span>
                            </li>
                            <li className="sidebarListItem">
                                <Group className="sidebarIcon" />
                                <span className="sidebarListItemText">Groups</span>
                            </li>
                            <li className="sidebarListItem">
                                <Bookmark className="sidebarIcon" />
                                <span className="sidebarListItemText">Bookmarks</span>
                            </li>
                            <li className="sidebarListItem">
                              <HelpOutline className="sidebarIcon" />
                              <span className="sidebarListItemText">Questions</span>
                            </li>
                            <li className="sidebarListItem">
                                <WorkOutline className="sidebarIcon" />
                                <span className="sidebarListItemText">Jobs</span>
                            </li>
                            <li className="sidebarListItem">
                                <Event className="sidebarIcon" />
                                <span className="sidebarListItemText">Events</span>
                            </li>
                            <li className="sidebarListItem">
                                <School className="sidebarIcon" />
                                <span className="sidebarListItemText">Courses</span>
                            </li>
                        </ul>
                        <button className="sidebarbutton">Show More</button>
                        <hr className="sidebarhr" />
                        <ul className="sidebarfriendlist">
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                            <li className="sidebarfriend">
                                <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                                <span className="sidebarfriendname">John Doe</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
}

export default Sidebar; 