import React from "react"

import { TEXT_COLOR_SECONDARY } from "../styles/colors.js"

export default function Contact(props)
{
  return (
    <div style={{
      textAlign: "center",
      color: TEXT_COLOR_SECONDARY
    }}>
      <p style={{
        margin: "3em"
      }}>
        Please don't hesitate to contact me by phone, e-mail or social media. ☕ <br />
        Looking forward to hearing from you!
      </p>
      <a href="mailto:noah.cabral@queensu.ca">
        <button>
          Contact
        </button>
      </a>
    </div>
  )
}
