import { Badge } from 'reactstrap';
import Avatar from 'components/Profile/Avatar';
import Moment from 'react-moment';

const AccessHistoryRow = ({ user, action, time }) => {
  return (
    <tr>
      <td>
        <div className="avatar-group">
          <a
            className="avatar avatar-sm"
            href="#pablo"
            id="tooltip742438047"
            onClick={(e) => e.preventDefault()}
          >
            <Avatar name={`${user.firstName} ${user.lastName}`} url={user.image}/>
          </a>
        </div>
      </td>
      <td>
        <span className="mb-0 text-sm">{`${user.firstName} ${user.lastName}`}</span>
      </td>
      <td>{user.role}</td>
      <td>{action}</td>
      <td>
        <Badge color="" className="badge-dot mr-4">
          <i className="bg-success" />
          secure
        </Badge>
      </td>

      <td>
        <Moment format="MMM DD/YYYY hh:mm" date={time} />
      </td>
    </tr>
  );
};

export default AccessHistoryRow;
