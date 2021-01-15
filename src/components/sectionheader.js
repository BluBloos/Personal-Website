import React from "react"

import { ACCENT_COLOR } from "../styles/colors.js"

class SectionHeader extends React.Component {
  render() {
    //const {name, num} = this.props;
    return (
      <div>
        <div id={this.props.name} style={{
          height: 100
        }} />

        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          fontSize: "1.2em"
        }}>
          <h1>
            <span style={{color: ACCENT_COLOR}} class="CodeFont">{this.props.num}.</span>
            &nbsp;{this.props.name}
          </h1>
        </div>
      </div>
    )
  }
}

export default SectionHeader
