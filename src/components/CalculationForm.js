import React from 'react';

function CalculationForm() {
  return (
    <div class="d-flex justify-content-center">
      <h2>Term Calculation</h2>
      <hr />
      <div id="term" className="tab-pane active">
        <form id="myform" name="myform">
          <div className="form-group">
            <h3 className="togLabel">Calculate Your New Cumulative GPA</h3>
            <label className="switch">
              <input id="cumulative_button" onclick="toggler(this.id)" type="checkbox" />
              <span className="slider" />
            </label>
            <div className="cumulative" id="cumulative">
              <div id="cu_pr_inputs">
                <div className="col-3">
                  <h5>Current Cumulative GPA</h5>
                  <input id="pastgpa" name="pastgpa" className="pastgpa form-control amount" placeholder="Cumulative GPA" defaultValue />
                  <span className="focus-border" />
                </div>
                <div className="col-3">
                  <h5>Credits Completed</h5>
                  <input id="credtaken" name="credtaken" className="credtaken form-control amount" placeholder="Credits Completed" defaultValue />
                  <span className="focus-border" />
                </div>
                <h1 className="descript">
                  This allows you to calculate your cumulative GPA, which takes
                  into account your past GPA and total credit hours and uses
                  your current term to calculate your GPA.  You can find your
                  current GPA and credit hours in WebAdvisor by using the
                  "Grade Point Average by Term" link under the Academic
                  Profile menu.
                </h1>
                <hr />
                <div className="cu_box" id="cu_box" />
                <h4><div id="cred_box" className="cred_box" /></h4>
              </div>
            </div>
            <table id="t1" className="table table-bordered">
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
              <tbody><tr className="item">
                  <td>
                  </td>
                  <td><input name="course" className="form-control" defaultValue placeholder="Class Name" /></td>
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
                      <option id="def2" value="default" selected>Hours</option>
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
                  <td><input name="total" className="total form-control" id="total1" defaultValue readOnly="readonly" /></td>
                </tr>
              </tbody></table>
            <div className="form-actions">
              <input type="button" defaultValue="Add Course" className="btn btn-success addRow" />
              <input type="reset" defaultValue="Reset Fields" onclick="resetform()" className="btn btn-success" />
            </div>
            <div className="output_container">
              <div className="output_part">
                <h3 className="output_header">Term GPA</h3>
                <div id="show_box" className="show_box">0.00</div>
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
              Calculate your goal Cumulative GPA:
            </h3>
            <div id="cu_pr_inputs">
              <div className="col-3">
                <input id="targetgpa" name="targetgpa" placeholder="GPA Goal" className="targetgpa amount form-control" type="number" defaultValue />
              </div>
              <div className="col-3">
                <input id="credleft" className="credleft form-control amount" placeholder="Credits Remaining" type="number" defaultValue />
              </div>
              <hr />
              <h4><div className="proj_box" id="proj_box" /></h4>
            </div>
          </div>
        </form>
      </div>
      <br />
      <div className="wrapper center-block">
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading active" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Undergraduate Grading System - Letter Grades
                </a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
                A (4 quality points per semester hour) Denotes performance that consistently
                exceeds expectations and demonstrates comprehensive understanding of the
                subject.
                <br /><br />
                B (3 quality points per semester hour) Denotes performance that meets
                and at times exceeds expectations and indicates good preparation in the subject.
                <br /><br />
                C (2 quality points per semester hour) Denotes performance that meets
                expectations and demonstrates adequate preparation in the subject.
                <br /><br />
                D (1 quality point per semester hour) Denotes performance that is
                inadequate or inconsistently meets expectations and makes it inadvisable
                to proceed further in the subject without additional work.
                <br /><br />
                F (0 quality points per semester hour) Failure. Denotes performance that
                consistently fails to meet expectations.
                <br /><br />
                CR (quality points not calculated in grade point average) Pass. Denotes pass
                with credit at least at the level of “C” work, in courses that are graded
                CR/NCR.
                <br /><br />
                NCR (0 quality points per semester hour) No credit. Denotes work that
                fails to meet college or university standards for academic performance at least at the level of “C” work.
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Graduate Grading System - Letter Grades
                </a>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body">
                A  (4 quality points per semester hour) Excellent. Denotes work that
                is consistently at the highest level of achievement in a graduate
                college or university course.
                <br /><br />
                B  (3 quality points per semester hour) Good. Denotes work that
                consistently meets the high level of college or university standards
                for academic performance in a graduate college or university course.
                <br /><br />
                C  (2 quality points per semester hour) The lowest passing grade. Denotes
                work that does not meet in all respects college or university standards
                for academic performance in a graduate college or university course.
                <br /><br />
                F  (0 quality points per semester hour) Failure. Denotes work that
                fails to meet graduate college or university standards for academic
                performance in a course.
                <br /><br />
                CR  (Quality points are not calculated in grade point average) Pass.
                Denotes pass with credit at least at the level of “C” work, in graduate
                courses that are graded CR/NCR.
                <br /><br />
                NCR (0 quality points per semester hour) No credit. Denotes work that
                fails to meet graduate college or university standards for academic performance at least at the level of “C” work.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculationForm
