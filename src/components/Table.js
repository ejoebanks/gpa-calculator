import React, { useState, useEffect } from "react";
import Constants from '../Constants/Constants.js';

const Table = () => {
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const tableRow = [
    {
      id: count,
      course: <input name="course" className="form-control" placeholder="Course"/>,
      grade: <input id={"Grade_"}  name="course" className="form-control" placeholder="Grade" />,
      credithours: <input name="credithours" className="form-control" value=" " placeholder="Credit Hours" />,
      repeat: <input type="checkbox" className="btn_repeat" />,
      total: <input name="total" className="total form-control" readOnly id="total1" />
    }];
  useEffect(() => {
    getData();
    //Increment row count so the initial row isn't duplicated
    setCount(count + 1);
    }, [])

  const getData = () => {
    setRows(tableRow);
  }
    const renderHeader = () => {
      let headerElement = ['remove', 'course', 'grade', 'credits',
      'repeat', 'quality points']

      return headerElement.map((key, index) => {
        return <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
        })
       }

       const removeData = (id) => {
         const del = rows.filter(row => id !== row.id)
         setRows(del);
       }

       const addData = () => {
         let add = [];
         setCount(count + 1);
         if (rows.length < 8) {
           add = rows.concat(tableRow);
           setRows(add);
         } else {
           alert ("Course load is limited to 8");
         }
       }

       const appendRows = () => {
         let add = [];
         for (let i = 0; i <= 4; i++) {
           add = rows.concat(tableRow);
           setRows(add);
         }
       }


       const renderBody = () => {
           return rows && rows.map(({ id, course, repeat, credithours, grade, remove, total }) => {
               return (
                   <tr id={id} key={id}>
                       <td>{id > 0 ? <button type="button" name="remove" id=" " onClick={() => removeData(id)}class="btn_remove btn">X</button> : " "}</td>
                       <td>{course}</td>
                       <td>{grade}</td>
                       <td>{credithours}</td>
                       <td>{repeat}</td>
                       <td>{total}</td>
                   </tr>
               )
           })


       }

       const freset = () => {
         console.log(document.getElementById("myform"));
         document.getElementById("myform").reset();
       }



  return (
    <>
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
        {renderHeader()}
        </tr>
      </thead>
      <tbody>
        {renderBody()}
      </tbody>
    </table>
    <div className="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-secondary" onClick={() => addData()}>Add Row</button>
    </div>
    <div className="btn-group mr-2" role="group" aria-label="Second group">
      <button type="button" className="btn btn-secondary resetBtn" onClick={() => freset()}>Reset</button>
    </div>
    </>
  );
}

export default Table;
