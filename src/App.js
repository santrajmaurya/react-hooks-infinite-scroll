import React, { Component, useState } from 'react';
import List from './List';
import List2 from './List2';
import InfiniteUsers from './InfiniteUsers';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1>
              React Hooks Infinite Scroller
            </h1>
            <h3 className="text-muted">
              An <u>infinite scroll</u> component, built using React and custom React Hooks.
              <br />
              <small>Scroll down to see it in action</small>
            </h3>
          </div>
          <div className="col-12 text-center mt-3">
            <button type="button" className="btn btn-primary" onClick={() => window.open('https://upmostly.com/tutorials/', '_blank')}>
              View Full Tutorial at Upmostly.com
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6 justify-content-center my-5">
            <InfiniteUsers />
          </div>
          {/* <div className="col-6 justify-content-center my-5">
            <List2 />
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// // import logo from "./logo.svg";
// // import "./App.css";
    
//     class App extends Component {
//       constructor(props) {
//         super(props);
//         this.state = {
//           items: 20,
//           loading: false
//         };
//       }
//       componentDidMount() {
//         // Detect when scrolled to bottom.
//         this.refs.myscroll.addEventListener("scroll", () => {
//           if (
//             this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
//             this.refs.myscroll.scrollHeight
//           ) {
//             this.loadMore();
//           }
//         });
//       }
    
//       showItems() {
//         var items = [];
//         for (var i = 0; i < this.state.items; i++) {
//           items.push(<li key={i}>Item {i}</li>);
//         }
//         return items;
//       }
    
//       loadMore() {
//         this.setState({ loading: true });
//         setTimeout(() => {
//           this.setState({ items: this.state.items + 20, loading: false });
//         }, 2000);
//       }
    
//       render() {
//         return (
//           <div
//             ref="myscroll"
//             style={{ height: "420px", overflow: "auto" }}
//           >
//             <header className="App-header">
//               <h1 className="App-title">Welcome to React</h1>
//             </header>
//             <ul>
//               {this.showItems()}
//             </ul>
//             {this.state.loading
//               ? <p className="App-intro">
//                   loading ...
//                 </p>
//               : ""}
    
//           </div>
//         );
//       }
//     }
    
//     export default App;
