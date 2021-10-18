import React from "react";
import RJ from "../Images/richie.jpeg";
import BR from "../Images/barry.jpeg";
import TS from "../Images/trenton.jpeg";
import DK from "../Images/damian.jpeg";
import JE from "../Images/joel.jpeg";
import Jesse from "../Images/jesse.jpeg";
import TN from "../Images/tyler.jpeg";
import MP from "../Images/michael.jpeg";
import AA from "../Images/adrian.jpeg";
import Justin from "../Images/justin.jpeg";
import AS from "../Images/adam.jpeg";
import { Route } from "react-router";

function Xtras() {
  return (
    <div className="Main container band xtras">
      <h6>
        Since our beginning, we have been fortunate to play with some truly
        amazing musicians from the Atlanta music scene. <br /> We are greatful
        to each and everyone who has joined us on this venture!
      </h6>
      <br />
      <div className="row">
        <div className="col this">
          <div className="row pics">
            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img src={BR} className="App-logo img-responsive" alt="Barry" />
                <a
                  href="https://www.BarryRichman.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Barry Richman - guitar
                  </figcaption>
                </a>
              </figure>
            </div>

            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img src={JE} className="App-logo img-responsive" alt="Joel" />
                <a
                  href="https://www.facebook.com/JoelEdwardsATL"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Joel Edwards - keys
                  </figcaption>
                </a>
              </figure>
            </div>

            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img
                  src={RJ}
                  className="App-logo img-responsive"
                  alt="Richie"
                />
                <a
                  href="https://www.facebook.com/richiejonesdrummer"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Richie Jones - drums
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img
                  src={DK}
                  className="App-logo img-responsive"
                  alt="Damian"
                />
                <a
                  href="https://www.facebook.com/damian.kapcala"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Damian Kapcala - keys
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img
                  src={TS}
                  className="App-logo img-responsive"
                  alt="Trenton"
                />
                <a
                  href="https://www.facebook.com/trenton.sicola"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Trenton Scicola - drums
                  </figcaption>
                </a>
              </figure>
            </div>

            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img
                  src={Jesse}
                  className="App-logo img-responsive"
                  alt="Jessie"
                />
                <a
                  href="https://www.facebook.com/jessesunga"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Jesse Sunga - guitar
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img src={TN} className="App-logo img-responsive" alt="Tyler" />
                <a
                  href="https://www.tylernealband.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Tyler Neal - guitar
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img
                  src={MP}
                  className="App-logo img-responsive"
                  alt="Michael"
                />
                <a
                  href="https://www.facebook.com/michael.plunkett"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Michael Plunkett - guitar
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img
                  src={AA}
                  className="App-logo img-responsive"
                  alt="Adrian"
                />
                <a
                  href="https://www.facebook.com/badashallstarteam"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figcaption class="figure-caption text-right">
                    Adrian Ash - drums
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img
                  src={Justin}
                  className="App-logo img-responsive"
                  alt="Justin"
                />
                <a
                  href="https://www.facebook.com/justin.beals"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Justin Beals - guitar
                  </figcaption>
                </a>
              </figure>
            </div>
            <div className="col-sm-8 col-lg-6">
              <figure className="figure">
                <img src={AS} className="App-logo img-responsive" alt="Simon" />
                <a
                  href="https://www.facebook.com/adamcsimon"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <figcaption class="figure-caption text-right">
                    Adam Simon - keys
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let Extras = () => <Route path="/xtras" component={Xtras}></Route>;

export default Extras;
