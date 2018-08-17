import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import './admissions.css'
import { Button } from "@material-ui/core";

class Admission extends Component{
    render(){
        return(
            <div className="admissionForm">
                <TextField label="Name" placeholder="Enter Name" type="text" style={{width:"250px"}}/>
               <div > <TextField label="Last Name" placeholder="Last Name" type="text" style={{width:"250px"}}/></div>
                <div><TextField label="Class" style={{width:"250px"}} /></div>
                <div><TextField label="Year" type="number" name="quantity" min="2017" max="2020" placeholder="Year of Passing" style={{width:"250px"}}/></div>
                <div><TextField label="Percentage" type="number" placeholder="Percentage of Marks" style={{width:"250px"}}/></div>
            <Button color="primary" variant="contained" style={{marginTop:"30px"}}>Submmit</Button>
            </div>
        )
    }
}

export default Admission;