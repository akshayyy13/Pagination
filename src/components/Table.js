import React from "react";
const Table = ({ records }) => {
  let v = false;
  return (
    <div className="card">
      <table data-testid="table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody data-testid="tableBody">
          {records.map((d, i) => {
            {/* console.log(records) */}
            return (
            <tr key={i}>
              <td> {d.country} </td>
              <td> {d.city} </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
