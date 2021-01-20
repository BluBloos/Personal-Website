// Basically layouts are a special type of children

import React from "react"
import { Link } from "gatsby"
import {useSpring, animated} from 'react-spring'

import layoutStyles from "./layout.module.css"

import { TEXT_COLOR_SECONDARY } from "../styles/colors.js"

import Socials from "./socials.js"

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "../lib/mobile.js";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

// want the top header to behave as such
// when you scroll a little, the height of it changes, and you get a shadow that appears
// this should happen in an animated fashion w// the spring boi

function GetNavLinks() {
  var items = []
  items.push(<div style={{paddingLeft: 20}}><span>01. </span><Link to="/#About">About</Link></div>);
  items.push(<div style={{paddingLeft: 20}}><span>02. </span><Link to="/#Projects">Projects</Link></div>);
  items.push(<div style={{paddingLeft: 20}}><span>03. </span><Link to="/#Contact">Contact</Link></div>);
  items.push(<div style={{paddingLeft: 20}}><a href="/ncabral.pdf" target="_blank"><button>Resume</button></a></div>);
  return items;
}

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
        <BrowserView>
          <div class="CodeFont" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            {GetNavLinks()}
          </div>
        </BrowserView>
        <MobileView>
          <div >
            <button style={{
              border: "none"
            }} onClick={props.onMenuBttn}>
              <img src="menu.PNG" />

            </button>
          </div>
        </MobileView>
      </div>
    </animated.header>
  )
}

function GetNavMenu(props) {

  const _props = useSpring({
    config: {
      tension: 400
    },
    /* right shift, down shift, blur, spread */

    right: (props.navOpen) ? "70px" : "0px",
    display: (props.navOpen) ? "block" : "none",
    from: {
      right: "0px",
      display: "none"

    }
  })

  return (
    <animated.div style={{
      display: _props.display,
      position: "fixed",
      top: 140,
      right: _props.right,
      zIndex: 2,
      backgroundColor: "white",
      boxShadow: "0px 0px 25px 1px lightgrey",
      padding: 20
    }}>

      <div class="CodeFont" style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{padding: 10}}><span>01. </span><a onClick={props.onMenuCloseBttn} href="/#About">About</a></div>
        <div style={{padding: 10}}><span>02. </span><a onClick={props.onMenuCloseBttn} href="/#Projects">Projects</a></div>
        <div style={{padding: 10}}><span>03. </span><a onClick={props.onMenuCloseBttn} href="/#Contact">Contact</a></div>
        <div style={{padding: 10}}><button onClick={props.onMenuCloseBttn}>Resume</button></div>
      </div>

      <button onClick={props.onMenuCloseBttn} style={{
        border: "none"
      }}>
        <img src="menu_close.PNG" />
      </button>

    </animated.div>
  )
}

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {scrollpos: 0, navOpen: false};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  handleMenuBttn = () => {
    var newState = !this.state.navOpen;
    this.setState({
      navOpen: newState
    })
  }

  onMenuCloseBttn = () => {
    this.setState({
      navOpen: false
    })
  }

  listenToScroll = () => {
    this.setState({
      scrollpos: window.scrollY,
    })
  }

  render() {

    return (
      <div>
        <Header scrollpos={this.state.scrollpos}
                onMenuBttn={this.handleMenuBttn} />

        <BrowserView>
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
        </BrowserView>

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

        <GetNavMenu navOpen={this.state.navOpen} onMenuCloseBttn={this.onMenuCloseBttn} />

        <div style={{marginTop:"100px"}}>
          {this.props.children}

        </div>
      </div>
    )
  }
}

export default Layout
