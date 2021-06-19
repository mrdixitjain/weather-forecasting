// import React, { Component, useEffect, useState } from "react";
// import Weather from "./Weather";
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
  
// // class App extends Component {

// //   constructor(props) {
// //     super(props);

// //     this.onClickBtn = this.onClickBtn.bind(this);
// //   }

// //   onClickBtn() {
// //     console.log("Button has been clicked!");
// //   }
//   // render() {
// //     return (
// //       <div>
// //         <p> Hello from App</p>
// //         {/* <Weather title="React" onClickBtn={this.onClickBtn} /> */}
// //       </div>
// //     );
// //   }
// // }

// const App = () => {
// //   let [count, setCount] = useState(0);
// //   let [color, setColor] = useState("pink");

// //   useEffect(() => {
// //     const changeColorOnClick = () => {
// //       if (color == 'pink')
// //         setColor('red');
// //       else 
// //         setColor('pink');
// //     }

// //     document.getElementById('count').addEventListener('click', changeColorOnClick);

// //     return () => {
// //       document.getElementById('count').removeEventListener('click', changeColorOnClick);
// //     }
// //   }, [color]);

// //   const incrementCount = () => {
// //     setCount(count+1);
// //   };

// //   return(
// //     <div>
// //       <div
// //         id="count"
// //         style={{
// //           width: "50px",
// //           backgroundColor: color
// //         }}
// //       >
// //         {count}
// //       </div>
// //       <button onClick={()=>incrementCount()}>increment</button>
// //     </div>)
// // }


// return (
//   <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/users">Users</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* A <Switch> looks through its children <Route>s and
//           renders the first one that matches the current URL. */}
//       <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/users">
//           <Users />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
// );
// }

// function Home() {
// return <h2>Home</h2>;
// }

// function About() {
// return <h2>About</h2>;
// }

// function Users() {
// return <h2>Users</h2>;
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
