import { Badge } from 'reactstrap';
import Avatar from 'components/Profile/Avatar';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { getUserById } from 'components/Auth/authFunctions';

// core components

const ActionRow = ({ lastUpdater, action, time }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    role: '',
  });
  console.log(lastUpdater);
  useEffect(() => {
    getUserById(lastUpdater, setUser);
  }, []);

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
            <Avatar name={`${user.firstName} ${user.lastName}`} />
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

export default ActionRow;