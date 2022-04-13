import { Table, Card, CardHeader } from 'reactstrap';
// core components
import AccessHistoryRow from './AccessHistoryRow';
import moment from 'moment';

// For some reason reversing in place gives me an error
function reverseArr(input) {
  var ret = [];
  for (var i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
}

const AccessHistoryTable = ({ file, actions, user }) => {
  const orderedActions = reverseArr(actions);
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
          {orderedActions.map((a) => {
            return (
              <AccessHistoryRow
                key={a.time}
                userName={a.userName}
                action={a.action}
                time={a.date}
                role={a.role}
              />
            );
          })}
          <AccessHistoryRow
            userName={`${user.firstName} ${user.lastName}`}
            action={'updated'}
            time={moment(file.updatedAt).format('MMM DD/YYYY hh:mmA')}
            role={user.role}
          />
          <AccessHistoryRow
            userName={`${user.firstName} ${user.lastName}`}
            action={'created'}
            time={moment(file.createdAt).format('MMM DD/YYYY hh:mmA')}
            role={user.role}
          />
        </tbody>
      </Table>
    </Card>
  );
};

export default AccessHistoryTable;
