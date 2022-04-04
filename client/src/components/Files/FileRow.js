import {
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Progress,
    UncontrolledTooltip,
  } from 'reactstrap';
import React from "react";


// function FileRow(props) {

//     // render() {
//         return (
          
//                 <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
//                         <i className="ni ni-single-copy-04 text-primary pr-3" />
//                         <Media>
//                           <span className="mb-0 text-sm">
//                             {props.fileInfo.filename}
//                             {/* {console.log(FileRow.name)} */}
//                           </span>
//                         </Media>
//                       </Media>
//                     </th>

//                     <td>
//                       {/* {FileRow.size} */}
//                       <span className="mb-0 text-sm">
//                       {props.fileInfo.filesize}
//                       </span>
//                     </td>
//                     <td>
//                       <Badge color="" className="badge-dot mr-4">
//                         <i className="bg-warning" />
//                         {/* {FileRow.status} */}
//                         {props.fileInfo.status}
//                       </Badge>
//                     </td>
//                     <td>
//                       <div className="avatar-group">
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip742438047"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           {/* <img
//                             alt="..."
//                             className="rounded-circle"
//                             src={
//                               require('../assets/img/theme/team-1-800x800.jpg')
//                                 .default
//                             }
//                           /> */}
//                         </a>
//                         <UncontrolledTooltip
//                           delay={0}
//                           target="tooltip742438047"
//                         >
//                           Ryan Tompson
//                         </UncontrolledTooltip>
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip941738690"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           {/* <img
//                             alt="..."
//                             className="rounded-circle"
//                             src={
//                               require('../assets/img/theme/team-2-800x800.jpg')
//                                 .default
//                             }
//                           /> */}
//                         </a>
//                         <UncontrolledTooltip
//                           delay={0}
//                           target="tooltip941738690"
//                         >
//                           Romina Hadid
//                         </UncontrolledTooltip>
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip804044742"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           {/* <img
//                             alt="..."
//                             className="rounded-circle"
//                             src={
//                               require('../assets/img/theme/team-3-800x800.jpg')
//                                 .default
//                             }
//                           /> */}
//                         </a>
//                         <UncontrolledTooltip
//                           delay={0}
//                           target="tooltip804044742"
//                         >
//                           Alexander Smith
//                         </UncontrolledTooltip>
//                         <a
//                           className="avatar avatar-sm"
//                           href="#pablo"
//                           id="tooltip996637554"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           {/* <img
//                             alt="..."
//                             className="rounded-circle"
//                             src={
//                               require('../assets/img/theme/team-4-800x800.jpg')
//                                 .default
//                             }
//                           /> */}
//                         </a>
//                         <UncontrolledTooltip
//                           delay={0}
//                           target="tooltip996637554"
//                         >
//                           Jessica Doe
//                         </UncontrolledTooltip>
//                       </div>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">60%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="60"
//                             barClassName="bg-danger"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                     <td>Mar 07 2022 06:42:57</td>
//                     <td className="text-right">
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu
//                           className="dropdown-menu-arrow"
//                           right
//                         >
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Action
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Another action
//                           </DropdownItem>
//                           <DropdownItem
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Something else here
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//         )} 
//         export default FileRow;


class FileRow extends React.Component{
  // constructor(props) {
  //   super(props);
  // } React does this constructor automatically. Don't need these lines
  render () {
    return (
    <tr>
    <th scope="row">
      <Media className="align-items-center">
        <i className="ni ni-single-copy-04 text-primary pr-3" />
        <Media>
          <span className="mb-0 text-sm">
            {this.props.fileInfo.filename}
            {/* {console.log(FileRow.name)} */}
          </span>
        </Media>
      </Media>
    </th>

    <td>
      {/* {FileRow.size} */}
      <span className="mb-0 text-sm">
      {this.props.fileInfo.filesize}
      </span>
    </td>
    <td>
      <Badge color="" className="badge-dot mr-4">
        <i className="bg-warning" />
        {/* {FileRow.status} */}
        {this.props.fileInfo.status}
      </Badge>
    </td>
    <td>
      <div className="avatar-group">
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip742438047"
          onClick={(e) => e.preventDefault()}
        >
          {/* <img
            alt="..."
            className="rounded-circle"
            src={
              require('../assets/img/theme/team-1-800x800.jpg')
                .default
            }
          /> */}
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip742438047"
        >
          Ryan Tompson
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip941738690"
          onClick={(e) => e.preventDefault()}
        >
          {/* <img
            alt="..."
            className="rounded-circle"
            src={
              require('../assets/img/theme/team-2-800x800.jpg')
                .default
            }
          /> */}
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
          {/* <img
            alt="..."
            className="rounded-circle"
            src={
              require('../assets/img/theme/team-3-800x800.jpg')
                .default
            }
          /> */}
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
          {/* <img
            alt="..."
            className="rounded-circle"
            src={
              require('../assets/img/theme/team-4-800x800.jpg')
                .default
            }
          /> */}
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip996637554"
        >
          Jessica Doe
        </UncontrolledTooltip>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <span className="mr-2">60%</span>
        <div>
          <Progress
            max="100"
            value="60"
            barClassName="bg-danger"
          />
        </div>
      </div>
    </td>
    <td>Mar 07 2022 06:42:57</td>
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
  </tr>)
  }
}
export default FileRow;



                  /* { <tr>
<th scope="row">
  <Media className="align-items-center">
    <i className="ni ni-single-copy-04 text-primary pr-3" />
    <Media>
      <span className="mb-0 text-sm">
        FileName.pdf
      </span>
    </Media>
  </Media>
</th>
<td>123.45 Gb</td>
<td>
  <Badge color="" className="badge-dot mr-4">
    <i className="bg-warning" />
    Warning
  </Badge>
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
          require('../assets/img/theme/team-1-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip742438047"
    >
      Ryan Tompson
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
          require('../assets/img/theme/team-2-800x800.jpg')
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
          require('../assets/img/theme/team-3-800x800.jpg')
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
          require('../assets/img/theme/team-4-800x800.jpg')
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
<td>
  <div className="d-flex align-items-center">
    <span className="mr-2">60%</span>
    <div>
      <Progress
        max="100"
        value="60"
        barClassName="bg-danger"
      />
    </div>
  </div>
</td>
<td>Mar 07 2022 06:42:57</td>
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
<tr>
<th scope="row">
  <Media className="align-items-center">
    <i className="ni ni-image text-primary pr-3" />
    <Media>
      <span className="mb-0 text-sm">
        Chibi_Julian.png
      </span>
    </Media>
  </Media>
</th>
<td>43.45 Gb</td>
<td>
  <Badge color="" className="badge-dot">
    <i className="bg-success" />
    completed
  </Badge>
</td>
<td>
  <div className="avatar-group">
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip746418347"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-1-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip746418347"
    >
      Ryan Tompson
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip102182364"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-2-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip102182364"
    >
      Romina Hadid
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip406489510"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-3-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip406489510"
    >
      Alexander Smith
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip476840018"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-4-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip476840018"
    >
      Jessica Doe
    </UncontrolledTooltip>
  </div>
</td>
<td>
  <div className="d-flex align-items-center">
    <span className="mr-2">100%</span>
    <div>
      <Progress
        max="100"
        value="100"
        barClassName="bg-success"
      />
    </div>
  </div>
</td>
<td>Feb 07 2022 12:42:57</td>
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
<tr>
<th scope="row">
  <Media className="align-items-center">
    <i className="ni ni-single-copy-04  text-primary pr-3" />
    <Media>
      <span className="mb-0 text-sm">
        CSC491_Assignment.pdf
      </span>
    </Media>
  </Media>
</th>
<td>2.45 Gb</td>
<td>
  <Badge color="" className="badge-dot mr-4">
    <i className="bg-danger" />
    delayed
  </Badge>
</td>
<td>
  <div className="avatar-group">
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip753056318"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-1-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip753056318"
    >
      Ryan Tompson
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip441753266"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-2-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip441753266"
    >
      Romina Hadid
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip188462246"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-3-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip188462246"
    >
      Alexander Smith
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip621168444"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-4-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip621168444"
    >
      Jessica Doe
    </UncontrolledTooltip>
  </div>
</td>
<td>
  <div className="d-flex align-items-center">
    <span className="mr-2">72%</span>
    <div>
      <Progress
        max="100"
        value="72"
        barClassName="bg-danger"
      />
    </div>
  </div>
</td>
<td>Jan 20 2022 10:30:57</td>
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
<tr>
<th scope="row">
  <Media className="align-items-center">
    <i className="ni ni-image text-primary pr-3" />
    <Media>
      <span className="mb-0 text-sm">
        Funny_Memes.pdf
      </span>
    </Media>
  </Media>
</th>
<td>3.45 Gb</td>
<td>
  <Badge color="" className="badge-dot">
    <i className="bg-info" />
    on schedule
  </Badge>
</td>
<td>
  <div className="avatar-group">
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip875258217"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-1-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip875258217"
    >
      Ryan Tompson
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip834416663"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-2-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip834416663"
    >
      Romina Hadid
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip372449339"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-3-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip372449339"
    >
      Alexander Smith
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip108714769"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-4-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip108714769"
    >
      Jessica Doe
    </UncontrolledTooltip>
  </div>
</td>
<td>
  <div className="d-flex align-items-center">
    <span className="mr-2">90%</span>
    <div>
      <Progress
        max="100"
        value="90"
        barClassName="bg-info"
      />
    </div>
  </div>
</td>
<td>Mar 07 2022 06:42:57</td>
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
<tr>
<th scope="row">
  <Media className="align-items-center">
    <i className="ni ni-single-copy-04  text-primary pr-3" />
    <Media>
      <span className="mb-0 text-sm">
        FileName.pdf
      </span>
    </Media>
  </Media>
</th>
<td>123.45 Gb</td>
<td>
  <Badge color="" className="badge-dot mr-4">
    <i className="bg-success" />
    completed
  </Badge>
</td>
<td>
  <div className="avatar-group">
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip664029969"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-1-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip664029969"
    >
      Ryan Tompson
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip806693074"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-2-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip806693074"
    >
      Romina Hadid
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip844096937"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-3-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip844096937"
    >
      Alexander Smith
    </UncontrolledTooltip>
    <a
      className="avatar avatar-sm"
      href="#pablo"
      id="tooltip757459971"
      onClick={(e) => e.preventDefault()}
    >
      <img
        alt="..."
        className="rounded-circle"
        src={
          require('../assets/img/theme/team-4-800x800.jpg')
            .default
        }
      />
    </a>
    <UncontrolledTooltip
      delay={0}
      target="tooltip757459971"
    >
      Jessica Doe
    </UncontrolledTooltip>
  </div>
</td>
<td>
  <div className="d-flex align-items-center">
    <span className="mr-2">100%</span>
    <div>
      <Progress
        max="100"
        value="100"
        barClassName="bg-success"
      />
    </div>
  </div>
</td>
<td>Mar 03 2022 06:42:57</td>
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
</tr> }*/
                
                /* <Table>
                <tbody>
                    <Row key={(file.name)}>
                    <Col component="th" scope="row">
                        {file.name}
                    </Col>

                    <Col component="th" scope="row">
                        {file.size}
                    </Col>

                    <Col component="th" scope="row">
                        {file.status}
                    </Col>

                    <Col component="th" scope="row">
                        {file.collaborators}
                    </Col>

                    <Col component="th" scope="row">
                        {file.completion}
                    </Col>

                    <Col component="th" scope="row">
                        {file.lastAccess}
                    </Col>
                    </Row>
                </tbody>
                </Table> */
            // </div>
    //     )
    // }
    


