import React, { Component } from "react";
import "./result.css";
import { Table, TableBody, TableCell, TableHead, TableFooter, TableRow, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import myJson from "../student.json"

const ResultTableHead = withStyles(theme => ({
    head: {
        backgroundColor: "#bcab64",
        color: theme.palette.common.white,
        textAlign: "center",
        fontFamily:"sans",
        fontSize:"1.06em"
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const ResultRow = withStyles(theme => ({
    body: {
        textAlign: "center",
        backgroundColor: "#f8dada",
       
        fontSize:"22px"
    },
}))(TableCell)



class GetRow extends Component {
    render() {
        var totalMarks = this.props.data.marks.English + this.props.data.marks.Maths + this.props.data.marks.Science;
        var passed=true;
        var checkMarks = this.props.data.marks;
        //console.log(typeof (checkMarks.Maths))
        if (checkMarks.Maths < 20 || checkMarks.English < 20 || checkMarks.Science < 20) {
         passed = false;

        }
        return (
            <TableRow>
                <ResultRow>
                    {this.props.data.name}
                </ResultRow>
                <ResultRow>
                    {this.props.data.rollNumber}
                </ResultRow>
                <ResultRow>
                    {totalMarks}
                </ResultRow>

                {passed ? (<ResultRow style={{backgroundColor:"lime"}}>Pass</ResultRow>) : (<ResultRow style={{backgroundColor:"red"}}>Fail </ResultRow>)}

            </TableRow>


        )
    }
}
export default GetRow;