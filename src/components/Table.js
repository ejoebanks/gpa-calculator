import React, { useState, useEffect } from "react";
import TableRow from './TableRow';
import AddRow from './TableRow.js';
import ButtonGroup from './ButtonGroup';
import { row } from './ButtonGroup.js';


const Table = () => {
  const [rows, setRows] = useState([])

  const removeData = (id) => {}

  const renderHeader = () => {
          let headerElement = ['remove', 'course', 'grade', 'credits', 'repeat', 'quality points']

          return headerElement.map((key, index) => {
              return <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
          })
      }

      const renderBody = (props) => {
        for (let i = 0; i <= props; i++) {
          rows.push(
            <>
              <td id={i}>{i > 0 && <button type="button" name="remove" id="" class="btn_remove btn">X</button>}</td>
              <td><input name="course" className="form-control" value='' placeholder="Course"/></td>
              <td><input id={"Grade_" + i + ""}  name="course" className="form-control" value='' placeholder="Grade" /></td>
              <td><input id={i}  name="course" className="form-control" value='' placeholder="Credit Hours" /></td>
              <td><input type="checkbox" className="btn_repeat" id={i} /></td>
              <td><input id={i} name="total" className="total form-control" readOnly id="total1" /></td>
            </>
        )

      }

      return rows && rows.map((row, index) => {
          return (
            <tr id={index} key={index}>{row}</tr>
          )
      })
  }

  let tableRowGroups = [];
  for (let i = 0; i < 4; i++) {
    tableRowGroups.push(
      <tr>
        <td id={i}></td>
        <td><input id={i} name="course" className="form-control" value='' placeholder="Class Name"/>{i}</td>
        <td><input id={i}  name="course" className="form-control" value='' placeholder="Grade" />{i}</td>
        <td><input id={i}  name="course" className="form-control" value='' placeholder="Credit Hours" />{i}</td>
        <td><input type="checkbox" className="btn_repeat" id={i} />{i}</td>
        <td><input id={i}  name="total" className="total form-control" id="total1" />{i}</td>
      </tr>
  )
}

  let inputgroups = [];


  for (let i = 0; i < 3; i++) {
    inputgroups.push(
        <TableRow key={i} />
    )
}


const inputOut = inputgroups.map((row) => <div key={5}>{row}</div>);

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
        {renderHeader()}
        </tr>
      </thead>
      {renderBody(3)}
    </table>
  );
}

export default Table;
