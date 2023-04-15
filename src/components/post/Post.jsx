import React, { Component } from "react";

class Post extends Component{
    render(){
        return(
            <div className="post">
                <div className="postwrapper">
                    <div className="top">
                            <div className="topleft">
                                <img src="assets/person/1.jpeg" alt="" className="topimg" />
                                <span className="postname"></span>
                            </div>
                            <div className="topright">
                                <i className="topicon fas fa-ellipsis-h"></i>
                            </div>
                    </div>
                    <div className="center">

                    </div>
                    <div className="bottom">

                    </div>
                </div>
            </div>
        )
    }
}

export default Post;