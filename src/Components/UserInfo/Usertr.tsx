import { Link, useNavigate } from "react-router-dom";

export default function Usertr(props: any) {
  let navigate = useNavigate();
  let { user, handleShow } = props;
  return (
    <>
      <tr className="bg-white  border ">
        <td className="p-3">
          <img
            className="img-fluid rounded"
            width={"40"}
            src={user.image}
            alt={user.firstName}
          />
        </td>
        <td>
          {user.firstName} {"    "}
          {user.lastName}
        </td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td className="text-capitalize">{user.gender}</td>
        <td>{user.birthDate}</td>
        <td>
          <span
            className="mx-3"
            onClick={() => navigate(`/dashboard/userdata/${user.id}`)}
          >
            <i className="bi bi-pencil text-yellow"></i>
          </span>
          <Link onClick={() => handleShow(user)} to="#">
            <i className="bi bi-trash3 text-yellow"></i>
          </Link>
        </td>
      </tr>
    </>
  );
}
