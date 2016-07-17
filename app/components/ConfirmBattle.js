import React from 'react';
const PropTypes = React.PropTypes;
import styles from '../styles';
import {ReactRouter, Link} from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';


// Stateless Functional Component
// notice the Conditional operator that asks if props.isLoading true then render LOADING, otherwise render the rest
function ConfirmBattle(props) {
  return props.isLoading === true
    ? <Loading speed={200} text='Getting Players'/>
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header='Player 1'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player 2'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <button className="btn btn-lg btn-success" type="button" onClick={props.onInitiateBattle}> Initiate Battle! </button>
          </div>
          <div className="col-sm-12" style={styles.space}>
            <Link to='/playerOne'>
              <button className="btn btn-lg btn-danger" type="button">Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired
  , onInitiateBattle: PropTypes.func.isRequired
  , playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
