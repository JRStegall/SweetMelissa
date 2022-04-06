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
              Being a lfe long lover of music, Melissa began singing along with
              whatever she heard before she could even talk. &nbsp;Named after
              the song, Melissa grew up in a house filled with music, but The
              Allman Brothers holds a special place. &nbsp;As her dads favorite
              band, The Allman Brothers were on constant rotation on the record
              player. &nbsp;And when the Brothers came to town, the whole family
              frequently went together.
              <br></br>As her love of music grew, as did her influences: Janis
              Joplin, Aretha Franklin, Ani Defranco, and Susan Tedeschi are just
              some of the artists who make up the list. &nbsp;
            </p>
            <p>
              When in college, she began sitting in with friends bands on the
              weekends and at the occasional party, her love of performing
              began. &nbsp;Over the years, Melissa has been a part of, or
              performed with many Atlanta musicians, including: Broke on Monday,
              Tyler Neal, Pink Zeppelin, Babe Dylon, Bluphoria, Jane Brown and
              the HoTown Review, Chasing the Sun, and Magnolia Express.
              <br />
              In 2018, she began building Sweet Melissa and the Ramblin' Men.
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
            <p>
              Bassist and vocalist Johnny Barrett was born in Chicago, IL and
              raised in Atlanta, GA. &nbsp;His grandfather was an accomplished
              bandleader and his father exposed him to jazz from a young age,
              which led to his interest in jam- and improv-oriented rock music.
              &nbsp;Additional music theory training developed his appreciation
              for progressive rock.&nbsp; Initially content to focus on the bass
              guitar and write songs, he started taking singing seriously after
              appearing in a few musicals in high school and various bands
              throughout college. &nbsp;Johnny has been playing in the Georgia
              music scene for over 10 years, fronting his original band, Vincent
              the Dog, for 7 years and has continued writing original music for
              Snack Attack and for solo purposes. &nbsp;A multi-instrumentalist
              versatile with keyboards, percussion and most string instruments,
              Johnny primarily focuses on bass & vocals. &nbsp;Aside from Sweet
              Melissa & the Ramblin’ Men he currently plays in the Phish tribute
              band Skyballs, Pink Floyd/Led Zeppelin tribute band Pink Zeppelin,
              Led Zeppelin tribute band Led Zeppelified and jam band The Johnnys
              alongside guitarist John E. Jordan.
            </p>
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
            <p>
              Music has always been a place of great joy for Critter and his
              fluid and expressive playing style generously reflects that joy.
              &nbsp;Growing up, Steely Dan was a household staple, engraining
              jazz/rock inlfuence into his formidable years, which led to the
              discovery of Jazz greats like Miles Davis, Pat Matheney, Nat King
              Cole and Billie Holiday. &nbsp;But nothing changed his musical
              life quite like the influence of the funk-rock-alt-metal of
              Incubus and the prog-metal giants TOOL. &nbsp;From then on, there
              was no satiating his musical appetite, drawing heavy influence
              from the likes of: Dan Tohler, Bela Fleck, Tony Rice, Jerry
              Garcia, Duane Allman, Dickie Betts and Trey Anastasio. &nbsp;After
              studying at AIM, Critter went on to be a founding member of the
              Atlanta funk-jam-band Copious Jones. As well as having played with
              a varitable Who's Who of the Atlanta music scene, Critter is a
              recording engineer at Itchy Brain in Decatur, GA and Doghouse
              Studio in Tucker, GA.
            </p>
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
              &nbsp;Being exposed to classical music from birth, his early
              musical influence was driven by his classically trained parents
              who led and conducted choirs, orchestras and church services.
              &nbsp;Spending six years in the renowned Indianapolis Childrens
              Choir, he had the opportunity to perform in such prestigious
              places as Clowes Memorial Hall (Indianapolis, IN), the historic
              Circle Theatre (Indianapolis, IN), the Toronto Opera House
              (Toronto, Canada), the Sydney Opera House (Sydney, Australia) and
              Carnegie Hall (New York, NY).
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
            <div /**react player div */>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url="https://www.facebook.com/sweetmelissaandtheramblinmen/videos/749489613138635/"
              ></ReactPlayer>
              <p className="playerCap">
                Trouble No More - Napoleon's 3/12/2022
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 ">
            <div /**react player div */>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url="https://www.facebook.com/sweetmelissaandtheramblinmen/videos/681558439722473/"
              ></ReactPlayer>
              <p className="playerCap">
                Don't Keep Me Wondering - Napoleon's 3/12/2022
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 ">
            <div /**react player div */>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url="https://www.facebook.com/sweetmelissaandtheramblinmen/videos/509786347349034/"
              ></ReactPlayer>
              <p className="playerCap">One Way Out - Napoleon's 3/12/2022</p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 ">
            <div /**react player div */>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url="https://www.facebook.com/sweetmelissaandtheramblinmen/videos/1026177954962884/"
              ></ReactPlayer>
              <p className="playerCap">
                Don't Want You No More/Not My Cross To Bear - Napoleon's
                3/12/2022
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 ">
            <div /**react player div */>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url="https://www.facebook.com/sweetmelissaandtheramblinmen/videos/4608522752587206/"
              ></ReactPlayer>
              <p className="playerCap">Jessica - Napoleon's 3/12/2022</p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 ">
            <div /**react player div */>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url="https://www.facebook.com/sweetmelissaandtheramblinmen/videos/761548188084457/"
              ></ReactPlayer>
              <p className="playerCap">
                Black Hearted Woman - Napoleon's 3/12/2022
              </p>
            </div>
          </div>

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
