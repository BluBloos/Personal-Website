import React from "react"

import { TEXT_COLOR_SECONDARY } from "../styles/colors.js"

export default function Contact(props)
{
  return (
    <div style={{
      textAlign: "center",
      color: TEXT_COLOR_SECONDARY,
      margin: "3em"
    }}>
      <p>
        Please don't hesitate to contact me by e-mail, phone or social media.
      </p>
      <p>
        I would love to chat with you ☕
      </p>
      <div style={{
        margin: 40
      }}>
      <a href="mailto:noah.cabral@queensu.ca">
        <button>
          Contact
        </button>
      </a>
      </div>
    </div>
  )
}
