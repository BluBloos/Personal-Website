// Hosting options:
// Surge
// Gatsby Cloud

import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"

import Layout from "../components/layout"

// import the sections
import About from "../components/about.js"
import Marketing from "../components/marketing"
import Projects from "../components/projects"
import Contact from "../components/contact"

import { SetColorVars, TEXT_COLOR_SECONDARY } from "../styles/colors.js"
import SectionHeader from "../components/sectionheader.js"

import AOS from "aos"

import {
  isMobile
} from "../lib/mobile.js";

import AppContext from "../lib/AppContext.js"

class Home extends React.Component {

  constructor(props) {
    super(props);
    SetColorVars();
    if (typeof document !== `undefined`) {
      AOS.init();
    }
    if (typeof window !== `undefined`) {
      this.state = { app : {width: window.innerWidth} };
    } else {
      this.state = {app: {width: Infinity}};
    }
  }

  updateWindowSize = () => {
    if (typeof window !== `undefined`) {
      this.setState({
        app: { width: window.innerWidth }
      });
    }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('resize', this.updateWindowSize);

      this.setState({
        app: { width: window.innerWidth }
      });

      if (isMobile(this.state.app)) {
        this.setState({
          app: { width: 1000 }
        });
      } else {
        this.setState({
          app: { width: 0 }
        });
      }

      this.setState({
        app: { width: window.innerWidth }
      });

      this.forceUpdate(); // final force for good
    }
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('scroll', this.updateWindowSize);
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state.app}>
        <Layout>
          <Helmet>
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
            <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
            <script src="https://kit.fontawesome.com/a3f5a9bb12.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="global.css" />
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
          </Helmet>

          <div style={{ margin: isMobile(this.state.app) ? 0 : 40 }}>

            <Marketing name="Noah Cabral" />

            <SectionHeader num="01" name="About" />
            <About />

            {/**<div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%"
            }}>
              <span style={{
                paddingRight: 20
              }}><SectionHeader num="02" name="Projects" /></span>
            </div>**/}
            <SectionHeader num="02" name="Projects" />
            <Projects numprojects={3} isMobile={isMobile(this.state.app)}/>

            <div style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 100
            }}>
              <svg height="2" width={isMobile(this.state.app) ? "200" : "600"}>
                <line x1="0" y1="0" x2="600" y2="0" style={{strokeWidth: 2, stroke: TEXT_COLOR_SECONDARY}} />
              </svg>
            </div>

            <div style={{
              margin: (isMobile(this.state.app)) ? "0px 0px 200px 0px" : "40px 40px 200px 40px"
            }}>
              <SectionHeader num="03" name="Contact" center={true} />
              <Contact />
            </div>

            <div style={{
              textAlign: "center",
              margin: (isMobile(this.state.app)) ? 40 : 0
            }}>
              <a className={"EpicLink"}
              href="https://github.com/BluBloos/Personal-Website">
                © 2021, Built with ❤ by Noah Cabral
              </a>
            </div>

          </div>
        </Layout>
      </AppContext.Provider>
    );
  }
}

export default Home
