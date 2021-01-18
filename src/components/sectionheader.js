import React from "react"

import { ACCENT_COLOR } from "../styles/colors.js"

class SectionHeader extends React.Component {

  render() {

    var _style = {}

    if (this.props.center) {
      _style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
      }
    }

    //const {name, num} = this.props;
    return (
      <div>

        <div id={this.props.name} style={{
          height: 100,
          width: "100%"
        }} />


        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          fontSize: "2em",
          marginLeft: (this.props.center) ? 0 : 40
        }}>
          <div style={_style}>
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
