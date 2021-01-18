import React from "react"

// NOTE: on mobile each project will not be playable.
import {isMobile, BrowserView, MobileView} from '../lib/mobile.js';

import AppContext from "../lib/AppContext.js"

//import styles from "./personalproject.module.css"

import {TEXT_COLOR_SECONDARY} from "../styles/colors.js"
import styles from "./personalproject.module.css"

export default function PersonalProject(props) {

  var elem1 = (
    <AppContext.Consumer>
      { context => (
          <div style={{
          width: (isMobile(context)) ? "auto" : "35em"
          }}>
            <p style={{
              margin: (isMobile(context)) ? "1em 0px 1em 0px" : "40px",
            }}>
              {props.desc}
            </p>
          </div>
        )
      }
    </AppContext.Consumer>
  );

  var elem2 = (
    <AppContext.Consumer>
      { context => (
          <div style={{
            margin: "40px 0px 40px 0px",
            borderRadius: 20,
            boxShadow: "0px 0px 25px 1px lightgrey",
            backgroundImage: `url(${props.thumb})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <div style={{
              width: (isMobile(context)) ? "100%" : 520,
              height: (isMobile(context)) ? 180 : 380 ,
            }}>
            </div>
          </div>
        )
      }
    </AppContext.Consumer>
  );

  if (props.imgOnRight == false) {
    var saved_var = elem2;
    elem2 = elem1;
    elem1 = saved_var;
  }

  return (
    <div>
      <BrowserView>
        <div style={{
          color: TEXT_COLOR_SECONDARY
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            {elem1}
            {elem2}
          </div>
        </div>
      </BrowserView>
      <MobileView>
      <div style={{
        color: TEXT_COLOR_SECONDARY
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}>
          {elem1}
          {elem2}
        </div>
      </div>
      </MobileView>
    </div>
  )
}
