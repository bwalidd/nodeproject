import  React, { Component } from 'react';
import './feed.css';
import Share from '../share/share';
class Feed extends Component {
    render() {
        return(
            <div className="feedcontainer">
                <div className="feedwrapper">
                    <Share />
                </div>
            </div>
        )
    }
}

export default Feed;