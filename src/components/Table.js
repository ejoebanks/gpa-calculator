import React, { useState } from "react";
import TableRow from './TableRow';
import AddRow from './TableRow.js';

function Table() {
  const [ count, setCount ] = useState(0);
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
          <th scope="col">Remove</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Credits</th>
          <th scope="col">Credits</th>
          <th scope="col">Quality Points</th>
        </tr>
      </thead>
      <TableRow />
    </table>
  );
}

export default Table;
