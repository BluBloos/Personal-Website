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
