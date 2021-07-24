import React from "react"
import PropTypes from "prop-types"
class HomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        Tagline: {this.props.tagline}
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>

      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  tagline: PropTypes.string
};
export default HomePage
