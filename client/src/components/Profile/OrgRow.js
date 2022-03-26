import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  UncontrolledTooltip,
} from 'reactstrap';
import Avatar from './Avatar';
// core components

const OrgRow = ({ firstName, lastName, email, role }) => {
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
            <Avatar name={`${firstName} ${lastName}`} />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip742438047">
            {email}
          </UncontrolledTooltip>
        </div>
      </td>
      <td>
        <span className="mb-0 text-sm">
          {firstName} {lastName}
        </span>
      </td>
      <td>{role}</td>

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
          <DropdownMenu className="dropdown-menu-arrow" right>
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
  );
};

export default OrgRow;
