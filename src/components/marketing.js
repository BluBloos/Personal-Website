import React from "react"
import {useSpring, animated, interpolate} from 'react-spring'
//import {Spring} from 'react-spring/renderprops'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "../lib/mobile.js";

import AppContext from "../lib/AppContext.js"

function SpringContainer(props) {

  const _props = useSpring({
    to: async (next, cancel) => {
      var count = 1;
      const delay = ms => new Promise(res => setTimeout(res, ms));
      // gooooo for infinite
      while (1) {
        await delay(2500);
        console.log("Waited 2.5s after animation");
        await next({scroll: count * props.height_const})
        count += 1;
      }
    },
    from: {scroll: 0}
  })

  return (
    <animated.div style={{
      overflow: "hidden",
      height: props.height_const
    }} scrollTop={ _props.scroll.interpolate( (x) => (x % (props.height_const * 7)) ) }>
      <h2>&nbsp;👨‍💻 C\C++</h2>
      <h2>&nbsp;🐍 Python</h2>
      <h2>&nbsp;🧠 Tensorflow</h2>
      <h2>&nbsp;💾 Assembly</h2>
      <h2>&nbsp;📜 Javascript</h2>
      <h2>&nbsp;⚛ React</h2>
      <h2>&nbsp;🚀 Passion</h2>
      <h2>&nbsp;👨‍💻 C\C++</h2>
    </animated.div>
  )
}

/* {
  fontSize: "1.7em",

} */

class Marketing extends React.Component {

  static contextType = AppContext;

  render() {
    return (

      <div style={{
        position: "relative",
        width: "100%",
        height: (isMobile(this.context)) ? 450 : 800
      }}>
        <div style={{fontSize: "1.3em", margin: 40, position: "absolute"}}>
          <span class="AccentText">Hi 👋 I'm,</span>
          <div style={{fontSize: (isMobile(this.context)) ? "1.5em" : "2.0em", lineHeight: 1}}>
            <h1 style={{margin: 0, fontWeight: "normal"}}>{this.props.name}</h1>
          </div>

          <MobileView>
            <div class="SecondaryText" style={{
              fontSize: "1.0em"
            }} >
              <h2>I build things with</h2>
              <SpringContainer height_const={51} />
            </div>
          </MobileView>
          <BrowserView>
            <div class="SecondaryText" style={{
              fontSize: "1.7em",
              display: "flex",
              flexDirection: "row"
            }} >
              <h2>I build things with</h2>
              <SpringContainer height_const={88} />
            </div>
          </BrowserView>

          <p class="SecondaryText" style={{
            marginTop: "1em"
          }}>
            Just an avid coder, and an apsiring maker.
          </p>

          <div style={{
            paddingTop: 20
          }}>
            <a href="mailto:noah.cabral@queensu.ca">
              <button>
                Contact
              </button>
            </a>
          </div>

        </div>

        <BrowserView>
          <div style={{
            margin: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}>
            <img src="Me.PNG" height="660" width="660" alt="" />
          </div>
        </BrowserView>

      </div>

    )
  }
}

export default Marketing
