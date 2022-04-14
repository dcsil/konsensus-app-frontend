import { Badge } from 'reactstrap';
import React from 'react';

import Avatar from 'components/Profile/Avatar';

const AccessHistoryRow = ({ userName, action, time, role }) => {
  if (!action) {
    return;
  }
  const actionColorMapping = (action) => {
    switch (action) {
      case 'viewed':
        return 'warning';
      case 'updated':
        return 'primary';
      case 'created':
        return 'success';
      default:
        return 'secondary';
    }
  };
  return (
    <tr>
      <td>
        <div className="avatar-group">
          <span className="avatar avatar-sm rounded-circle">
            <Avatar name={userName} />
          </span>
        </div>
      </td>
      <td>
        <span className="mb-0 text-sm">{userName}</span>
      </td>
      <td>{role}</td>
      <td>
        <Badge color={actionColorMapping(action)}>
          <span className="text-white">{action}</span>
        </Badge>
      </td>
      <td>
        <Badge color="" className="badge-dot mr-4">
          <i className="bg-success" />
          secure
        </Badge>
      </td>

      <td>{time}</td>
    </tr>
  );
};

export default AccessHistoryRow;
