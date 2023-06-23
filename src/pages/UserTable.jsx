import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import UserTableRow from "../components/UserTableRow";

const UserTable = () => {
  const url = "https://vestire.onrender.com/users";
  const [dbUsers, setDbUsers] = useState([]);
  const [error, setError] = useState("");
  const isAdmin = async () => {
    if (localStorage.getItem("userToken")) {
      const token = localStorage.getItem("userToken");
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const resp = await axios.get(
          "https://vestire.onrender.com/users/check-user-admin",
          {
            headers,
          }
        );
        // if(resp)
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire(
        "Acceso denegado",
        "Debe ser administrador para ingresar",
        "error"
      );
      setTimeout(() => {
        location.href = "/";
      }, 2000);
    }
  };
  useEffect(() => {
    isAdmin();
  }, []);

  useEffect(() => {
    //setLoading(true);
    const getData = async () => {
      try {
        let endpoint = `${url}/get-users`;
        const resp = await axios.get(endpoint);
        setDbUsers(resp.data);
        setError("");
        //setLoading(false);
      } catch (error) {
        console.log(error.message);
        //setLoading(false);
        setError("Ha ocurrido un error, intente más tarde");
      }
    };
    getData();
  }, []);
  console.log(dbUsers);
  return (
    <>
      <h2 className="text-center">Listado de Usuarios Registrados</h2>
      <div className="container">
        <div class="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">NOMBRE DE USUARIO</th>
                <th scope="col">EMAIL</th>
                <th scope="col">ADMINISTRADOR</th>
                <th scope="col">HABILITADO</th>
                <th scope="col">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {dbUsers &&
                dbUsers.map((user) => (
                  <UserTableRow key={user._id} user={user} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
