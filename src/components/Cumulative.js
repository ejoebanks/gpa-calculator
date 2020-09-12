import React, { useState }  from "react";
import "./Cumulative.css";

export default function Cumulative() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="text-justify">

    <h3 className="togLabel">Calculate Cumulative GPA</h3>
    <label className="switch">

      <input id="cumulative_button" onClick={() => setShowText(!showText)} type="checkbox" />
      <span className="slider" />
    </label>
    <div className="App">
</div>

  {showText &&
    <div className="cu_block justify-content-center" id="cumulative_area">
      <div>
      <div className="col-3">
      </div>
        <div className="col-3">
          <input id="pastgpa" name="pastgpa" className="pastgpa form-control amount" placeholder="Cumulative GPA" />
          <span className="focus-border" />
        </div>

        <div className="col-3">
          <input id="credtaken" name="credtaken" className="credtaken form-control amount" placeholder="Credits Completed"  />
          <span className="focus-border" />
        </div>
        <div className="text-box">
        <hr/>
        <p>
          This allows you to calculate your cumulative GPA, which takes
          into account your past GPA and total credit hours and uses
          your current term to calculate your GPA.  You can find your
          current GPA and credit hours in WebAdvisor by using the
          "Grade Point Average by Term" link under the Academic
          Profile menu.
        </p>
        </div>
        <hr />
        <div className="cu_box" id="cu_box" />
        <h4><div id="cred_box" className="cred_box" /></h4>
      </div>
    </div>
  }
    </div>
 )
}
