import React, { Component } from "react";
import logo from "./logo.svg";
import Books from "./Books";
import "./App.css";
import { HashRouter, NavLink, Route } from "react-router-dom";
import StudentResultBoard from './components/results.js';
import Admission from './components/admission';



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
          <div className="class" >
            <ul>
              <NavLink to="/">StudentResultBoard</NavLink>
              <NavLink to="/Admission">Admission</NavLink>
            </ul>
            <div>
              <Route path="/" component={StudentResultBoard}/>
              <Route exact path="/Admission" component={Admission}/>
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
