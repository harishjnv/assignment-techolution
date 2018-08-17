import React, { Component } from "react";
import "./result.css";
import { Table, TableBody, TableCell, TableHead, TableFooter, TableRow, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import myJson from "../student.json";
import GetRow from "./getRow"

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

class StudentResultBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentInfo: myJson,

        }
    }
    //    componentDidMount() {
    //     fetch('/home/shiva/Desktop/assignment-techolution/client/src/student.json')
    //             .then(function (response) {
    //                 console.log('data res: ', response);
    //                 return response.json();
    //             }).catch(e => {
    //                 console.log("Error", e);
    //             })
    // .then((myJson) => {
    //     console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    //     console.log(myJson);
    //     this.setState({studentInfo:myJson.body});
    //     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //     console.log(this.state)

    // })
    //   }
    render() {
        console.log("%%%%%%%%%%%%");
        console.log(this.state);
        const { classes } = this.props;

        return (
            <div className="resultTable">
            <p className="text">Results Table</p>
                <Table  className="tableText">
                    <TableHead>
                        <TableRow >
                            <ResultTableHead>Student Name</ResultTableHead>
                            <ResultTableHead>Roll Number</ResultTableHead>
                            <ResultTableHead>Total Marks</ResultTableHead>
                            <ResultTableHead>Status</ResultTableHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.studentInfo.map((person, i) => <GetRow key={i} data={person} />)
                        }
                    </TableBody>
                </Table>

            </div>

        )
    }
}

export default StudentResultBoard;