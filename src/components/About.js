import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>This is the section about me so I will tell you about myself...blah blah blah</p>
    <img src={ image } alt="I made this"></img>
  </div>;
}

export default About;
