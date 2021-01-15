import React from "react"
import {useSpring, animated, interpolate} from 'react-spring'
//import {Spring} from 'react-spring/renderprops'

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

  const _props = useSpring({
    to: async (next, cancel) => {
      var count = 1;
      const delay = ms => new Promise(res => setTimeout(res, ms));
      // gooooo for infinite
      while (1) {
        await delay(2500);
        console.log("Waited 2.5s after animation");
        await next({scroll: count * 88})
        count += 1;
      }
    },
    from: {scroll: 0}
  })

  return (
    <div>
      <animated.div style={{
        overflow: "hidden",
        display: "inline-block",
        height: 88
      }} scrollTop={ _props.scroll.interpolate( (x) => (x % (88 * 7)) ) }>
        <h2>&nbsp;👨‍💻 C\C++</h2>
        <h2>&nbsp;🐍 Python</h2>
        <h2>&nbsp;🧠 Tensorflow</h2>
        <h2>&nbsp;💾 Assembly</h2>
        <h2>&nbsp;📜 Javascript</h2>
        <h2>&nbsp;⚛ React</h2>
        <h2>&nbsp;🚀 Passion</h2>
        <h2>&nbsp;👨‍💻 C\C++</h2>
      </animated.div>
    </div>
  )
}

class Marketing extends React.Component {
  render() {
    return (
      <div style={{fontSize: "1.3em", margin: 40, position: "absolute"}}>
        <span class="AccentText">Hi 👋 I'm,</span>
        <div style={{fontSize: "2.0em", lineHeight: 1}}>
          <h1 style={{margin: 0, fontWeight: "normal"}}>{this.props.name}</h1>
        </div>
        <div class="SecondaryText" style={{
          fontSize: "1.7em",
          display: "flex",
          flexDirection: "row"
        }}>
          <h2>I build things with</h2>
          <SpringContainer />
        </div>
        <span class="SecondaryText" style={{width: "30vw"}}>
          Just an avid coder, and an apsiring maker.
        </span>
      </div>
    )
  }
}

export default Marketing
