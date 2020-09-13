import React, { useState }  from "react";
import Constants from '../Constants/Constants.js';

function AddRow(event) {
  let inputgroups = [];
  let i = document.getElementById('#0');
  console.log(i);
}

function freset() {
  document.getElementById("myform").reset();
  console.log( Constants.termGPA );
}

export default function ButtonGroup() {

  return (
    <div className="d-flex justify-content-center">
    <div className="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-secondary" onClick={AddRow}>Add Row</button>
    </div>
    <div className="btn-group mr-2" role="group" aria-label="Second group">
      <button type="button" className="btn btn-secondary resetBtn" onClick={freset}>Reset</button>
    </div>
    </div>

 )
}
