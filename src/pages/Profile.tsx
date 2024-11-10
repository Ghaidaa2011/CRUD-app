import { Table } from "react-bootstrap";
import WithGuard from "../utils/WithGuard";
import { useAppSelector } from "../app/hooks";

const Profile = () => {
  const profileInfo = useAppSelector((state) => state.auth.user);
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{profileInfo?.firstName}</td>
          <td>{profileInfo?.lastName}</td>
        </tr>
      </tbody>
    </Table>
  );
};
const ProtectedProfile = WithGuard(Profile);
export default ProtectedProfile;
