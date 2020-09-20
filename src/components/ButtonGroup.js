import React, { useState }  from "react";
import Constants from '../Constants/Constants.js';
import Table from './Table.js';

function freset() {
  document.getElementById("myform").reset();
  console.log( Constants.termGPA );
}


export default function ButtonGroup() {

  const [count, setCount] = useState(null);
  const row = [];

  for (var i = 0; i < count; i += 1) {
    row.push(<div key={i}>FFFFFFFFAAAAAAAAAA</div>);
  };

  return (
    <div className="d-flex justify-content-center">
    {row}
    <div className="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-secondary" onClick={() => setCount(count + 1)}>Add Row</button>
    </div>
    <div className="btn-group mr-2" role="group" aria-label="Second group">
      <button type="button" className="btn btn-secondary resetBtn" onClick={freset}>Reset</button>
    </div>
    </div>

 );

}
