import React from 'react';
import { FileIcon, defaultStyles } from 'react-file-icon';

// reactstrap components
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

import { useEffect, useState, useContext } from 'react';
import { getFileById } from 'components/Auth/authFunctions';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';

const FileCard = ({ fileId }) => {
  const [file, setFile] = useState(null);
  let history = useHistory();

  console.log(fileId);

  useEffect(() => {
    getFileById(fileId, setFile);
  }, [fileId]);

  const fileTypeHelper = (fileName) => {
    const split = fileName.split('.');
    return split[1];
  };

  const truncate = (text) => {
    return text.length > 35 ? text.substring(0, 32) + '...' : text;
  };

  const handleClick = () => {
    history.push({
      pathname: '/admin/file',
      state: { fileId: file.id, url: file.url },
    });
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
          onClick={() => {
            handleClick();
          }}
        >
          <CardBody>
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
                <CardTitle className="h4 font-weight-bold mb-0">
                  {truncate(file.name)}
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
