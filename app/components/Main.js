import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require('../main.css');

const Main = React.createClass ({
  render: function() {
    return (
      <div className='main-container'>
      <ReactCSSTransitionGroup
        transitionName='appear'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
      </ReactCSSTransitionGroup>
      </div>
    )
  }
});

module.exports = Main;
