import React from "react";
import { Route } from "react-router";
import ReactPlayer from "react-player";

function MusicPage() {
  return (
    <div className="Main wndw">
      <div className="player">
        <h4>(Previously recorded...) Live Shows</h4>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-sm-12 col-lg-4 ">
            <ReactPlayer
              className="react-player"
              height="100%"
              width="100%"
              url="https://www.facebook.com/sweetmelissaandtheramblinmen/videos/838611906847402/"
            ></ReactPlayer>
            <caption>
              In Memory of Elizabeth Reed, drum solo - The Green Room
            </caption>
          </div>
          <div className="col-sm-12 col-lg-4 ">
            <ReactPlayer
              className="react-player"
              height="100%"
              width="100%"
              url="https://www.youtube.com/watch?v=_c-lI_m3QGE"
            ></ReactPlayer>
          </div>
        </div>
      </div>
      <div className="music-div">
        <h5>Coming soon...</h5>
      </div>
    </div>
  );
}

let Music = () => (
  <div>
    <Route path="/music" component={MusicPage}></Route>
  </div>
);

export default Music;