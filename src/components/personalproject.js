import React from "react"

// NOTE: on mobile each project will not be playable.
//import {isMobile} from 'react-device-detect';

//import styles from "./personalproject.module.css"

import {TEXT_COLOR_SECONDARY} from "../styles/colors.js"
import styles from "./personalproject.module.css"

export default function PersonalProject(props) {

  var elem1 = (
    <p style={{
      padding: "0px 40px 0px 40px"
    }}>
      {props.desc}
    </p>);

  var elem2 = (

    <img style={{
      width: 520,
      height: 380,
      borderRadius: 20,
      boxShadow: "0px 0px 25px 1px lightgrey",
    }} src="pokemondemo_thumb.PNG" />

  );

  if (props.imgOnRight == false) {
    var saved_var = elem2;
    elem2 = elem1;
    elem1 = saved_var;
  }

  return (
    <div style={{
      margin: 40,
      color: TEXT_COLOR_SECONDARY
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
        {elem1}
        {elem2}
      </div>
    </div>
  )
}
