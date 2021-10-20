import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Bandlogo from "../Images/flyer6.jpeg";
import Mel from "../Images/melissa.jpeg";
import CR from "../Images/critter.jpeg";
import AK from "../Images/aaron.jpeg";
import JS from "../Images/js.jpeg";
import JB from "../Images/johnny.jpeg";
import DR from "../Images/diane.jpeg";

function Main() {
  return (
    <div className="Main">
      <div className="App-header">
        <img src={Bandlogo} className="App-logo logo-responsive" alt="logo" />
      </div>

      <div class="para">
        <h5>
          We LOVE all things Allman! <br />
          More than that, we have a passion for playing music and helping to
          keep The Allman Brothers music alive!
        </h5>
      </div>
      <br />

      <div className="container band">
        <h5 id="lineuptag">Our current lineup:</h5>
        <div>
          <div className="container-fluid ">
            <Carousel fade interval={5000} keyBoard={false} pauseOnHover={true}>
              <Carousel.Item>
                <img
                  className="d-block w-100 mel"
                  src={Mel}
                  alt="Melissa"
                ></img>
                <Carousel.Caption className="capBkgrnd">
                  <h6>Melissa Goehner - Vocals</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 jb" src={JB} alt="Johnny"></img>
                <Carousel.Caption className="capBkgrnd">
                  <h6>Johnny Barrett - Bass/Vocals</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 aaron" src={AK} alt="Aaron"></img>
                <Carousel.Caption className="capBkgrnd">
                  <h6>Aaron Kaufman - Drums</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 diane" src={DR} alt="Diane"></img>
                <Carousel.Caption className="capBkgrnd">
                  <h6>Diane Rabson - Keys</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="crit">
                <img
                  className="crit d-block w-100 crit"
                  src={CR}
                  alt="Critter"
                ></img>
                <Carousel.Caption className="capBkgrnd">
                  <h6>Chris "Critter" Ricker - Guitar</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 js" src={JS} alt="Jeremy"></img>
                <Carousel.Caption className="capBkgrnd">
                  <h6>Jeremy Stegall - Guitar/Vocals</h6>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <h6 id="fbcap">
          Like us on Facebook, stay tuned for future events and SUPPORT LOCAL
          MUSIC!!
        </h6>
      </div>
    </div>
  );
}

export default Main;
