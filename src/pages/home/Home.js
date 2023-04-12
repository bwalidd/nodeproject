import React from "react";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import "./home.css";

function Home() {
  return (
    <div>
     <Topbar />
      <div className="homecontainer">
            <Sidebar />
            <Feed />
            <Rightbar />
      </div>
    </div>
  );
}

export default Home;