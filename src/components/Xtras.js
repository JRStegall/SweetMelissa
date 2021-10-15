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
            <div className="col-4">
              <figure className="figure">
                <img src={BR} className="App-logo img-responsive" alt="Barry" />
                <figcaption class="figure-caption text-right">
                  Barry Richman - guitar
                </figcaption>
              </figure>
            </div>

            <div className="col-4">
              <figure className="figure">
                <img src={JE} className="App-logo img-responsive" alt="Joel" />
                <figcaption class="figure-caption text-right">
                  Joel Edwards - keys
                </figcaption>
              </figure>
            </div>

            <div className="col-4">
              <figure className="figure">
                <img
                  src={RJ}
                  className="App-logo img-responsive"
                  alt="Richie"
                />
                <figcaption class="figure-caption text-right">
                  Richie Jones - drums
                </figcaption>
              </figure>
            </div>
            <div className="col-4">
              <figure className="figure">
                <img
                  src={DK}
                  className="App-logo img-responsive"
                  alt="Damian"
                />
                <figcaption class="figure-caption text-right">
                  Damian Kapcala - keys
                </figcaption>
              </figure>
            </div>
            <div className="col-4">
              <figure className="figure">
                <img
                  src={TS}
                  className="App-logo img-responsive"
                  alt="Trenton"
                />
                <figcaption class="figure-caption text-right">
                  Trenton Scicola - drums
                </figcaption>
              </figure>
            </div>

            <div className="col-4">
              <figure className="figure">
                <img
                  src={Jesse}
                  className="App-logo img-responsive"
                  alt="Jessie"
                />
                <figcaption class="figure-caption text-right">
                  Jesse Sunga - guitar
                </figcaption>
              </figure>
            </div>
            <div className="col-4">
              <figure className="figure">
                <img src={TN} className="App-logo img-responsive" alt="Tyler" />
                <figcaption class="figure-caption text-right">
                  Tyler Neal - guitar
                </figcaption>
              </figure>
            </div>
            <div className="col-4">
              <figure className="figure">
                <img
                  src={MP}
                  className="App-logo img-responsive"
                  alt="Michael"
                />
                <figcaption class="figure-caption text-right">
                  Michael Plunkett - guitar
                </figcaption>
              </figure>
            </div>
            <div className="col-4">
              <figure className="figure">
                <img
                  src={AA}
                  className="App-logo img-responsive"
                  alt="Adrian"
                />
                <figcaption class="figure-caption text-right">
                  Adrian Ash - drums
                </figcaption>
              </figure>
            </div>
            <div className="col-4">
              <figure className="figure">
                <img
                  src={Justin}
                  className="App-logo img-responsive"
                  alt="Justin"
                />
                <figcaption class="figure-caption text-right">
                  Justin Beals - guitar
                </figcaption>
              </figure>
            </div>
            <div className="col-4">
              <figure className="figure">
                <img src={AS} className="App-logo img-responsive" alt="Simon" />
                <figcaption class="figure-caption text-right">
                  Adam Simon - keys
                </figcaption>
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
