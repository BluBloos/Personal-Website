// Basically layouts are a special type of children

import React from "react"
import { Link } from "gatsby"
import {useSpring, animated} from 'react-spring'

import layoutStyles from "./layout.module.css"

import { TEXT_COLOR_SECONDARY } from "../styles/colors.js"

import Socials from "./socials.js"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

// want the top header to behave as such
// when you scroll a little, the height of it changes, and you get a shadow that appears
// this should happen in an animated fashion w// the spring boi

function Header(props) {
  const _props = useSpring({
    config: {
      tension: 400
    },
    /* right shift, down shift, blur, spread */
    boxShadow: (props.scrollpos >= 2) ? "0px 0px 25px 1px lightgrey" : "0px 0px 0px 0px lightgrey",
    height: (props.scrollpos >= 2) ? "70px" : "100px",
    from: {
      height: "100px",
      boxShadow: "0px 0px 0px 0px lightgrey"
    }
  })
  return (
    <animated.header className={layoutStyles.Header} style={_props}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "inherit",
        paddingLeft: 20, paddingRight: 20
      }}>
        <div class="CodeFont" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <div style={{paddingLeft: 20}}><span>01. </span><Link to="/#About">About</Link></div>
          <div style={{paddingLeft: 20}}><span>02. </span><Link to="/#Projects">Projects</Link></div>
          <div style={{paddingLeft: 20}}><span>03. </span><Link to="/#Contact">Contact</Link></div>
          <div style={{paddingLeft: 20}}><button>Resume</button></div>
        </div>
      </div>
    </animated.header>
  )
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scrollpos: 0};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    this.setState({
      scrollpos: window.scrollY,
    })
  }

  render() {
    return (
      <div>
        <Header scrollpos={this.state.scrollpos}/>

        <div style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          position: "fixed",
          bottom: 0,
          right: "2em",
          zIndex: 1
        }}>
          <a className={"EpicLink CodeFont"} style={{
            paddingBottom: 20
          }} href="mailto:noah.cabral@queensu.ca">
            noah.cabral@queensu.ca
          </a>
          <svg height="100" width="2">
            <line x1="0" y1="0" x2="0" y2="100" style={{strokeWidth: 3, stroke: TEXT_COLOR_SECONDARY}} />
          </svg>
        </div>

        {/*
        <div style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          position: "fixed",
          bottom: 0,
          left: "2em",
          zIndex: 1
        }}>

          <Socials github="https://github.com/BluBloos/"
                   linkedin="https://www.linkedin.com/in/noah-cabral-96b62b1a2/" />

          <svg height="100" width="2">
            <line x1="0" y1="0" x2="0" y2="100" style={{strokeWidth: 3, stroke: TEXT_COLOR_SECONDARY}} />
          </svg>
        </div>
        */
        }

        <div style={{marginTop:"100px"}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
