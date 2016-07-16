var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');


var Home = React.createClass ({
  render: function() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Let's DO THIS!</p>
        <Link to='/playerOne'>
          <button className="btn btn-lg btn-success" type="button">Get Started</button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;

// the above code could also have been a Stateless Functional Component...
//
// function Home () {
//   return (
//     <MainContainer>
//       <h1>Github Battle</h1>
//       <p className="lead">Let's DO THIS!</p>
//       <Link to='/playerOne'>
//         <button className="btn btn-lg btn-success" type="button">Get Started</button>
//       </Link>
//     </MainContainer>
//   )
// }
