const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const MainContainer = require('./MainContainer');


const Home = React.createClass ({
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
