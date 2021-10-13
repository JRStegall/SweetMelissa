import React from "react";
import Carousel  from "react-bootstrap/Carousel";
import Mel from "../Images/melissa.jpeg";
import CR from "../Images/critter.jpeg";
import AK from "../Images/aaron.jpeg";
import JS from "../Images/js.jpeg";
import JB from "../Images/johnny.jpeg";
import RJ from "../Images/richie.jpeg";
import BR from "../Images/barry.jpeg";
import TS from "../Images/trenton.jpeg";
import DK from "../Images/damian.jpeg";
import JE from "../Images/joel.jpeg";
import Jesse from "../Images/jesse.jpeg";
import DR from "../Images/diane.jpeg";
import TN from "../Images/tyler.jpeg";
import MP from "../Images/michael.jpeg";
import AA from "../Images/adrian.jpeg";
import Justin from "../Images/justin.jpeg";
import AS from "../Images/adam.jpeg";







function Main(){
    return(
      <div className="Main">
        <div class="para">
        <h5>
       We LOVE all things Allman! <br/> 
       More than that, we have a passion for playing music and helping to keep The Allman Brothers music alive!
        </h5>
        <h6>Like us on Facebook, stay tuned for future events and SUPPORT LOCAL MUSIC!!</h6>
        <h6>Since our beginning, we have been fortunate to play with some truly amazing musicians from the Atlanta music scene. <br/>. We are greatful to each and everyone who has joined us on this venture!</h6>
        </div>
        <br/>
        <br/>
        
      <div className="container band">
      <h5>Our current lineup:</h5>
      <div>
            
            <div className="container-fluid ">
            <Carousel  interval={5000} keyBoard={false} pauseOnHover={true} >
                    <Carousel.Item >
                        <img  className="d-block w-100"  src={Mel} alt="MOMS 10/2"></img>
                    <Carousel.Caption>
                        <h5>Melissa Goehner - Vocals</h5>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img  className="d-block w-100" src={JB} alt="MOMS 10/2"></img>
                        <Carousel.Caption>
                            <h5>Johnny Barret - Bass/Vocals</h5>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img  className="d-block w-100" src={AK} alt="MOMS 10/2"></img>
                        <Carousel.Caption>
                            <h5>Aaron Kaufman - Drums</h5>
                    </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                        <img  className="d-block w-100" src={DR} alt="MOMS 10/2"></img>
                        <Carousel.Caption>
                            <h5>Diane Rabson - Keys</h5>
                    </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                        <img  className="d-block w-100" src={CR} alt="MOMS 10/2"></img>
                        <Carousel.Caption>
                            <h5>Chris "Critter" Ricker - Guitar</h5>
                    </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                        <img  className="d-block w-100" src={JS} alt="MOMS 10/2"></img>
                        <Carousel.Caption>
                            <h5>Jeremy Stegall - Guitar/Vocals</h5>
                    </Carousel.Caption>
              </Carousel.Item>
              
                </Carousel>
            </div>
          </div>
        </div>
        
        


      
      <div className="container band">
      <h5>But you may have also seen us with these guys:</h5>
        <div className="row">
          <div  className="col this">
            <div className="row pics">
              <div className="col-4">
                <figure className="figure">
                  <img src={RJ} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Richie Jones - drums</figcaption>                          
                </figure>
              </div>
              <div className="col-4">
              <figure className="figure">
                  <img src={DK} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Damian Kapcala - keys</figcaption>                          
                </figure>
              </div>  
              <div className="col-4">
              <figure className="figure">
                  <img src={TS} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Trenton Scicola - drums</figcaption>                          
                </figure>
              </div>
              <div className="col-4">
              <figure className="figure">
                  <img src={BR} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Barry Richman - guitar</figcaption>                          
                </figure>
              </div>
              <div className="col-4">
              <figure className="figure">
                  <img src={JE} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Joel Edwards - keys</figcaption>                          
                </figure>
              </div>  
              <div className="col-4">
              <figure className="figure">
                  <img src={Jesse} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Jesse Sunga - guitar</figcaption>                          
                </figure>
              </div>
              <div className="col-4">
              <figure className="figure">
                  <img src={TN} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Tyler Neal - guitar</figcaption>                          
                </figure>
              </div>    
              <div className="col-4">
              <figure className="figure">
                  <img src={MP} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Michael Plunkett - guitar</figcaption>                          
                </figure>
              </div>    
              <div className="col-4">
              <figure className="figure">
                  <img src={AA} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Adrian Ash - drums</figcaption>                          
                </figure>
              </div>    
              <div className="col-4">
              <figure className="figure">
                  <img src={Justin} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Justin Beals  - guitar</figcaption>                          
                </figure>
              </div>    
              <div className="col-4">
              <figure className="figure">
                  <img src={AS} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Adam Simon - keys</figcaption>                          
                </figure>
              </div>    
            </div>  
          </div>
        </div>
      </div>

 
      </div>
    )
};

export default Main;