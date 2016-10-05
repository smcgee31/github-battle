import React from 'react';
import styles from '../styles';

function HomeWrapper(props) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  )
};

module.exports = HomeWrapper;
