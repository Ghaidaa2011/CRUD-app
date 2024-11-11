import { Table } from "react-bootstrap";
import WithGuard from "../utils/WithGuard";
import { useAppSelector } from "../app/hooks";

const Profile = () => {
  const profileInfo = useAppSelector((state) => state.auth);
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{profileInfo?.user?.firstName}</td>
          <td>{profileInfo?.user?.lastName}</td>
          <td>{profileInfo?.user?.email}</td>
        </tr>
      </tbody>
    </Table>
  );
};
const ProtectedProfile = WithGuard(Profile);
export default ProtectedProfile;
