import {
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    UncontrolledTooltip,
  } from 'reactstrap';
import React from "react";
// import { FileIcon } from 'react-file-icon';
import Moment from 'react-moment';

class FileRow extends React.Component{

  render () {
    return (
    <tr>
    <th scope="row">
      <Media className="align-items-center">
      <i className="ni ni-single-copy-04 text-primary pr-3" />
        {/* <FileIcon extension="docx"/> */}
        <Media>
          <span className="mb-0 text-sm">
            {this.props.fileInfo.name}
          </span>
        </Media>
      </Media>
    </th>
    <td>
      {/* {FileRow.size} */}
      <span className="mb-0 text-sm">
      {this.props.fileInfo.size  / 1000 + ' MB'}
      </span>
    </td>
    <td>
      <div className="avatar-group">
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip742438047"
          onClick={(e) => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={
              require('../../assets/img/theme/team-1-800x800.jpg')
                .default
            }
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip742438047"
        >
          Ryan Tompson
          {/* {this.props.fileInfo.collaborators[1]} */}
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip941738690"
          onClick={(e) => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={
              require('../../assets/img/theme/team-2-800x800.jpg')
                .default
            }
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip941738690"
        >
          Romina Hadid
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip804044742"
          onClick={(e) => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={
              require('../../assets/img/theme/team-3-800x800.jpg')
                .default
            }
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip804044742"
        >
          Alexander Smith
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip996637554"
          onClick={(e) => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={
              require('../../assets/img/theme/team-4-800x800.jpg')
                .default
            }
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip996637554"
        >
          Jessica Doe
        </UncontrolledTooltip>
      </div>
    </td>
    {/* <td>
      <div className="d-flex align-items-center">
        <span className="mr-2">{this.props.fileInfo.progress}</span>
        <div>
          <Progress
            max="100"
            value={this.props.fileInfo.progress}
            barClassName="bg-danger"
          />
        </div>
      </div>
    </td> */}
    <td>
      <Moment
      format="MMM DD/YYYY hh:mm"
      date={this.props.fileInfo.updatedAt}/>
      </td> 
    {/* TODO: need to format time */}
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
  )}
}
export default FileRow;

    


