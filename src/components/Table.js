import React, { useState, useEffect } from "react";

const Table = () => {
  const [rows, setRows] = useState([]);
  const tableRow = [
    {
      id: rows.length,
      course: <input name="course" className="form-control" placeholder="Course"/>,
      grade: <input id={"Grade_"}  name="course" className="form-control" placeholder="Grade" />,
      credithours: <input name="credithours" className="form-control" value=" " placeholder="Credit Hours" />,
      repeat: <input type="checkbox" className="btn_repeat" />,
      total: <input name="total" className="total form-control" readOnly id="total1" />
    }];
  useEffect(() => {
    getData();
    }, [])

  const getData =  () => {
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

       const addData = (id) => {
         let add = [];
         if (rows.length < 8) {
           add = rows.concat(tableRow);
           setRows(add);
           alert(rows.length);
         } else {
           alert ("Course load is limited to 8");
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
    <button type="button" name="remove" id=" " onClick={() => addData()}class="btn_remove btn">X</button>
    </>
  );
}

export default Table;
