import React, { useState } from 'react';
import Cumulative from './Cumulative.js';
import ResetForm from '../logic/ResetForm.js';
import * as C from '../logic/Calculation.js';
import Constants from '../Constants/Constants.js';
import { appendRow, deleteRow } from '../logic/AutomaticFunctions.js';
import Table from './Table';
import ButtonGroup from './ButtonGroup'


export default function CalculationForm() {
  function freset() {
    document.getElementById("myform").reset();
    console.log( Constants.termGPA );
}



  return (
    <div className="d-flex justify-content-center">
      <div id="term" className="tab-pane active">
        <form id="myform" name="myform">
          <div className="form-group">
          <Cumulative />
          <Table />
          <ButtonGroup />
            <div className="output_container">
              <div className="output_part">
                <h3>Term GPA</h3>
                <div id="show_box" className="show_box" >0.00</div>
              </div>
              <div className="output_part">
                <h3 className="output_header">Credits</h3>
                <div id="term_cred" className="term_cred">0.00</div>
              </div>
            </div>
            <br />
          </div>
          <div className="output_container">
            <h3>
              Have a goal to increase your GPA?
              Calculate your targetted GPA:
            </h3>
            <div className="row">
              <div className="col">
                <input id="targetgpa" name="targetgpa" placeholder="GPA Goal" className="targetgpa amount form-control" type="number" defaultValue />
              </div>
              <div className="col">
                <input id="credleft" className="credleft form-control amount" placeholder="Credits Remaining" type="number" defaultValue />
              </div>
              <div className="proj_box" id="proj_box" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
