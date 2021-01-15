// so we can do these css modules, but also check out
// CSS-in-JS

import React from "react"
import { TEXT_COLOR_SECONDARY } from "../styles/colors.js"

export default function About(props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      flex: 0,
      padding: "40px 40px 0px 40px"
    }}>

      <div style={{
        position: "relative"
      }}>
        <svg style={{
          height: "20rem",
        }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8A3FFC" d="M44,-48.4C60.2,-38.9,78.6,-28,81.2,-14.1C83.9,-0.3,70.8,16.5,59.4,32.5C48.1,48.6,38.4,63.8,23.5,72.9C8.6,81.9,-11.7,84.7,-29.6,79.1C-47.5,73.5,-63,59.4,-68.1,43C-73.1,26.6,-67.6,7.8,-61.3,-7.9C-55.1,-23.6,-48.1,-36.3,-37.8,-46.9C-27.4,-57.5,-13.7,-66,0.1,-66.1C13.9,-66.2,27.8,-58,44,-48.4Z" transform="translate(100 100)" />
        </svg>
        <div style={{
          display: "block",
          width: 200,
          height: 200,
          backgroundImage: "url(Headshot.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          borderRadius: "50%",
          position: "absolute",
          top: 30,
          left: 30
        }}  />
      </div>

      <div style={{
        color: TEXT_COLOR_SECONDARY,
        padding: "40px 40px 0px 40px",
        fontSize: "1.2em"
      }}>
        <p>
          I’m Noah, an engineer and software developer in my 2rd year of Engineering Physics @ &nbsp;
          <a href="https://www.queensu.ca/physics/undergrad-studies/engineering-physics">
            Queen's University
          </a>.
        </p>
        <p>
          Programming has been a large part of my life since early in high school. I wanted to play a video game,
          but my parents would have it that it was too innapropriate to play. So I set out to program the game myself.
          Long story short, my version of the game never saw the light of day, but I was hooked on programming ever since.
          I've built up a sizable library of projects since then, most of which I've made available on this website.
        </p>
        <p>
          At school, I've found interest in multiple design teams, most notably QMIND and Queen's Space Engineering Team.
          These teams have been incredible, and I'm learning things at a rapid rate. I'm overwhemlingy excited to see where
          they take me.
        </p>
        <p>
          Outside of school (and tech), I enjoy ⛰️ climbing, 🏃 running, and spending time with friends.
        </p>
        <p>
          If I were to summarize myself in one word, it would be "Hungry for the good life"
        </p>
        <p>
          Whoops...a little more than one word there!
        </p>
      </div>
    </div>
  )
}
