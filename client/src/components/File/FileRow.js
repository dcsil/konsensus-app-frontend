import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip,
} from 'reactstrap';
import React, { createRef } from "react";
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';
import Avatar from 'components/Profile/Avatar';

const FileRow = (props) => {
  const { id, name, size, updatedAt, lastUpdater, type, collaborators } = props.file;
  const history = useHistory();

  const handleClick = () => {
    if (type.includes('image')) {
      history.push({
        pathname: '/admin/file',
        state: {
          lastUpdater: lastUpdater,
          fileId: id,
          name: name,
        },
      });
    }
  };

  return (
    <tr onClick={handleClick} style={{ cursor: 'pointer' }}>
      <th scope="row">
        <Media className="align-items-center">
          <i className="ni ni-single-copy-04 text-primary pr-3" />
          {/* <FileIcon extension="docx"/> */}
          <Media>
            <span className="mb-0 text-sm">
              {name}
            </span>
          </Media>
        </Media>
      </th>
      <td>
        {/* {FileRow.size} */}
        <span className="mb-0 text-sm">
          {size / 1000 + ' MB'}
        </span>
      </td>
      <td>
        <Collaborators collaborators={collaborators} />
      </td>
      <td> <Moment
        format="MMM DD/YYYY hh:mm"
        date={updatedAt} />
      </td>
      <td className="text-right">
        <UncontrolledDropdown>
          <DropdownToggle
            className="btn-icon-only text-light"
            href="#pablo"
            role="button"
            size="sm"
            color=""
            onClick={(e) => e.preventDefault()}
          >
            <i className="fas fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu
            className="dropdown-menu-arrow"
            right
          >
            <DropdownItem
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Action
            </DropdownItem>
            <DropdownItem
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Another action
            </DropdownItem>
            <DropdownItem
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Something else here
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  )
}

const Collaborators = ({ collaborators }) => {

  const renderAvatar = (collaborator) => {
    const ref = createRef();

    return (
      <React.Fragment key={collaborator.id}>
        <a
          className="avatar avatar-sm"
          href={`${collaborator.firstName} ${collaborator.lastName}`}
          ref={ref}
          id={collaborator.id}
          onClick={(e) => e.preventDefault()}
        >
          <Avatar name={`${collaborator.firstName} ${collaborator.lastName}`} url={collaborator.image} />
        </a>

        <UncontrolledTooltip
          delay={0}
          target={ref}
        >
          {`${collaborator.firstName} ${collaborator.lastName}`}
        </UncontrolledTooltip>
      </React.Fragment>
    )
  }

  return (
    <div className="avatar-group">
      {collaborators.map(collaborator => renderAvatar(collaborator))}
    </div>
  )
}

export default FileRow;