import React, { Component } from "react";
import "./result.css";
import { Table, TableBody, TableCell, TableHead, TableFooter, TableRow, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ResultTableHead = withStyles(theme => ({
    head: {
        backgroundColor: "#bcab64",
        color: theme.palette.common.white,
        textAlign: "center"
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
class StudentResultBoard extends Component {
    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <ResultTableHead>Student Name</ResultTableHead>
                            <ResultTableHead>Roll Number</ResultTableHead>
                            <ResultTableHead>Total Marks</ResultTableHead>
                            <ResultTableHead>Status</ResultTableHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       <TableCell>Somethinf</TableCell>
                    </TableBody>
                </Table>

            </div>

        )
    }
}

export default StudentResultBoard;