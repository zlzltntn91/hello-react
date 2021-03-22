import React, { Component } from "react";
import PropTypes from "prop-types";

class ScrollBox extends Component {
  scrollBottom = () => {
   const {scrollHeight, clientHeight} = this.box;
   this.box.scrollTop = scrollHeight - clientHeight;
  };

  scorollTop = () => {
    this.box.scrollTop = 0;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relactive",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle}></div>
      </div>
    );
  }
}

ScrollBox.propTypes = {
  props: PropTypes.element
};

export default ScrollBox;
