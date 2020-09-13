import React, { useState } from "react";
import termGPA from './Calculation.js';


export default function ResetForm() {
  function freset() {
    document.getElementById("myform").reset();
    console.log({ termGPA });
}

  return (
    <div className="btn-group mr-2" role="group" aria-label="Second group">
      <button type="button" className="btn btn-secondary resetBtn" onClick={freset}>Reset</button>
    </div>
  );
}
