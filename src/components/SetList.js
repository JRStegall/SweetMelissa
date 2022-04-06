import React from "react";
import { Route } from "react-router";
// import SteadyHand from "../Images/steadyhand.jpeg";
//import NPLN from "../Images/nap1.jpeg";
//import TGR from "../Images/tgr1.jpeg";
import THH from "../Images/hunthouse.webp";
import MOMS from "../Images/moms1.jpeg";
import LOGO from "../Images/bandlogo.jpeg";
function Set() {
  return (
    <div className="Main band list">
      <div className="container">
        <div className="listRow row">
          <div className="col-12">
            <h4>Upcoming Events</h4>

            <ul>
              <li>
                <img src={MOMS} className="steady img-responsive" alt="logo" />
                <a
                  href="https://musiconmainstreetlilburn.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Music On Main Street (MOMS){" "}
                </a>{" "}
                - Saturday, April 23 @ 6pm &nbsp;
                <a
                  href="https://musiconmainstreetlilburn.com/concerts.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pre-Sale Tickets
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <img src={LOGO} className="steady img-responsive" alt="logo" />
                <a
                  href="https://www.napoleonsgrill.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Private Event{" "}
                </a>{" "}
                - Saturday, May 21
              </li>
            </ul>

            <ul>
              <li>
                <img src={THH} className="steady img-responsive" alt="logo" />
                <a
                  href="https://www.napoleonsgrill.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  The Hunt House{" "}
                </a>{" "}
                - Saturday, June 18 @ 8pm
              </li>
            </ul>

            <hr />
          </div>

          <div className="col-12">
            <h4>Songs You Might Hear...</h4>
          </div>

          <div className="col-lg-6 col-sm-12">
            <br />
            <ul>
              <li>Don't Want You No More</li>
              <li>It's Not My Cross To Bear</li>
              <li>Black Hearted Women</li>
              <li>Trouble No More</li>
              <li>Every Hungry Woman</li>
              <li>Dreams</li>
              <li>Whipping Post</li>
              <li>Revival</li>
              <li>Don't Keep Me Wonderin'</li>
              <li>Midnight Rider</li>
              <li>In Memory of Elizabeth Reed</li>
              <li>Statesboro Blues</li>
              <li>Done Somebody Wrong</li>
              <li>Stormy Monday</li>
              <li>One Way Out</li>
              <li>You Don't Love Me</li>
              <li>Midnight Rider</li>
              <li>Hot'Lanta</li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-12">
            <ul>
              <li>Mountain Jam</li>
              <li>Ain't Waistin' Time No More</li>
              <li>Les Brers In A Minor</li>
              <li>Stand Back</li>
              <li>Blue Sky</li>
              <li>Little Martha</li>
              <li>Ramblin' Man</li>
              <li>Southbound</li>
              <li>Jessica</li>
              <li>Back Where It All Begins</li>
              <li>Soulshine</li>
              <li>No One To Run With</li>
              <li>Mean Woman Blues</li>
              <li>Woman Across The River</li>
              <li>The High Cost of Low Living</li>
              <li>Instrumental Madness</li>
              <li>Midnight In Harlem</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

let Setlist = () => (
  <div>
    <Route path="/events" component={Set}></Route>
  </div>
);

export default Setlist;
