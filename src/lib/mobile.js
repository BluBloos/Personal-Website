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
    if (typeof window !== `undefined`) {
      this.state = {width: window.innerWidth};
    } else {
      this.state = {app: {width: Infinity}};
    }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('resize', this.updateWindowSize);
    }

    this.updateWindowSize();
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('resize', this.updateWindowSize);
    }
  }

  updateWindowSize = () => {
    if (typeof window !== `undefined`) {
      this.setState({width :window.innerWidth});
    }
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
    if (typeof window !== `undefined`) {
      this.state = {width: window.innerWidth};
    } else {
      this.state = {app: {width: Infinity}};
    }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('resize', this.updateWindowSize);
    }

    this.updateWindowSize();
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('resize', this.updateWindowSize);
    }
  }

  updateWindowSize = () => {
    if (typeof window !== `undefined`) {
      this.setState({width :window.innerWidth});
    }
  }

  render() {
    if (isMobile({width: this.state.width})) {
      return (<div>{this.props.children}</div>);
    }

    return <div />;
  }

}

export { MobileView, BrowserView }
