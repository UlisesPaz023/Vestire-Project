import React from "react";

const UserTableRow = ({ user }) => {
  const { username, email, admin, disable } = user;
  console.log(user);
  return (
    <>
      <tr>
        <td>{username}</td>
        <td>{email}</td>
        <td>{admin ? "Sí" : "No"}</td>
        <td>{disable}</td>
        <td>
          <div className="d-flex">
            <button className="btn btn-warning btn-sm me-2">Editar</button>
            <button className="btn btn-danger btn-sm">Eliminar</button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserTableRow;
