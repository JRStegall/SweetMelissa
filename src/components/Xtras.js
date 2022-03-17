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
import AWG from "../Images/allen.jpeg";
import JF from "../Images/jerbo.jpeg";
import NL from "../Images/nico.jpeg";
import EP from "../Images/ethan.jpeg";
import { Route } from "react-router";

function Xtras() {
  return (
    <div className="Main band xtras">
      <div className="container">
        <h4>Featured Artists</h4>
        <hr />
        <h6 id="xtracap">
          Since our beginning, we have been fortunate to play with some truly
          amazing musicians from the Atlanta music scene. <br /> We are greatful
          to each and everyone who has joined us on this venture!
        </h6>
        <br />
        <div className="row">
          <div className="col this">
            <div className="row pics">
              {/* Ethan */}
              <div className="col-sm-8 col-lg-6">
                <figure className="figure">
                  <img
                    src={EP}
                    className="App-logo img-responsive"
                    alt="Ethan"
                  />
                  <a
                    href="https://www.facebook.com/jessesunga"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <figcaption class="figure-caption text-right">
                      Ethan Parks - Drums
                    </figcaption>
                  </a>
                  <p className="caption text-left">Khalico</p>
                  <hr />
                </figure>
              </div>

              {/* Damian */}
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
                  <p className="caption text-left">
                    Damian Kapcala &amp; Friends,
                    <a href="https://www.facebook.com/franklyscarletjams">
                      Frankly Scarlet
                    </a>
                    , The Incredible Sandwich, Lionz, The Last Jamurai, New
                    Nature, Another Fiasco, FieldTrip, Thelonious, Sonic Boom,
                    Nathan Shephard, Cardboard Willie, Chattahoochee Cannibals,
                    Bernie Worrell &amp; Friends, Ansley Stewart &amp; The
                    Replaceables, KASVOT Fox
                  </p>
                  <hr />
                </figure>
              </div>

              {/* Jesse */}
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
                  <p className="caption text-left"></p>
                  <hr />
                </figure>
              </div>

              {/* BARRY */}
              <div className="col-sm-8 col-lg-6">
                <figure className="figure">
                  <img
                    src={BR}
                    className="App-logo img-responsive"
                    alt="Barry"
                  />
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
                  <p className="caption text-left">
                    <a href="https://barryrichmanband.bandzoogle.com/press-kit-name-dropping">
                      {" "}
                      The Barry Richman Band, The Allman Brothers Band, Gov't
                      Mule, Derek Trucks, Eric Clapton, Bruce Hampton, Zack
                      Brown, Little Feat, John Lee Hooker, Mike Gordon &amp;
                      John Fishman (Phish), Buddy Miles (Band of Gypsies)
                    </a>
                  </p>
                  <hr />
                </figure>
              </div>

              {/* Joel */}
              <div className="col-sm-8 col-lg-6">
                <figure className="figure">
                  <img
                    src={JE}
                    className="App-logo img-responsive joel"
                    alt="Joel"
                  />
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
                  <p className="caption text-left">
                    The Barry Richman Band, Louise Mandrell, Chuck Berry
                    <br /> Mel Torme, Big &amp; Rich, Cheap Trick, Pop Tart
                    Monkeys
                  </p>
                  <hr />
                </figure>
              </div>

              {/* Richie */}
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
                  <p className="caption text-left">
                    Potch, Dot_Line Project, Spaceship Racecar, Donna Hopkins,
                    Ralph Rodenberry
                  </p>
                  <hr />
                </figure>
              </div>

              {/* Trenton */}
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
                  <hr />
                  <p className="caption text-left"></p>
                </figure>
              </div>

              {/* Jerbo  */}
              <div className="col-sm-8 col-lg-6">
                <figure className="figure ">
                  <img
                    src={JF}
                    className="App-logo img-responsive jerbo"
                    alt="Jerbo"
                  />
                  <a
                    href="https://www.facebook.com/profile.php?id=100006120766542"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <figcaption class="figure-caption text-right">
                      Jerbo Foti - bass
                    </figcaption>
                  </a>
                  <p className="caption text-left">
                    <a href="https://www.facebook.com/franklyscarletjams">
                      Frankly Scarlet
                    </a>
                    , Spaceship Racecar, Potch, Dot_Line Project
                  </p>
                  <hr />
                </figure>
              </div>

              {/* Nico */}
              <div className="col-sm-8 col-lg-6">
                <figure className="figure">
                  <img
                    src={NL}
                    className="App-logo img-responsive"
                    alt="Nico"
                  />
                  <a
                    href="https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.nicolembomusic.com%2F%3Ffbclid%3DIwAR0E7DXvYMKTCDnxzBdoorImKCZq1hWjO_xeg9ED_i-9hfs7xvQUqOTg5uk
                    &h=AT1m0rTVzCzwB3yH1WeyazJ3jbB7KiDIGEok_KkqAzl5cGzbYExV9mbxYpNA8dLMD_IPbzDR0Ag_AaTfuyqX19q_qnbPNw9oCyw2Hc0bKkDElUuY8wBC4SZ5oSeJTznBZbK3zEmhvlKO6ZkdjhvjjbdG"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <figcaption class="figure-caption text-right">
                      Nico Lembo - drums
                    </figcaption>
                  </a>
                  <p className="caption text-left">
                    Emerald Empire Band,{" "}
                    <a
                      href="https://l.facebook.com/l.php?u=https%3A%2F%2Fthedeemsters.com%2F%3Ffbclid%3DIwAR0vKUURQrzf9KFsCy7cVBbe8QFCPQibdi1MaS516dVMOi-142urdZlmn-4
                    &h=AT1m0rTVzCzwB3yH1WeyazJ3jbB7KiDIGEok_KkqAzl5cGzbYExV9mbxYpNA8dLMD_IPbzDR0Ag_AaTfuyqX19q_qnbPNw9oCyw2Hc0bKkDElUuY8wBC4SZ5oSeJTznBZbK3zEmhvlKO6ZkdjhvjjbdG"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deemsters
                    </a>
                    , Larkin Poe, The Whiskey Gentry
                  </p>
                  <hr />
                </figure>
              </div>

              {/* Allen */}
              <div className="col-sm-8 col-lg-6">
                <figure className="figure">
                  <img
                    src={AWG}
                    className="App-logo img-responsive"
                    alt="Allen"
                  />
                  <a
                    href="https://www.facebook.com/jessesunga"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <figcaption class="figure-caption text-right">
                      Allen Welty-Green - keys
                    </figcaption>
                  </a>
                  <p className="caption text-left"></p>
                  <hr />
                </figure>
              </div>

              {/* Tyler */}
              <div className="col-sm-8 col-lg-6">
                <figure className="figure">
                  <img
                    src={TN}
                    className="App-logo img-responsive"
                    alt="Tyler"
                  />
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
                  <p className="caption text-left">Tyler Neal Band</p>
                  <hr />
                </figure>
              </div>

              {/* Adrian */}
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
                  <p className="caption text-left">
                    <a href="facebook.com/AbsyntheMakesTheArtGarfunkel">
                      Absynthe Makes the Art Garfunkle
                    </a>
                    , <a href="facebook.com/theupbeatniks">The Upbeat Niks</a>,{" "}
                    <a href="facebook.com/TheNewVintageMusic">
                      The New Vintage Sound
                    </a>
                    , <a href="facebook.com/BlueTurtlesATL">Blue Turtles ATL</a>
                    , <a href="facebook.com/FunkedUpMuzak">Funked Up Muzak</a>,{" "}
                    <a href="facebook.com/PhysicalGraffitiATL">
                      Physical Graffiti ATL
                    </a>
                    ,&nbsp;
                    <a href="facebook.com/SkatingAVinceGuaraldiTribute">
                      Skating: A Vince Guaraldi Tribute
                    </a>
                    ,{" "}
                    <a href="facebook.com/FloydWhereProhibited">
                      Floyd Where Prohibited
                    </a>
                  </p>
                  <hr />
                </figure>
              </div>

              {/* Justin */}
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
                  <p className="caption text-left">
                    <a href="https://facebook.com/jackwagonrocks">Jackwagon</a>,{" "}
                    <a href="https://www.facebook.com/Lizzyinajar/">
                      Lizzy In A Jar: Thin Lizzy Tribute
                    </a>
                  </p>
                  <hr />
                </figure>
              </div>

              {/* Michael */}
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
                  <p className="caption text-left">
                    <a href="https://www.facebook.com/skyballsmusic">
                      {" "}
                      Skyballs: Atlanta's Phish Tribute Band
                    </a>
                  </p>
                  <hr />
                </figure>
              </div>

              {/* Adam */}
              <div className="col-sm-8 col-lg-6">
                <figure className="figure">
                  <img
                    src={AS}
                    className="App-logo img-responsive"
                    alt="Simon"
                  />
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
                  <p className="caption text-left">
                    <a href="https://www.facebook.com/skyballsmusic">
                      {" "}
                      Skyballs: Atlanta's Phish Tribute Band
                    </a>
                  </p>
                  <hr />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let Extras = () => <Route path="/friends" component={Xtras}></Route>;

export default Extras;
