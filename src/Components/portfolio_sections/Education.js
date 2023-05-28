import React, { useEffect } from "react";
import userData from "../../assets/data.json";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Section3.css";

const Education = () => {
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

    sliderTimerRef.current = setInterval(function () {
      const container = containerRef.current; // <-- (3) access current ref value

      if (container && direction === "left") {
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
      <br />
      <br />
      <div className="section3 sec">
        <h1 style={{ textTransform: "uppercase", color: "#fff" }}>Education</h1>
        <br />
        <div class="expContent">
          <div class="make-responsive">
            {" "}
            {/*   removing flex here might help us to get reponsiveness along with that provide the row and maxcolumns to display..*/}
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
                onClick={() => {
                  slide("left");
                }}
              >
                <FaAngleLeft />
              </button>
              {userData.education.map((edu, e) => {
                return (
                  <button
                    class={`nav-link ${e == 0 ? "active" : ""}`}
                    id={`v-pills-home-tab tabber-${e + 1}`}
                    data-bs-toggle="pill"
                    data-bs-target={`#${edu.id}`}
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    {/* <div class="circle-icon d-flex align-items-center justify-content-center me-3">
                  {" "}
                  <i class="fa fa-home"></i>{" "}
                </div> */}
                    {edu.core}
                  </button>
                );
              })}
              <button
                className="slideLeft"
                id="slideLeft"
                onClick={() => slide("right")}
              >
                <FaAngleRight />
              </button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
              {userData.education.map((edu, e) => {
                return (
                  <div
                    class={`tab-pane ${e == 0 ? "show active" : ""} fade me-4`}
                    id={`${edu.id}`}
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <h4 className="header">{edu.institute}</h4><br/>
                    <div style={{ display: "flex", justifyContent:"space-between",fontSize: "1rem" }}>
                      <div>
                        <h3 className>{edu.core}</h3>
                      </div>
                      <div>
                        <p style={{fontSize:'1.3rem'}}> | CGPA: {edu.gpa} </p>
                      </div>
                    </div>

                    {/* <p className="description">{w.description}</p> */}
                    <span className="time" style={{ opacity: 0.7 }}>
                      From {edu.start} to {edu.end}
                    </span>
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

export default Education;
