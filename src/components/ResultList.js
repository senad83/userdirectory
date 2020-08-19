import React from "react";

function ResultList(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name<i class="fa fa-angle-double-down" aria-hidden="true"></i></th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>


        {props.results.map((user, index) => (
          <tr key={index}>
            <td><img alt={user.name.first} className="img-fluid" src={user.picture.thumbnail} /></td>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.dob.date}</td>
          </tr>

        ))}

      </tbody>
    </table>

  );
}

export default ResultList;
