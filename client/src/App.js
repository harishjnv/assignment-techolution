import React, { Component } from "react";

//import Books from "./Books";
import "./App.css";
import { HashRouter, NavLink, Route } from "react-router-dom";
import StudentResultBoard from './components/results.js';
import Admission from './components/admission';
import Button from '@material-ui/core/Button';


class App extends Component {
  state = { books: null };

  // handleClick = async e => {
  //   const response = await fetch("api/books/");
  //   const books = await response.json();
  //   this.setState({
  //     books: books
  //   });
  // };

  render() {
    return (
      <div >
        <HashRouter>
          <div  >
            <ul>
              <div className="nav">
               <li><NavLink to="/"><Button >StudentResultBoard</Button></NavLink></li>
                <li> <NavLink to="/Admission"><Button>Admission</Button></NavLink></li>
              </div >
            </ul>
            <div>
              <Route exact path="/" component={StudentResultBoard} />
              <Route exact path="/Admission" component={Admission} />
            </div>

          </div>
        </HashRouter>
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>react-express-starter-kit</h2>
      //     <button onClick={this.handleClick}>Get books from API </button>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <Books books={this.state.books} />
      // </div>
    );
  }
}

export default App;

