import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, Container, UncontrolledTooltip, Table } from 'reactstrap';
import { getCollaboratorsForFile, updateCollaboratorForFile } from 'api/permissionFunctions';
import Avatar from 'components/Profile/Avatar';

const ShareModal = (props) => {
    const { isOpen, toggleOpen, title, fileId } = props;

    const [collaborators, setCollaborators] = useState([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        getCollaboratorsForFile(props.fileId, setCollaborators);
    }, [props.fileId])

    const invite = () => {
        const params = {
            email: email,
            canView: true
        }
        updateCollaboratorForFile(fileId, params)
            .then(() => {
                getCollaboratorsForFile(props.fileId, setCollaborators);

            })
            .catch((error) => {
                console.log('error :>> ', error);
            });
    }

    return (
        <Modal
            className="modal-dialog-centered"
            isOpen={isOpen}
            toggle={toggleOpen}
        >
            <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                    {title}
                </h3>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={toggleOpen}
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>

            <Container fluid className="modal-body">
                <div className="form-inline align-items-center justify-content-between">
                    <Input
                        className="form-control-alternative flex-grow-1"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Button
                        color="primary"
                        data-dismiss="modal"
                        type="button"
                        onClick={invite}
                    >
                        Invite
                    </Button>
                </div>
                <br />
                <CollaboratorTable collaborators={collaborators} />
            </Container>

            <div className="modal-footer">
                <Button
                    color="secondary"
                    data-dismiss="modal"
                    type="button"
                    onClick={toggleOpen}
                >
                    Done
                </Button>
            </div>

        </Modal>
    );
};

const CollaboratorTable = ({ collaborators }) => {

    return (
        <Table>
            <tbody>
                {collaborators.map((collaborator) => (
                    <CollaboratorRow key={collaborator.userId} collaborator={collaborator} />
                ))
                }
            </tbody>

        </Table>
    )
}

const CollaboratorRow = ({ collaborator }) => {
    const getRole = () => {
        if (collaborator.isAdmin) {
            return 'Admin';
        }
        if (collaborator.canShare) {
            return 'Can Share';
        }
        if (collaborator.canEdit) {
            return 'Can Edit';
        }
        return 'Can View';
    }

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
                        <Avatar name={`${collaborator.firstName} ${collaborator.lastName}`} url={collaborator.image} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip742438047">
                        {collaborator.email}
                    </UncontrolledTooltip>
                </div>
            </td>
            <td>
                <span className="mb-0 text-sm">
                    {collaborator.firstName} {collaborator.lastName}
                </span>
            </td>
            <td>{getRole(collaborator)}</td>

            {/* <td className="text-right">
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
      </td> */}
        </tr>
    )
}

export default ShareModal;