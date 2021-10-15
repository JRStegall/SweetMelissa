import React from "react";
import { Route } from "react-router";

function Set() {
  return (
    <div className="Main band container">
      <div className="list row">
        <div className="col-lg-6 col-sm-12">
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
          </ul>
        </div>
        <div className="col-lg-6 col-sm-12">
          <ul>
            <li>Hot'Lanta</li>
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
            <li>The High Cost of Low Living</li>
            <li>Instrumental Madness</li>
            <li>Midnight In Harlem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

let Setlist = () => (
  <div>
    <Route path="/setlist" component={Set}></Route>
  </div>
);

export default Setlist;
