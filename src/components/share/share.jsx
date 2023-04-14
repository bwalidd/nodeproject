import { Component } from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
class Share extends Component{
    render(){
        return(
            <div className="sharecontainer">
                <div className="sharewrapper">
                    <div className="sharetop">
                        <img src="/assets/person/1.jpeg" alt="" className="shareprofileimg" />
                        <input type="text" placeholder="What's in your mind?" className="shareinput" />
                    </div>
                    <hr className="sharehr" />
                    <div className="sharebottom">
                        <div className="shareoptions">
                            <div className="shareoption">
                                <PermMedia htmlColor= "tomato" className="shareicon" />
                                <span className="shareoption">Photo Or Video</span>
                            </div>
                            <div className="shareoption">
                                <Label htmlColor= "blue" className="shareicon" />
                                <span className="shareoption">Tag</span>
                            </div>
                            <div className="shareoption">
                                <Room htmlColor= "green" className="shareicon" />
                                <span className="shareoption">Location</span>
                            </div>
                            <div className="shareoption">
                                <EmojiEmotions htmlColor= "goldenrod" className="shareicon" />
                                <span className="shareoption">Feelings</span>
                            </div>
                            <button className="sharebutton">Share</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Share;