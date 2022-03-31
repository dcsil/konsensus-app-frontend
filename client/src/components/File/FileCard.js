import React from 'react';
import { FileIcon, defaultStyles } from 'react-file-icon';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Row,
  Col,
  Container,
} from 'reactstrap';

import { useEffect, useState, useContext } from 'react';
import { GlobalStateContext } from 'components/GlobalState';
import { getFileById } from 'components/Auth/authFunctions';
import Moment from 'react-moment';
import FilePreviewerThumbnail from 'react-file-previewer';

const FileCard = ({ fileId }) => {
  const [file, setFile] = useState(null);

  console.log(fileId);

  const globalState = useContext(GlobalStateContext);
  useEffect(() => {
    getFileById(globalState.token, fileId, setFile);
  }, []);

  const fileTypeHelper = (fileName) => {
    const split = fileName.split('.');
    return split[1];
  };

  return (
    <>
      {file !== null && (
        <Card
          style={{
            width: '18rem',
            height: '8rem',
            cursor: 'pointer',
          }}
          // onClick={() => {
          //   window.open(file.url);
          // }}
        >
          <CardBody>
            {/* <FilePreviewerThumbnail
              style={{ objectFit: 'cover' }}
              hideControls={true}
              file={{
                url: file.url,
              }}
            /> */}
            <Row>
              <Col lg={{ size: 'auto' }}>
                <div style={{ width: '2.5rem' }}>
                  <FileIcon
                    extension={fileTypeHelper(file.name)}
                    {...defaultStyles[fileTypeHelper(file.name)]}
                  />
                </div>
              </Col>
              <Col>
                <CardTitle className="font-weight-bold mb-0">
                  {file.name}
                </CardTitle>
              </Col>
            </Row>
            <Row className="pt-2">
              <Col>
                <span className="h6 text-muted mb-0">
                  Last updated on{' '}
                  <Moment
                    format="MMM DD/YYYY hh:mm"
                    date={file.updatedAt}
                  />
                </span>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default FileCard;
