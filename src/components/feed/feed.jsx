import  React, { Component } from 'react';
import './feed.css';
import Post from '../post/Post';
import Share from '../share/share';
class Feed extends Component {
    render() {
        return(
            <div className="feedcontainer">
                <div className="feedwrapper">
                    <Share />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        )
    }
}

export default Feed;