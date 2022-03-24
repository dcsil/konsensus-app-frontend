import React, { useState, useMemo } from "react";
import client from '../../axios';
import {
    Button,
    Modal,
} from "reactstrap";
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const UploadModal = (props) => {
    const { isOpen, toggleOpen } = props;

    return (
        <Modal
            className="modal-dialog-centered"
            isOpen={isOpen}
            toggle={toggleOpen}
        >
            <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                    Upload Files
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

            <StyledDropzone toggleOpen={toggleOpen}/>

        </Modal>
    )
}

// This needs to be a separate component so we can use the useDropzone hook
const StyledDropzone = (props) => {
    const [files, setFiles] = useState([]);
    const { toggleOpen } = props;

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone(
        {
            onDrop: acceptedFiles => {
                setFiles(acceptedFiles);
            }
        }
    );

    const upload = () => {
        if (!files) {
            return;
        }

        const formData = new FormData();
        formData.append('file', files[0]);

        client.post('http://localhost:8080/file/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    return (
        <div className="container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
                <h4>
                    <ul>{files && files.map(file => (
                        <li key={file.name}>
                            {file.name} - {file.size} bytes
                        </li>
                    ))}
                    </ul>
                </h4>
            </aside>

            {/* Something weird is happening with useState() in the Modal, the modal footer needs to be here TT */}
            <div className="modal-footer">
                <Button
                    color="secondary"
                    data-dismiss="modal"
                    type="button"
                    onClick={toggleOpen}
                >
                    Close
                </Button>
                <Button color="primary" type="button" onClick={upload}>
                    Upload
                </Button>
            </div>
        </div>
    );
}

export default UploadModal;
