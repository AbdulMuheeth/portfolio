import React, { useEffect, useState } from "react";
import data from "../../assets/data.json";
import useWindowDimensions from "./useWindowDimensions";
import "./Skills.css";

// Importing TagCloud package
import {TagCloud} from "react-tagcloud";

const Skills = (props) => {
  // Animation settings for Text Cloud

  const calculateWidth = (wd) => {
    if (wd >= 1300) {
      return 330;
    } else if (wd >= 1170) {
      return 300;
    } else if (wd >= 1090) {
      return 280;
    } else if (wd >= 960) {
      return 250;
    } else if (wd >= 885) {
      return 230;
    } else if (wd >= 767) {
      return 250;
    } else if (wd >= 505) {
      return 250;
    } else if (wd >= 460) {
      return 230;
    } else if (wd >= 400) {
      return 200;
    } else if (wd >= 370) {
      return 180;
    } else if (wd >= 370) {
      return 160;
    } else {
      return 130;
    }
  };

  const { width } = useWindowDimensions(); // Custom hook to get window dimensions
  const [tags, setTags] = useState([]);

  useEffect(() => {
    console.log(data.skills);

    const texts = data.skills.map((skill) => ({
      value: skill,
      count: 1,
    }));

    setTags(texts);
  }, []);

  return (
    <div className="text-shpere">
      {/* span tag className must be "tagcloud"  */}
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={tags}
        style={{
          fontFamily: "sans-serif",
          fontSize: 30,
          fontWeight: "bold",
          color: "#000000",
          padding: 5,
        }}
      />
    </div>
  );
};

export default Skills;
