import React from "react";
import { Route } from "react-router";
import ReactPlayer from "react-player";

function MusicPage() {
  return (
    <div className="Main container wndw">
      <div className="player">
        <h4>Live Shows</h4>
        <span id="span">(Previously recorded, obviously...)</span>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-sm-12 col-lg-4 ">
            <div /**react player div **/>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url="https://www.facebook.com/sweetmelissaandtheramblinmen/videos/838611906847402/"
              ></ReactPlayer>
              <p className="playerCap">
                (Drum solo) In Memory of Elizabeth Reed
                <br />
                The Green Room - Mableton, GA
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 ">
            <div /**react player div */>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url="https://www.facebook.com/sweetmelissaandtheramblinmen/videos/224564799578345/"
              ></ReactPlayer>
              <p className="playerCap">
                Atlanta Botanical Gardens - Sound Check
              </p>
            </div>
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
