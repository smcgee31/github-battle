import React from 'react';
const PropTypes = React.PropTypes;
import styles from '../styles';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import {ReactRouter, Link} from 'react-router';
import MainContainer from './MainContainer';
import Loading from './Loading';


// Private Stateless Functional Component
function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to = '/playerOne'>
        <button className="btn btn-lg btn-danger" type="button">Start Over</button>
      </Link>
    </div>
  )
}

function Results(props) {

  if (props.isLoading === true) {
    return (
      <Loading speed={200} text='One Moment'/>
    )
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>Its a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }
  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired
  , playersInfo: PropTypes.array.isRequired
  , scores: PropTypes.array.isRequired
}

module.exports = Results;
