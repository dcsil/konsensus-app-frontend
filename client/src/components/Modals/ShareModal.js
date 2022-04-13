import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, Container, UncontrolledTooltip, Table } from 'reactstrap';
import Select from 'react-select';
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
                <CollaboratorTable collaborators={collaborators} setCollaborators={setCollaborators} />
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

const CollaboratorTable = ({ collaborators, setCollaborators }) => {

    return (
        <Table>
            <tbody>
                {collaborators.map((collaborator) => (
                    <CollaboratorRow key={collaborator.userId} collaborator={collaborator} setCollaborators={setCollaborators} />
                ))
                }
            </tbody>

        </Table>
    )
}

const CollaboratorRow = ({ collaborator, setCollaborators }) => {
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
                <span className="text-sm align-middle">
                    {collaborator.firstName} {collaborator.lastName}
                </span>
            </td>
            <td>
                <ChangeRoleDropdown collaborator={collaborator} setCollaborators={setCollaborators}/>
            </td>
        </tr>
    )
}

const ChangeRoleDropdown = ({ collaborator, setCollaborators }) => {

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

    const changeRole = (role) => {
        console.log('collaborator :>> ', collaborator);
        const params = {
            email: collaborator.email,
            canEdit: false,
            canShare: false,
        }
        switch (role) {
            case 'Can Share':
                params.canView = true;
                params.canEdit = true;
                params.canShare = true;
                break;
            case 'Can Edit':
                params.canView = true;
                params.canEdit = true;
                break;
            case 'Can View':
                params.canView = true;
                break;
            default:
                break;
        }
        updateCollaboratorForFile(collaborator.fileId, params)
            .then(() => {
                getCollaboratorsForFile(collaborator.fileId, setCollaborators);
            })
            .catch((error) => {
                console.log('error :>> ', error);
            });
    }

    const options = [
        { value: 'Can Share', label: 'Can Share' },
        { value: 'Can Edit', label: 'Can Edit' },
        { value: 'Can View', label: 'Can View' }
      ]

    return (
        <Select options={options} onChange={(e) => changeRole(e.value)} defaultValue={getRole()} value={getRole()} isSearchable={false} placeholder={getRole()}/>
    )
}

export default ShareModal;