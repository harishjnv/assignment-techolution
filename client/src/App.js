import React, { Component } from "react";
import "./App.css";
import { HashRouter, NavLink, Route } from "react-router-dom";
import StudentResultBoard from './components/results.js';
import Admission from './components/admission';
import Button from '@material-ui/core/Button';


class App extends Component {

  render() {
    return (
      <div >
        <HashRouter>
          <div  >
            <ul>
              <div className="nav">
                {/* <li style={{float:"left", marginLeft:"50px",textAlign:"center"}}><h3>Our School</h3></li> */}
                <li><NavLink to="/"><Button style={{fontSize:"22px"}}>Student Result Board</Button></NavLink></li>
                <li> <NavLink to="/Admission"><Button style={{fontSize:"22px"}}>Admission</Button></NavLink></li>
              </div >
            </ul>
            <div>
              <Route exact path="/" component={StudentResultBoard} />
              <Route exact path="/Admission" component={Admission} />
            </div>

          </div>
        </HashRouter>
      </div>

    );
  }
}

export default App;

