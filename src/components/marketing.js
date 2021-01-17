import React from "react"
import {useSpring, animated, interpolate} from 'react-spring'
//import {Spring} from 'react-spring/renderprops'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

/*

key points:

  I am an engineer at heart -> I got the engineering itch man


   - Based in ON Canada
   - Aspiring maker - TRUE
   - Coding has been a long time passion of mine and remains to this date - TRUE
   -      Got quite a bit of experience

   - w.r.t to coding I love real time applications. I go about my code w/ a from scratch mentality (low dependencies)
   - In recent times I am exploring A.I. and the entire world surrounding this

   - I have not played around w/ VR, but it remains ultimately cool to me

   - Mechatronics -> Electrical Engineering

   - Physics? - EXCITED

   - Iffy on electrical engineering -> picked because "circuits are important and integral to all designs"


  I'm an aspiring maker Engineering Physics student , which means . I hope to build some seriously
  cool (and useful) things one day. In the meantime, I've got a nicely sized library of programming
  projects worth !

*/

function SpringContainer(props) {

  var height_const = (isMobile) ? 51 : 88

  const _props = useSpring({
    to: async (next, cancel) => {
      var count = 1;
      const delay = ms => new Promise(res => setTimeout(res, ms));
      // gooooo for infinite
      while (1) {
        await delay(2500);
        console.log("Waited 2.5s after animation");
        await next({scroll: count * height_const})
        count += 1;
      }
    },
    from: {scroll: 0}
  })

  return (
    <animated.div style={{
      overflow: "hidden",
      height: height_const
    }} scrollTop={ _props.scroll.interpolate( (x) => (x % (height_const * 7)) ) }>
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
  render() {
    return (

      <div style={{
        position: "relative",
        width: "100%",
        height: (isMobile) ? 450 : 660
      }}>
        <div style={{fontSize: "1.3em", margin: 40, position: "absolute"}}>
          <span class="AccentText">Hi 👋 I'm,</span>
          <div style={{fontSize: (isMobile) ? "1.5em" : "2.0em", lineHeight: 1}}>
            <h1 style={{margin: 0, fontWeight: "normal"}}>{this.props.name}</h1>
          </div>

          <MobileView>
            <div class="SecondaryText" style={{
              fontSize: "1.0em"
            }} >
              <h2>I build things with</h2>
              <SpringContainer />
            </div>
          </MobileView>
          <BrowserView>
            <div class="SecondaryText" style={{
              fontSize: "1.7em",
              display: "flex",
              flexDirection: "row"
            }} >
              <h2>I build things with</h2>
              <SpringContainer />
            </div>
          </BrowserView>

          <p class="SecondaryText" style={{
            marginTop: "1em"
          }}>
            Just an avid coder, and an apsiring maker.
          </p>

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
