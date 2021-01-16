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
import footerStyles from "./footer.module.css"

import AOS from "aos"

class Home extends React.Component {

  constructor(props) {
    super(props);
    SetColorVars();
    AOS.init();
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
          <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
          <script src="https://kit.fontawesome.com/a3f5a9bb12.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="global.css" />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Helmet>
        <div style={{ padding: 40 }}>

          <div style={{
            position: "relative",
            width: "100%"
          }}>
            <Marketing name="Noah Cabral" />
            <div style={{
              margin: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end"
            }}>
              <img src="Me.PNG" height="660" width="660" alt="" />
            </div>
          </div>

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
          <Projects numprojects={3}/>

          <div style={{
            margin: "40px 40px 200px 40px"
          }}>
            <SectionHeader num="03" name="Contact" center={true} />
            <Contact />
          </div>

          <div style={{
            textAlign: "center"
          }}>
            <a className={footerStyles.footer}
            href="https://github.com/BluBloos/Personal-Website">
              © 2021, Built with ❤ by Noah Cabral
            </a>
          </div>

        </div>
      </Layout>
    );
  }
}

export default Home
