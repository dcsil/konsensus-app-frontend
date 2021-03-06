import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip,
} from 'reactstrap';
import React, { createRef, useState } from 'react';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';
import Avatar from 'components/Profile/Avatar';
import ShareModal from 'components/Modals/ShareModal';
import UploadModal from 'components/Modals/UploadModal';
import { reuploadFile } from 'api/fileFunctions';
import StarFile from 'components/Star/Star';

const FileRow = (props) => {
  const isStarred = props.isStarred;
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [reuploadModalOpen, setReploadModalOpen] = useState(false);

  if (!props.file) {
    return;
  }
  const {
    id,
    size,
    updatedAt,
    collaborators,
  } = props.file;

  const toggleShareModal = () => {
    setShareModalOpen((data) => !data);
  };

  const toggleReuploadModal = () => {
    setReploadModalOpen((data) => !data);
  };

  const actions = [
    {
      name: 'Reupload',
      icon: 'fa fa-cloud-upload',
      color: '#000000',
      action: toggleReuploadModal,
    },
    {
      name: 'Check History',
      icon: 'fa fa-history',
      color: '#000000',
      action: null,
    },
    {
      name: 'Share',
      icon: 'fa fa-share',
      color: '#327C00',
      action: toggleShareModal,
    },
    {
      name: 'Delete',
      icon: 'fa fa-trash',
      color: '#9A0000',
      action: null,
    },
  ];

  return (
    <tr>
      <td>
        <StarFile file={id} isStarred={isStarred}/>
      </td>
      <th scope="row">
        <FileName {...props.file} />
      </th>

      <td>
        <span className="mb-0 text-sm">{size / 1000 + ' MB'}</span>
      </td>

      <td>
        <Collaborators collaborators={collaborators} />
      </td>
      
      <td>
        <Moment format="MMM DD/YYYY hh:mm" date={updatedAt} />
      </td>

      <td className="text-right">
        <ActionsDropdown actions={actions} />
      </td>

      <ShareModal
        isOpen={shareModalOpen}
        toggleOpen={toggleShareModal}
        title={'Add collaborators'}
        fileId={id}
      />
      <UploadModal
        isOpen={reuploadModalOpen}
        toggleOpen={toggleReuploadModal}
        title={'Reupload a File'}
        uploadMethod={(formData) => reuploadFile(formData, id)}
      />
    </tr>
  );
};

const FileName = ({ id, name, type, lastUpdater }) => {
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
    <Media className="align-items-center">
      <i className="ni ni-single-copy-04 text-primary pr-3" />
      <Media onClick={handleClick} style={{ cursor: 'pointer' }}>
        <span className="mb-0 text-sm">{name}</span>
      </Media>
    </Media>
  );
};

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
          <Avatar
            name={`${collaborator.firstName} ${collaborator.lastName}`}
            url={collaborator.image}
          />
        </a>

        <UncontrolledTooltip delay={0} target={ref}>
          {`${collaborator.firstName} ${collaborator.lastName}`}
        </UncontrolledTooltip>
      </React.Fragment>
    );
  };

  return (
    <div className="avatar-group">
      {collaborators &&
        collaborators.map((collaborator) =>
          renderAvatar(collaborator)
        )}
    </div>
  );
};

const ActionsDropdown = ({ actions }) => {
  const renderDropdownItem = (item) => {
    return (
      <DropdownItem
        key={item.name}
        style={{ color: item.color }}
        onClick={item.action}
      >
        <i className={item.icon} style={{ color: item.color }} />
        {item.name}
      </DropdownItem>
    );
  };

  return (
    <UncontrolledDropdown>
      <DropdownToggle
        className="btn-icon-only text-light"
        role="button"
        size="sm"
        color=""
        onClick={(e) => e.preventDefault()}
      >
        <i className="fas fa-ellipsis-v" />
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-arrow" right>
        {actions.map((item) => renderDropdownItem(item))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default FileRow;