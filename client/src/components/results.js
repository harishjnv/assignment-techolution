import React, { Component } from "react";
import "./result.css";
import { Table, TableBody, TableCell, TableHead, TableFooter, TableRow, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import myJson from "../student.json"

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

const ResultRow = withStyles(theme =>({
    body:{ textAlign:"center",
     background:"red"}
 }))(TableCell)

 
 
class StudentResultBoard extends Component {
   constructor(props){
       super(props);
       this.state={
           studentInfo:myJson,
              
           }
       }
   
//    componentDidMount() {
// //     // fetch(`https://demo1443058.mockable.io/codeproject_tutorial/api/contacts`)
// //     //       .then(res => {
// //     //         // const posts = res.data.data.children.map(obj => obj.data);
// //     //         const studentInfo= res.json.toString();
// //     //         this.setState({ studentInfo });
// //     //         console.log(studentInfo);
// //     //         console.log(this.state);
// //     //       });
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
        console.log(this.state)
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
                       {/* <TableRow>
                         <ResultRow >Abhi</ResultRow>
                         <TableCell>Abhi</TableCell>
                         <TableCell>Abhi</TableCell>

                       </TableRow> */}
                       
                       {
                           this.state.studentInfo.map((person, i) => <GetRow key = {i} data = {person} />)
                       }
                       
                        {/* <GetRow studentInfo={this.state.studentInfo}/> */}
                    </TableBody>
                </Table>

            </div>

        )
    }
}
 class GetRow extends Component{
     render(){
         return(
                 <TableRow>
                 <ResultRow>
                     {this.props.data.name}
                 </ResultRow>
                 <ResultRow>
                     {this.props.data.rollNumber}
                 </ResultRow>
                 <ResultRow>
                     {this.props.data.marks.English+this.props.data.marks.Maths+this.props.data.marks.Science}
                 </ResultRow>
                 </TableRow>
                 
            
         )
     }
 }
export default StudentResultBoard;