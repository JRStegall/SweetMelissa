import React from "react";
import Moms from "../Images/moms1.jpeg";
import Moms3 from "../Images/moms3.jpeg";
import Moms5 from "../Images/moms5.jpeg";
import Moms6 from "../Images/moms6.jpeg";
import Band2 from "../Images/band2.jpeg";
import Band3 from "../Images/band3.jpeg";
import Band4 from "../Images/band4.jpeg";
import Band5 from "../Images/band5.jpeg";
import Band6 from "../Images/band6.jpeg";
import TGR from "../Images/tgr.jpeg";
import BRAG from "../Images/brag1.jpeg";
import Porch1 from '../Images/porchfest1.jpeg';
import Porch2 from '../Images/porchfest2.jpeg';
import F1 from "../Images/flyer1.jpeg";
import F2 from "../Images/flyer2.jpeg";
import F3 from "../Images/flyer3.jpeg";
import F4 from "../Images/flyer4.jpeg";
import F5 from "../Images/flyer5.jpeg";



function Shows(){
    return (
        <div className="Main">
        <h6>Some of our recent shows:</h6>
        <div className="container">
          <div className="row">
            <div  className="col this">
              <div className="row pics">
                <div className="col-4">
                  <figure className="figure">
                    <img src={Moms} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">Music on Main Street</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Moms3} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">Music on Main Street</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Moms6} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">Music on Main Street</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Band5} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">Music on Main Street</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Moms5} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">Music on Main Street</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={TGR} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">The Green Room</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Band6} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">The Green Room</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Band2} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">From The Earth Brewing</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Band3} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">Terminal West</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Band4} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">BRAG (Bicycle Ride Across Georgia)</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={BRAG} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">BRAG (Bicycle Ride Across Georgia)</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Porch2} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">Porchfest 2020</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={Porch1} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right">Porchfest 2020</figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={F5} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right"></figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={F4} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right"></figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={F3} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right"></figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={F2} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right"></figcaption>                          
                  </figure>
                </div>
                <div className="col-4">
                <figure className="figure">
                    <img src={F1} className="App-logo img-responsive" alt="logo" />
                      <figcaption class="figure-caption text-right"></figcaption>                          
                  </figure>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    )
};

export default Shows;