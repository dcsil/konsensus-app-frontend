import React from 'react';
import { Table } from 'reactstrap';
// core components
import OrgRow from './OrgRow';

const OrgTable = ({ user }) => {
  return (
    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          <th scope="col" />
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        <OrgRow user={user} />
      </tbody>
    </Table>
  );
};

export default OrgTable;
