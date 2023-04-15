import React, { Component } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
class Post extends Component{
    render(){
        return(
            <div className="post">
                <div className="postwrapper">
                    <div className="posttop">
                            <div className="topleft">
                                <img className="postimg" src="assets/person/1.jpeg" alt="" />
                                <span className="postname">my name</span>
                                <span className="postdate">min ago</span>
                            </div>
                            <div className="topright">
                                <MoreVert />
                            </div>
                    </div>
                    <div className="center">
                        <span className="posttext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</span>
                        <img className="postedimg" src="assets/post/1.jpeg" alt="" />
                    </div>
                    <div className="bottom">
                        <div className="bottomleft">
                            <img className="likeicon" src="assets/like.png" alt="" />
                            <img className="likeicon" src="assets/heart.png" alt="" />
                            <span className="postlikecounter">32 people like it</span>
                        </div>
                        <div className="bottomright">
                            <span className="postcommenttext">9 comments</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;