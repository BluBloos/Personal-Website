import React from "react"

import { ACCENT_COLOR } from "../styles/colors.js"

import {
  isMobile
} from "react-device-detect";

class SectionHeader extends React.Component {

  render() {

    var _style = {}

    if (this.props.center) {
      _style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }
    }

    //const {name, num} = this.props;
    return (
      <div>

        <div id={this.props.name} style={{
          height: 100,
          width: "100%"
        }} />

        <div style={_style}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            fontSize: "2em",
            marginLeft: 40
          }}>
            <h1>
              <span style={{color: ACCENT_COLOR}} class="CodeFont">{this.props.num}.</span>
              &nbsp;{this.props.name}
            </h1>
          </div>
        </div>

      </div>
    )
  }
}

export default SectionHeader
