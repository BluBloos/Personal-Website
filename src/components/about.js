// so we can do these css modules, but also check out
// CSS-in-JS

import React from "react"
import { TEXT_COLOR_SECONDARY } from "../styles/colors.js"

import { isMobile } from  "react-device-detect";

export default function About(props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }}>

      <div>
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}>
          <img style={{
            padding: "2em"
          }} src="Headshot.PNG" />
        </div>
      </div>

      <div style={{
        color: TEXT_COLOR_SECONDARY,
        padding: "0px 2em 0px 2em",
        fontSize: "1.0em",
        width: "40em"
      }}>
        <p>
          I’m Noah, an engineer and software developer in my 2rd year of Engineering Physics @ &nbsp;
          <a target="_blank" href="https://www.queensu.ca/physics/undergrad-studies/engineering-physics">
            Queen's University
          </a>.
        </p>
        <p>
          Programming has been a large part of my life since early in high school. I stumbled into video game development,
          and I was hooked ever since. I've built up a sizable library of projects since then, most of which I've made available on this website.
        </p>
        <p>
          At school, I've found interest in <a href="https://qmind.ca/" target="_blank">QMIND </a>
           and <a href="qset.ca" target="_blank">Queen's Space Engineering Team</a> (QSET). With these teams I've had the
           opportunity to expand my portfolio of skills with technologies such as Tensorflow and ROS.
        </p>
        <p>
          Outside of school (and tech), I enjoy ⛰️ climbing, 🏃 running, and spending time with friends.
        </p>
        <p>
          If I were to characterize myself in one word, it would be "Ambitious"
        </p>
      </div>
    </div>
  )
}
