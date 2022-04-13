import { Badge } from 'reactstrap';
import Avatar from 'components/Profile/Avatar';
import Moment from 'react-moment';

const AccessHistoryRow = ({ userName, action, time, role }) => {
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
      <td>{action}</td>
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
