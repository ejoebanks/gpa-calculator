import React, { useState, useEffect } from "react";
import Constants from '../Constants/Constants.js';

const Table = () => {
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const tableRow = [
    {
      id: count,
      course: <input name="course" className="form-control" placeholder="Course"/>,
      grade:

      <select id="currentgrade" className="currentgrade amount form-control" >
        <option id="def1" value="default">Grade</option>
        <option value="4">A</option>
        <option value="3">B</option>
        <option value="2">C</option>
        <option value="1">D</option>
        <option value="0">F</option>
        <option value="0">NCR</option>
        <option value="100">I</option>
        <option value="100">W</option>
        <option value="100">X</option>
        <option value="100">CR</option>
      </select>
      ,
      credithours:

      <select id="credithours" className="credithours amount form-control" >
        <option id="def2" value="default" selected>Hours</option>
        <option value=".5">.5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
      </select>
      ,
      repeat: <input type="checkbox" className="btn_repeat" />,
      total: <input name="total" className="total form-control" readOnly id="total1" />
    }];
  useEffect(() => {
    getData();
    //Increment row count so the initial row isn't duplicated
    setCount(count + 1);
    }, [])

  const getData = () => {
    setRows(tableRow);
  }
    const renderHeader = () => {
      let headerElement = ['remove', 'course', 'grade', 'credits',
      'repeat', 'quality points']

      return headerElement.map((key, index) => {
        return <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
        })
       }

       const removeData = (id) => {
         const del = rows.filter(row => id !== row.id)
         setRows(del);
       }

       const addData = () => {
         let add = [];
         setCount(count + 1);
         if (rows.length < 8) {
           add = rows.concat(tableRow);
           setRows(add);
         } else {
           alert ("Course load is limited to 8");
         }
       }

       const appendRows = () => {
         let add = [];
         for (let i = 0; i <= 4; i++) {
           add = rows.concat(tableRow);
           setRows(add);
         }
       }


       const renderBody = () => {
           return rows && rows.map(({ id, course, repeat, credithours, grade, remove, total }) => {
               return (
                   <tr id={id} key={id}>
                       <td>{id > 0 ? <button type="button" name="remove" id=" " onClick={() => removeData(id)}className="btn_remove btn">X</button> : " "}</td>
                       <td>{course}</td>
                       <td>{grade}</td>
                       <td>{credithours}</td>
                       <td>{repeat}</td>
                       <td>{total}</td>
                   </tr>
               )
           })


       }

       const freset = () => {
         console.log(document.getElementById("myform"));
         document.getElementById("myform").reset();
       }



  return (
    <>
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
        {renderHeader()}
        </tr>
      </thead>
      <tbody>
        {renderBody()}
      </tbody>
    </table>
    <div className="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-secondary" onClick={() => addData()}>Add Row</button>
    </div>
    <div className="btn-group mr-2" role="group" aria-label="Second group">
      <button type="button" className="btn btn-secondary resetBtn" onClick={() => freset()}>Reset</button>
    </div>
    </>
  );
}

export default Table;
