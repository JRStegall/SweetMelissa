import React from "react";
import { Route } from "react-router";
import ReactPlayer from "react-player";
import Mel from "../Images/melissa.jpeg";
import CR from "../Images/critter.jpeg";
import AK from "../Images/aaron.jpeg";
import JS from "../Images/js.jpeg";
import JB from "../Images/johnny.jpeg";
// import DR from "../Images/diane.jpeg";

function MusicPage() {
  return (
    <div className="Main container wndw">
      <div className="bio">
        {/* MELISSA */}
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <img className="d-block w-100 mel" src={Mel} alt="Melissa"></img>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h4>Melissa Goehner</h4>
            <p>
              Melissa has had a life long love of music and singing with her
              whole heart, which naturally led to singing with friends in
              various bands. &nbsp; Raised on a steady stream southern and
              classic rock, she draws her influences from Janis Joplin, Joan
              Jett, Anne Hart and Susan Tedeschi.
            </p>
          </div>
        </div>
        <hr />

        {/* JOHNNY */}
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <img className="d-block w-100 mel" src={JB} alt="Johnny"></img>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h4>Johnny Barrett</h4>
            <p>Johnny plays bass.</p>
          </div>
        </div>
        <hr />

        {/* AARON */}
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <img className="d-block w-100 aaron" src={AK} alt="Aaron"></img>
          </div>
          <div className="col-sm012 col-lg-7">
            <h4>Aaron W. Kaufman</h4>
            <p>
              Coming from a multigenerational musical family, Aaron was bitten
              by the bug at a very young age. Eager to consume all types of
              music, his early years were spent cutting teeth in jazz, funk, hip
              hop, rock, soul, jam, blues and experimental rock, concocting a
              hybrid style of his very own!{" "}
            </p>
            <p>
              On his main instrument the drums, Aaron has been featured on
              recordings by Dr. Doctor, Canvas Ruin, Heywire, The Aint Sisters,
              and more. He has performed with Soulhound, Atlanta Soul Power
              (James Brown tribute), Dot Line, Dr. Doctor, The Jess Goggans
              Band, The Shana Blake Band and Chelsea Shag, as well as founding
              the Atlanta based funk/hip hop band The Wax Throwbacks. Aaron has
              played on some big stages performing as a supporting artist for
              major acts, including Booker T. Jones, The Lowrider Band (formerly
              WAR), The Little River Band, Foghat, Blackberry Smoke, Grand Funk
              Railroad and many more.
            </p>
            <p>
              Aaron also records and produces music at his home studio,
              sharpening his skills in recording, mixing and audio production
              over years of experimentation.
            </p>
          </div>
        </div>
        <hr />

        {/* CRITTER */}
        <div className="row">
          <div className="col-12 col-lg-5">
            <img
              className="crit d-block w-100 crit"
              src={CR}
              alt="Critter"
            ></img>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h4>Chris "Critter" Ricker</h4>
            <p>Critter plays guitar.</p>
          </div>
        </div>
        <hr />

        {/* JEREMY */}
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <img className="d-block w-100 js" src={JS} alt="Jeremy"></img>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h4>Jeremy Stegall</h4>
            <p>
              Jeremy has been on stage since the age of 5 and spent the next 10
              years performing in plays, musicals, operas and choirs.
              &nbsp;Being exposed to classical music and composers from birth,
              his early musical influence was driven by his classically trained
              parents who led and conducted choirs, orchestras and church
              services. &nbsp;Spending six years in the renowned Indianapolis
              Childrens Choir, he had the opportunity to perform in such
              prestigious places as Clowes Memorial Hall (Indianapolis, IN), the
              historic Circle Theatre (Indianapolis, IN), the Toronto Opera
              House (Toronto, Canada), the Sydney Opera House (Sydney,
              Australia) and Carnegie Hall (New York, NY).
            </p>
            <p>
              After getting his first guitar at 13, there was no stopping his
              voracious consumption of all things rock. &nbsp;Heavy influences
              of Hendrix, SRV, The Allman Brothers, Pink Floyd and Gov't Mule
              can be heard in his approach while he is continually working on
              refining and defining his own sound.
            </p>
            <p>
              Moving from Indianapolis, IN in 2004 to attend AIM, he cofounded
              Operation Experimentation in Atlanta, GA (2006-2016).
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="player">
        <h4>Live Shows</h4>
        <span id="span">(Previously recorded, obviously...)</span>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-sm-12 col-lg-4 ">
            <div /**REACT PLAYER DIV **/>
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
