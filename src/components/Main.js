import React from "react";
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
        <h5>
       We LOVE all things Allman! <br/> 
       More than that, we have a passion for playing music and helping to keep The Allman Brothers music alive!
        </h5>
        <h6>Since our beginning, we have been fortunate to play with some truly amazing musicians from the Atlanta music scene.</h6>
        <h6>Like us on Facebook, stay tuned for future events and SUPPORT LOCAL MUSIC!!</h6>
        <br/>
        <br/>
        <h6>Here is our current lineup:</h6>
      <div className="container band">
        <div className="row">
          <div  className="col this">
            <div className="row pics">
              <div className="col-7 mx-auto">
                <figure className="figure">
                  <img src={Mel} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Melissa Goehner - vocals</figcaption>                          
                </figure>
              
              <figure className="figure">
                  <img src={JB} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Johnny Barret - bass/vocals</figcaption>                          
                </figure>
              
              <figure className="figure">
                  <img src={AK} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Aaron Kaufman - drums</figcaption>                          
                </figure>

                <figure className="figure">
                  <img src={DR} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Diane Rabson - keys</figcaption>                          
                </figure>
                
              <figure className="figure">
                  <img src={CR} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Chris "Critter" Ricker - guitar</figcaption>                          
                </figure>
              
              <figure className="figure">
                  <img src={JS} className="App-logo img-responsive" alt="logo" />
                    <figcaption class="figure-caption text-right">Jeremy Stegall - guitar/vocals</figcaption>                          
                </figure>
                
              </div>      
            </div>  
          </div>
        </div>
      </div>
<br/>
<br/>

      <h6>But you may have also seen us with these guys:</h6>
      <div className="container">
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
<br/>    
<br/>
<br/>
 
      </div>
    )
};

export default Main;