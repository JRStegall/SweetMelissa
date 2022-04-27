import React from "react";
import { Route } from "react-router";
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
import Moms31 from "../Images/moms31.jpeg";
import Moms32 from "../Images/moms32.jpeg";
import Moms35 from "../Images/moms35.jpeg";
import Moms36 from "../Images/moms36.jpeg";
import Moms37 from "../Images/moms37.jpeg";
import Moms38 from "../Images/moms38.jpeg";
import Moms39 from "../Images/moms39.jpeg";
import Moms40 from "../Images/moms40.jpeg";
import Moms41 from "../Images/moms41.jpeg";
import Moms42 from "../Images/moms42.jpeg";
import Moms43 from "../Images/moms43.jpeg";
import Moms44 from "../Images/moms44.jpeg";
import Moms45 from "../Images/moms45.jpeg";
import Moms47 from "../Images/moms47.jpeg";
import Moms49 from "../Images/moms49.jpeg";
import Moms53 from "../Images/moms53.jpeg";
import Moms52 from "../Images/moms52.jpeg";
import Moms55 from "../Images/moms55.jpeg";
import Band2 from "../Images/band2.jpeg";
import Band3 from "../Images/band3.jpeg";
import Band4 from "../Images/band4.jpeg";
import Band6 from "../Images/band6.jpeg";
import MOMSF from "../Images/momsFlyer.jpeg";

import TGR from "../Images/tgr.jpeg";
import TGR1 from "../Images/tgr1.jpeg";

import NAP1 from "../Images/nap1.jpeg";
import NAP2 from "../Images/nap2.jpeg";
import NAP3 from "../Images/nap3.jpeg";
import NAP4 from "../Images/nap4.jpeg";
import NAP5 from "../Images/nap5.jpeg";
import NAP6 from "../Images/nap6.jpeg";
import NAP7 from "../Images/nap7.jpeg";
import NAP9 from "../Images/nap9.jpeg";
import NAP10 from "../Images/nap10.jpeg";
import NAP11 from "../Images/nap11.jpeg";
import NAP12 from "../Images/nap12.jpeg";
import NAP13 from "../Images/nap13.jpeg";
import NAP15 from "../Images/nap15.jpeg";
import NAP19 from "../Images/nap19.jpeg";
import NAP21 from "../Images/nap21.jpeg";
import NAP22 from "../Images/nap22.jpeg";
import NAP24 from "../Images/nap24.jpeg";
import NAP25 from "../Images/nap25.jpeg";
import NAP27 from "../Images/nap27.jpeg";
import NAP30 from "../Images/nap30.jpeg";

import BRAG from "../Images/brag1.jpeg";
import Porch1 from "../Images/porchfest1.jpeg";
import Porch2 from "../Images/porchfest2.jpeg";
import F1 from "../Images/flyer1.jpeg";
import F2 from "../Images/flyer2.jpeg";
import F3 from "../Images/flyer3.jpeg";
import F4 from "../Images/flyer4.jpeg";
import F5 from "../Images/flyer5.jpeg";

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
                {/* MOMS 4/23 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={MOMSF}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms40}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms35}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms41}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms31}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms32}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms52}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms45}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms42}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms38}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms49}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms53}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms43}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms44}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms47}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms37}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms36}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Moms39}
                    alt="MOMS, April"
                  ></img>
                  <Carousel.Caption>
                    <h5>Music On Main Street, 4/23/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* Napoleon's 3/12 */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP1}
                    alt="Napoleon's, March"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP10}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP11}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP12}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP13}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP15}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP19}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP21}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP22}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP24}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP25}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP27}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP30}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP3}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP4}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP5}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP6}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP7}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP9}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={NAP2}
                    alt="Napoleon's - 3/12/2022"
                  ></img>
                  <Carousel.Caption>
                    <h5>Napoleon's - 3/12/2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* The Green Room 2/12 */}
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

                {/* MOMS 10/02 */}
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
                    src={Moms55}
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

                {/* The Green Room 9/18 */}
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

                {/* ATL Botanical 7/30 */}
                <Carousel.Item>
                  <img className="d-block w-100" src={F5} alt="MOMS 10/2"></img>
                  <Carousel.Caption>
                    <h5>Atlanta Botanical Gardens - 7/30/2021</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                {/* From The Earth  */}
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
      <h5 id="shows">Recent Shows and Events</h5>
    </div>
  );
}

let Shows = () => (
  <div>
    <Route path="/gallery" component={ShowList} />
  </div>
);

export default Shows;
