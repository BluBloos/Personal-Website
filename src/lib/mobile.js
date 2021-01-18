import React from "react"

import {
  isBrowser as isBrowserDevice,
  isMobile as isMobileDevice
} from "react-device-detect";

const MOBILE_WIDTH = 960

export function isMobile(context) {
  return ( isMobileDevice || context.width <= MOBILE_WIDTH )
}

export function isBrowser(context) {
  return ( !isMobile(context) )
}

class BrowserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: window.innerWidth};
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  updateWindowSize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {
    if (isBrowser({width: this.state.width})) {
      return (<div>{this.props.children}</div>);
    }

    return <div />;
  }

}

class MobileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: window.innerWidth};
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  updateWindowSize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {
    if (isMobile({width: this.state.width})) {
      return (<div>{this.props.children}</div>);
    }

    return <div />;
  }

}

export { MobileView, BrowserView }
