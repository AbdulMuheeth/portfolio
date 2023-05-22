import React,{useEffect} from "react";
import userData from "../../assets/data.json";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import "./Section3.css";

const Section3 = () => {


  const containerRef = React.useRef(); // <-- (1) create Ref
  const sliderTimerRef = React.useRef();


  useEffect(() => {
    return () => {
      // clear any running intervals on component unmount
      clearInterval(sliderTimerRef.current);
    };
  }, []);
  
  function slide(direction) {
    // clear any previously set intervals and reset scrollCompleted
    clearInterval(sliderTimerRef.current);
    let scrollCompleted = 0;
  
    sliderTimerRef.current = setInterval(function() {
      const container = containerRef.current; // <-- (3) access current ref value
  
      if (container && direction === 'left') {
        container.scrollLeft -= 10; // <-- (4)  Optional Chaining null check
      } else {
        container.scrollLeft += 10; // <-- (4)  Optional Chaining null check
      }
      scrollCompleted += 10;
      if (scrollCompleted >= 100) {
        clearInterval(sliderTimerRef.current);
      }
    }, 50);
  }


  return (
    <div>
      <br/>
      <br/>
      <div className="section3 sec">
        <h1 style={{ textTransform: "uppercase", color: "#fff" }}>
          Experience
        </h1>
        <br/>
        <div class="expContent">
          <div class="make-responsive">  {/*   removing flex here might help us to get reponsiveness along with that provide the row and maxcolumns to display..*/}
          
            <div      
              class="nav nav-pills me-3 pb-2"
              id="v-pills-tab"
              ref={containerRef}
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="slide"
                id="slide"
                onClick={()=>{slide('left')}}
              >
                <FaAngleLeft/>
              </button>
              {userData.experience.work.map((w, e) => {
                return (
                  <button
                    class={`nav-link ${e == 0 ? "active" : ""}`}
                    id={`v-pills-home-tab tabber-${e+1}`}
                    data-bs-toggle="pill"
                    data-bs-target={`#${w.id}`}
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    {/* <div class="circle-icon d-flex align-items-center justify-content-center me-3">
                  {" "}
                  <i class="fa fa-home"></i>{" "}
                </div> */}
                    {w.company}
                  </button>
                );
              })}
              <button
                className="slideLeft"
                id="slideLeft"
                onClick={()=>slide('right')}
              >
                <FaAngleRight/>
              </button>
            </div>
            
            <div class="tab-content" id="v-pills-tabContent">
              {userData.experience.work.map((w, e) => {
                return (
                  <div
                    class={`tab-pane ${
                      e == 0 ? "show active" : ""
                    } fade me-4`}
                    id={`${w.id}`}
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <h4 className="header">{w.role}</h4>
                    <span className="time">
                      {w.start} to {w.end}
                    </span>
                    <p className="description">{w.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
