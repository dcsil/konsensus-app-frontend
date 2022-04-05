import React from 'react';
import { FileIcon, defaultStyles } from 'react-file-icon';
import { BsStar, BsStarFill } from 'react-icons/bs';

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Badge,
} from 'reactstrap';

import { useEffect, useState, useContext } from 'react';
import { getFileById, starFile} from 'components/Auth/authFunctions';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';

const FileCard = ({ fileId, isStarred }) => {
  const [file, setFile] = useState(null);
  let history = useHistory();
  useEffect(() => {
    getFileById(fileId, setFile);
  }, [fileId]);

  const fileTypeHelper = (fileName) => {
    const split = fileName.split('.');
    return split[1];
  };

  const truncate = (text) => {
    return text.length > 33 ? text.substring(0, 30) + '...' : text;
  };

  const handleClick = () => {
    if (file.type.includes('image')) {
      history.push({
        pathname: '/admin/file',
        state: {
          lastUpdater: file.lastUpdater,
          fileId: file.id,
          url: file.url,
          name: file.name,
        },
      });
    }
  };

  const handleStar = () => {
    starFile(file.id);
    window.location.reload();
  };

  // const handleClick = () => {
  //   history.push({
  //     pathname: '/admin/file',
  //     state: { fileId: file.id, url: file.url },
  //   });
  // };

  return (
    <>
      {file !== null && (
        <Card
          style={{
            width: '16rem',
            height: '8rem',
            cursor: 'pointer',
            margin: '2px',
          }}
          onClick={() => {
            handleClick();
          }}
        >
          <CardBody>
            <Row>
              <Col
                lg={{ size: 'auto' }}
                onClick={() => {
                  handleClick();
                }}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ width: '2.5rem' }}>
                  <FileIcon
                    extension={fileTypeHelper(file.name)}
                    {...defaultStyles[fileTypeHelper(file.name)]}
                  />
                </div>
              </Col>
              <Col>
                <CardTitle className="h5 font-weight-bold mb-0">
                  {truncate(file.name)}
                </CardTitle>
              </Col>
              <Col className="mr--3 mt--3" lg={{ size: 'auto' }}>
                {isStarred ? (
                  <BsStarFill
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleStar()}
                  />
                ) : (
                  <BsStar
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleStar()}
                  />
                )}
              </Col>
            </Row>
            <Row className="pt-2">
              <Col>
                <Badge color="" className="badge-dot ">
                  <i className="bg-success" />
                </Badge>
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
