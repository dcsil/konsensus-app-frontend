import { Badge } from 'reactstrap';
import Avatar from 'components/Profile/Avatar';

const AccessHistoryRow = ({ userName, action, time, role }) => {
  const actionColorMapping = (action) => {
    switch (action) {
      case 'viewed':
        return 'warning';
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
        <Badge color={actionColorMapping(action)} className="mr-4">
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
