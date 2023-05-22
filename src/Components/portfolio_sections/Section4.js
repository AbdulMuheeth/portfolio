import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particles-config";
import data from "../config/particle2.json";
import "./Section4.css";
import userData from "../../assets/data.json";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
// import {AiFillGithub} from '@react-icons/all-files/fc/AiFillGithub';

const Section4 = () => {

  return (
    <div className="all2 sec">
      <br/>
      <br/>
      <div className="contain "> 
      {/* mx-auto d-flex justify-content-center (above) */}
      <h1 className="projHeader">
        Projects
      </h1>
      <br/>
        <div className="row">
        {userData.projects.map((project, k) => {
          return (
            
            <div className="card col-md-4" key={k}>
              <div className="form">
                <div className="left-side">
                  {/* <span className="success">Success</span> */}
                  <div className="image">
                    <img src={project.image_url} />
                  </div>
                  <div className="debit-card">
                    <div className="card_name">
                      <span className="tech"
                        style={{ fontWeight: "bolder", fontSize: "1.5rem" }}
                      >
                        {project.name}
                      </span>
                      {/* <span className="user_name">John Doe</span> */}
                    </div>
                    <div className="card_number">
                      <div className="num_expiry">
                        {project.technologies.map((tech) => {
                          return <span className="tech">{tech}</span>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="mobile">
                    <h1 className="title"> {project.name}</h1>
                  </div>
                  <h3 className="projDesc">Description</h3>
                  
                  <div className="input-text desc">
                    <span className="description"> {project.description} </span>
                    {/* <span>Card number</span> */}
                  </div>
                  <div className="mobile">
                    {/* <div className="card_number"> */}
                      <div className="num_expiry projTechies" style={{color:'black'}}>
                        {project.technologies.map((tech) => {
                          return <span className="tech">{tech}</span>;
                        })}
                      </div>
                    {/* </div> */}
                  </div>
                  <div className="button">
                  {project.links.github ? (
                    <a
                    className="click-pay"
                      href={project.links.github}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <FaGithub />{" "}
                    </a>
                  ) : (
                    ""
                  )}
                  {project.links.website ? (
                    <a className="click-pay" href={project.links.website}>
                      <FaExternalLinkAlt />
                    </a>
                  ) : (
                    ""
                  )}
                    {/* <button className="click-pay">Pay $25.99</button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* <Particles id="tsparticles" url={data}  /> */}
      {/* <Particles /> */}
    </div>
  );
};

export default Section4;
