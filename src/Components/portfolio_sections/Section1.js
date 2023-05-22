import React from "react";
import {
  img4,
  img5,
  img6,
  cloud,
  background,
  meteor,
} from "../../assets/images/index.js";
import { useEffect, useState } from "react";

import "./Section1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from '../../assets/data.json'

const Section1 = () => {
  const [offset, setOffset] = useState(0);

  // const layer_1;

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let layer_1 = document.querySelector(".layer-1");
    // let layer_2 = document.querySelector(".layer-2");
    let layer_3 = document.querySelector(".layer-3");
    let layer_4 = document.querySelector(".layer-4");
    let layer_5 = document.querySelector(".layer-5");

    layer_1.style.transform = "translateY(" + window.pageYOffset / 3 + "px)";
    // layer_2.style.transform = "translateY(" + window.pageYOffset / 2 + "px)";
    layer_3.style.transform = "translateY(" + window.pageYOffset / 1.5 + "px)";
    layer_4.style.transform = "translateY(" + window.pageYOffset / 2 + "px)";
    layer_5.style.transform = "translateY(" + window.pageYOffset / 3 + "px)";
    // console.log(layer_1);
  }, [offset]);

  console.log(offset);

  return (
    <>
      <div className="banner">
        <img className="layer-1" src={cloud} />
        {/* <img className="layer-2" src={meteor} /> */}
        <div className="layer-3 Container">
          <div className="row">
            {/* <div className="m-2 col-sm-1"></div> */}
            <div className="m-2 col-sm-9 header">
              <h1>Hi,There</h1>
              <h2>I am {data.nick_name}</h2>
              <p>{data.tagline}</p>
              <a className="m-3" href={`mailto:${data.email}`}> Let's Connect </a>
            </div>
          </div>
        </div>
        <img className="layer-4" src={img4} />
        <img className="layer-5" src={img5} />
        <img src={img6} />
      </div>
      {/* <Section2/> */}
    </>
  );
};

export default Section1;
