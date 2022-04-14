import React from 'react';

import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  UncontrolledTooltip,
} from 'reactstrap';
import Avatar from './Avatar';
// core components

const OrgRow = ({ user }) => {
  return (
    <tr>
      <td>
        <div className="avatar-group">
          <a
            className="avatar avatar-sm"
            href="#org-row"
            id="tooltip742438047"
            onClick={(e) => e.preventDefault()}
          >
            {user && (
              <Avatar
                name={`${user.firstName} ${user.lastName}`}
                url={user.image}
              />
            )}
          </a>
          <UncontrolledTooltip delay={0} target="tooltip742438047">
            {user && user.email}
          </UncontrolledTooltip>
        </div>
      </td>
      <td>
        <span className="mb-0 text-sm">
          {user && user.firstName} {user && user.lastName}
        </span>
      </td>
      <td>{user && user.role}</td>

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
