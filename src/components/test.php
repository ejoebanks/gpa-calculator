<div className="d-flex justify-content-center">
  <div id="term" className="tab-pane active">
    <form id="myform" name="myform">
      <div className="form-group">
      <Cumulative />
        <table id="t1" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th style={{width: '5%'}} scope="col"><div className="defo">Remove<span className="defotext">Remove an added course.</span></div></th>
              <th style={{width: '20%'}} scope="col"><div className="defo">Course<span className="defotext">The name of the course.  For example, Math1010.</span></div></th>
              <th style={{width: '20%'}} scope="col"><div className="defo">Anticipated Grade<span className="defotext">The grade you expect to achieve in the course.</span></div></th>
              <th style={{width: '15%'}} scope="col"><div className="defo">Credits<span className="defotext">The amount of credit hours of the course.</span></div></th>
              <th><div className="defo">Repeat<span className="defotext">Check the box if you have previously taken this course.</span></div></th>
              <th style={{width: '20%'}} scope="col"><div className="defo">Quality Points<span className="defotext">This is determined by multiplying the amount of credit hours and the value of the grade.</span></div></th>
            </tr>
          </thead>
          <tbody>
          <tr className="item">
              <td>
              </td>
              <td><input name="course" className="form-control" value='' placeholder="Class Name" /></td>
              <td>
                <select id="currentgrade" className="currentgrade amount form-control">
                  <option id="def1" value="default">Grade</option>
                  <option value={4}>A</option>
                  <option value={3}>B</option>
                  <option value={2}>C</option>
                  <option value={1}>D</option>
                  <option value={0}>F</option>
                  <option value={0}>NCR</option>
                  <option value={100}>I</option>
                  <option value={100}>W</option>
                  <option value={100}>X</option>
                  <option value={100}>CR</option>
                </select>
              </td>
              <td>
                <select id="credithours" className="credithours amount form-control">
                  <option id="def2" value="default" defaultValue>Hours</option>
                  <option value=".5">.5</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                </select>
              </td>
              <td className="repeat_options">
                <input type="checkbox" className="btn_repeat" id={0} />
                <select id="g0" className="previousgrade amount grds form-control" />
              </td>

              <td><input name="total" className="total form-control" id="total1" /></td>
            </tr>
          </tbody></table>
          <div className="d-flex justify-content-center">
          <div className="btn-group mr-2" role="group" aria-label="Second group">
          <button rel="1" onClick='{this.appendRow.bind(this)}'>
            Add row
          </button>
          </div>
          <div className="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" className="btn btn-secondary resetBtn" onClick={freset}>Reset</button>
          </div>
          </div>
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


<tr key={i}>
  <td id={i}></td>
  <td><input id={i} name="course" className="form-control" value='' placeholder="Class Name"/>{i}</td>
  <td><input id={i}  name="course" className="form-control" value='' placeholder="Grade" />{i}</td>
  <td><input id={i}  name="course" className="form-control" value='' placeholder="Credit Hours" />{i}</td>
  <td><input type="checkbox" className="btn_repeat" id={i} />{i}</td>
  <td><input id={i} name="total" className="total form-control" id="total1" />{i}</td>
</tr>
