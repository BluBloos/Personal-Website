import React from "react"

import Socials from "./socials.js"
import {ACCENT_COLOR} from "../styles/colors.js"

export default function PersonalProjectHeader(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div style={{
        margin: "0px 10px 10px 0px"
      }}>
        <svg height="2" width="200">
          <line x1="0" y1="0" x2="200" y2="0" style={{strokeWidth: 2, stroke: ACCENT_COLOR}} />
        </svg>
      </div>
      <Socials github={props.socials.github} />
    </div>
  )
}
