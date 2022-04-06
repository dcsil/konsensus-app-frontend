import { Table, Card, CardHeader } from 'reactstrap';
// core components
import ActionRow from './ActionRow';

const AccessHistoryTable = ({ actions, user }) => {
  console.log(user);
  return (
    <Card className="bg-default shadow">
      <CardHeader className="bg-transparent border-0">
        <h3 className="text-secondary mb-0">Access History</h3>
      </CardHeader>
      <Table
        className="align-items-center table-dark table-flush pt-3"
        responsive
      >
        <thead className="thead-dark">
          <tr>
            <th scope="col" />
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
            <th scope="col">Status</th>
            <th scope="col">Time</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <ActionRow
            firstName={user ? user.firstName : ''}
            lastName={user ? user.lastName : ''}
            role={user ? user.role : ''}
            action={'updated'}
            time={actions[0].updatedAt}
          />
          <ActionRow
            firstName={user ? user.firstName : ''}
            lastName={user ? user.lastName : ''}
            role={user ? user.role : ''}
            action={'created'}
            time={actions[0].createdAt}
          />
        </tbody>
      </Table>
    </Card>
  );
};

export default AccessHistoryTable;
