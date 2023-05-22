import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import {useState, useEffect} from 'react';
import particlesConfig from "../config/particles-config";
import data from "../config/particle2.json";
import userData from "../../assets/data.json";
import "./Section2.css";

const Section2 = () => {

  const [offset, setOffset] = useState(0);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
  }, []);



  // const layer_1;

  // useEffect(() => {
  //   const onScroll = () => setOffset(window.pageYOffset);
  //   // clean up code
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // useEffect(() => {
  //   let layer_1 = document.querySelector(".header");
  //   let layer_2 = document.querySelector(".para");
  //   let layer_3 = document.querySelector(".image");

  //   // layer_1.style.transform = "translateX(" + window.pageYOffset / 2 + "px)";
  //   layer_2.style.transform = "translateX(" + window.pageYOffset / 2 + "px)";
  //   layer_3.style.transform = "translateX(" + -window.pageYOffset / 0.9 + "px)";
  //   // layer_4.style.transform = "translateY(" + window.pageYOffset / 2 + "px)";
  //   // layer_5.style.transform = "translateY(" + window.pageYOffset / 3 + "px)";
  //   console.log(layer_1);
  // }, [offset]);



  return (
    <div className="all sec">
      {/* init={particlesInit} loaded={particlesLoaded}  */}
      <Particles
        className="particleBG"
        init={particlesInit}
        loaded={particlesLoaded}
        params={data}
      />

      {/* <Particles id="tsparticles" url={data}  /> */}
      {/* <Particles /> */}
      <br/>
      <div className="content">
        <h1 className="header">About Me</h1>
        <div className="row">
          <div className="col-sm-12 para">
            <p>{userData.about_me}</p>
          </div>
          {/* <div className=" col-md-5 " >
            <span className="">
              <img
                className="image profileImg d-block img-thumbnail rounded mx-auto "
                src={userData.image_url}
                alt="profile picture"
                style={{height:"550px",width:"350px"}}
              />
            </span>
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default Section2;
