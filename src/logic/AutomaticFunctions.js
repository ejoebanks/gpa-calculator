import React, { useState } from 'react';

export default function appendRow(event) {

  const rel = event.target.getAttribute("rel");
  rel = parseInt(rel) + 1;
  console.log("TEST");

  if(rel > 8){
    const joined = this.state.rows.concat(
      <tr id="row' + rowid + '" class="item">
        <td class="text-center">
          <div class = "wrapper">
            <button type="button" name="remove" id="' + rowid + '" class="btn_remove btn">X</button></div></td>
              <td>
                <input name="course" class="form-control" value="" placeholder="Class Name" /></td>
              <td>
                <select id="currentgrade" class="currentgrade amount form-control" >
                <option id="def1" value="default">Grade</option>
                <option value="4">A</option><option value="3">B</option>
                <option value="2">C</option><option value="1">D</option>
                <option value="0">F</option><option value="0">NCR</option>
                <option value="100">I</option><option value="100">W</option>
                <option value="100">X</option><option value="100">CR</option>
                </select>
              </td>
              <td>
                <select id="credithours" name="credithours" class="amount form-control" type="dropdown">
                <option id="def" value="default" selected>Hours</option><option value = ".5">.5</option>
                <option value = "1">1</option><option value = "3">3</option>
                <option value = "4">4</option>
                <option value = "5">5</option>
                <option value = "6">6</option>
                <option value = "7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option><option value="13">13</option>
                <option value="14">14</option></select></td><td class="repeat_options">
                <input type="checkbox" class="btn_repeat" id="' + rowid + '" />
                <select id="g' + rowid + '" class="grds amount form-control"></select></td>
              <td>
                <input name="total" class="total form-control" id="total1" value="" readonly="readonly" />
              </td>
            </tr>
    );
    this.setState({ rows: joined });
  }

}

function deleteRow() {

}

export { appendRow, deleteRow }
