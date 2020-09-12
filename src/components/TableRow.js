import React from "react";


export default function TableRow() {
    let tableRowGroups = [];

    for (let i = 0; i < 4; i++) {
      tableRowGroups.push(
        <>
          <td id={i}></td>
          <td><input name="course" className="form-control" value='' placeholder="Course"/>{i}</td>
          <td><input id={"Grade " + i + ""}  name="course" className="form-control" value='' placeholder="Grade" />{i}</td>
          <td><input id={i}  name="course" className="form-control" value='' placeholder="Credit Hours" />{i}</td>
          <td><input type="checkbox" className="btn_repeat" id={i} />{i}</td>
          <td><input id={i} name="total" className="total form-control" id="total1" />{i}</td>
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

export function deleteRow() {

}

export function AddRow(event) {
  let inputgroups = [];
  let i = document.getElementById('testboxhere').value;
  inputgroups.push(
    <tr key={i+1} id={i+1}>
      <td id={i+1}/>
      <td><input id={i} name="course" className="form-control" value='' placeholder="Class Name"/></td>
      <td><input id={i}  name="course" className="form-control" value='' placeholder="Grade" /></td>
      <td><input id={i}  name="course" className="form-control" value='' placeholder="Credit Hours" /></td>
      <td><input type="checkbox" className="btn_repeat" id={i} /></td>
      <td><input id={i}  name="total" className="total form-control" id="total1" /></td>
    </tr>
)
}
