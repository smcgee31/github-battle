import React from 'react';
import {ReactRouter, Link} from 'react-router';
import HomeWrapper from './HomeWrapper';


const Home = React.createClass ({
  render: function() {
    return (
      <HomeWrapper>
        <h1>Github Battle</h1>
        <p className="lead">Let's DO THIS!</p>
        <Link to='/playerOne'>
          <button className="btn btn-lg btn-success" type="button">Get Started</button>
        </Link>
      </HomeWrapper>
    )
  }
});

module.exports = Home;

// the above code could also have been a Stateless Functional Component...
//
// function Home () {
//   return (
//     <HomeWrapper>
//       <h1>Github Battle</h1>
//       <p className="lead">Let's DO THIS!</p>
//       <Link to='/playerOne'>
//         <button className="btn btn-lg btn-success" type="button">Get Started</button>
//       </Link>
//     </HomeWrapper>
//   )
// }
