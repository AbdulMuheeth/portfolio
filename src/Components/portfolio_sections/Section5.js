import React, { useEffect,useState } from "react";
import data from "../../assets/data.json";
import Skills from "./Skills";
import useWindowDimensions from "./useWindowDimensions";
import './Section5.css';
import Sphere from "./Sphere";

const Section5 = () => {


  return (
    <div className="achContainer sec">
      <br/>
      <br/>
      <h1 className="d-inline achHeader">Achievements and Skills</h1>
      <br/>
      <div className="achievements">
        <div className="row">
          <div className="col-md-6">
            <ul class="list-group list-group achievList" >
              {data.Achievements.map((achievement) => {
                return (
                  <li class="list-group-item d-flex justify-content-between align-items-start achievListItem" style={{}}>
                    <div class="ms-2 me-auto desc">
                      <div class="fw-bold achiev-title">{achievement.title}</div>
                      <div class="desc2" style={{textIndent:'50px'}}>
                        {achievement.description}
                      </div>
                    </div>
                    {/* <span class="badge bg-primary rounded-pill">14</span> */}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6 right">
            {/* <Skills/> */}
            <Sphere/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
