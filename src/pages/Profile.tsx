import { Table } from "react-bootstrap";
import WithGuard from "../utils/WithGuard";

const Profile = () => {
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
          <td>Mark</td>
          <td>Mako</td>
        </tr>
      </tbody>
    </Table>
  );
};
const ProtectedProfile = WithGuard(Profile);
export default ProtectedProfile;
