import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Melissa from "../Images/melissa2.jpeg";
import Johnny from "../Images/johnny.jpeg";
import Barry from "../Images/barry1.jpeg";
import MomSelfie from "../Images/momSelfie.jpeg";
import Moms from "../Images/moms1.jpeg";
import Moms3 from "../Images/moms3.jpeg";
import Moms4 from "../Images/moms4.jpeg";
import Moms7 from "../Images/moms7.jpeg";
import Moms8 from "../Images/moms8.jpeg";
import Moms9 from "../Images/moms9.jpeg";
import Moms12 from "../Images/moms12.jpeg";
import Moms15 from "../Images/moms15.jpeg";
import Moms17 from "../Images/moms17.jpeg";
import Moms18 from "../Images/moms18.jpeg";
import Moms20 from "../Images/moms20.jpeg";
import Moms22 from "../Images/moms22.jpeg";
import Moms23 from "../Images/moms23.jpeg";
import Moms25 from "../Images/moms25.jpeg";
import Moms28 from "../Images/moms28.jpeg";

import Moms30 from "../Images/moms30.jpeg";
import Band2 from "../Images/band2.jpeg";
import Band3 from "../Images/band3.jpeg";
import Band4 from "../Images/band4.jpeg";
import Band6 from "../Images/band6.jpeg";
import TGR from "../Images/tgr.jpeg";
import TGR1 from "../Images/tgr1.jpeg";
import NAP from "../Images/nap1.jpeg";
import BRAG from "../Images/brag1.jpeg";
import Porch1 from "../Images/porchfest1.jpeg";
import Porch2 from "../Images/porchfest2.jpeg";
import F1 from "../Images/flyer1.jpeg";
import F2 from "../Images/flyer2.jpeg";
import F3 from "../Images/flyer3.jpeg";
import F4 from "../Images/flyer4.jpeg";
import F5 from "../Images/flyer5.jpeg";
import { Route } from "react-router";

function ShowList() {
  return (
    <div className="Main container ">
      <div className="band gallery">
        <div className="container-fluid carousel ">
          <div className="row">
            <div className="col">
              <Carousel
                className="carousel"
                fade
                interval={5000}
                keyBoard={false}
                pauseOnHover={true}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={TGR1}
                    alt="The Green Room, Feb."
                  ></img>
                  <Carousel.Caption>
                    <h5>The Green Room - 2/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms7}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms3}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={MomSelfie}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms12}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms8}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms22}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Melissa}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms15}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms9}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms28}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms25}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Johnny}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms17}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Barry}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms23}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms30}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms18}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms20}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms4}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms12}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street - 10/02/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={TGR}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>The Green Room - 9/18/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Band6}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>The Green Room - 9/18/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={F5} alt="MOMS 10/2"></img>
                  <Carousel.Caption>
                    <h5>Atlanta Botanical Gardens - 7/30/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Band2}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>From The Earth Brewing</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Band3}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Terminal West</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Band4}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Bicycle Ride Across Georiga</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={BRAG}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Bicycle Ride Across Georiga - 2020</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Porch1}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Oakhurst Porchfest - 2020</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Porch2}
                    alt="MOMS 10/2"
                  ></img>
                  <Carousel.Caption>
                    <h5>Oakhurst Porchfest - 2020</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={F1} alt="MOMS 10/2"></img>
                  <Carousel.Caption>
                    <h5>Avondale Town Cinema - 9/13/2019</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={F2} alt="MOMS 10/2"></img>
                  <Carousel.Caption>
                    <h5>Avondale Town Cinema - 9/13/2019</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={F3} alt="MOMS 10/2"></img>
                  <Carousel.Caption>
                    <h5>Red Light Cafe - 1/11/2019</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={F4} alt="MOMS 10/2"></img>
                  <Carousel.Caption>
                    <h5>Oakhurst Porchfest - 2020</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div id="shows" className="para">
        <h5>Some of our recent shows and events...</h5>
      </div>
    </div>
  );
}

let Shows = () => (
  <div>
    <Route path="/gallery" component={ShowList} />
  </div>
);

export default Shows;
