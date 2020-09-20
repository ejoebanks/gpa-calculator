import React, {useState, useEffect } from "react";


export default function TableRow(props) {
  const [count, setCount] = useState(null);
  const addedRow = [];
  console.log(props);
   for (var x = 0; x < count; x += 1) {
     addedRow.push(
             <tr>
               <td id={x}>{count > 0 && <button type="button" name="remove" id="" class="btn_remove btn">X</button>}</td>
               <td><input name="course" className="form-control" value='' placeholder="Course"/></td>
               <td><input id={"Grade_" + x + ""}  name="course" className="form-control" value='' placeholder="Grade" /></td>
               <td><input id={x}  name="course" className="form-control" value='' placeholder="Credit Hours" /></td>
               <td><input type="checkbox" className="btn_repeat" id={x} /></td>
               <td><input id={x} name="total" className="total form-control" readOnly id="total1" /></td>
             </tr>
 );
   };


    let tableRowGroups = [];
    for (let i = 0; i < 4; i++) {
      tableRowGroups.push(
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

  function addRow() {
    let i = 0;
    tableRowGroups.push(
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



  return (
        <tbody>
          {tableRowGroups.map((row, index) => {
            return <tr id={index} key={index}>{row}</tr>
          })}

        </tbody>
  );
}
