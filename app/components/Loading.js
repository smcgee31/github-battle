import React from 'react';
const PropTypes = React.PropTypes;

const styles = {
  container: {
      position: 'fixed'
    , left: 0
    , right: 0
    , top: 0
    , bottom: 0
    , fontSize: '55px'
  },
  content: {
      textAlign: 'center'
    , position: 'absolute'
    , width: '100%'
    , marginTop: '30px'
  }
};

const Loading = React.createClass ({
  // make this Loading component reusable and not so static by adding the ability to set some props
  // set propTypes, getInitialState, getDefaultProps, use setInterval for the dots, and be sure to "unmount"
  // so that it doesn't continue to run
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getInitialState: function () {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  getDefaultProps: function () {
    // the default props make it so that it renders nicely if no one sets any props when using <Loading />
    // but they CAN set their own text and interval speed -- that's the point.
    return {
      text: 'Loading',
      speed: 300
    }
  },
  componentDidMount: function () {
    let stopper = `${this.originalText}...`;
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: `${this.state.text}.`
        })
      }
    }.bind(this), this.props.speed)
  },
  componentWillUnmount: function () {
    clearInterval(this.interval)
  },
  render: function() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }
});

module.exports = Loading;
