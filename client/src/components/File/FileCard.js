import React from 'react';
import { FileIcon, defaultStyles } from 'react-file-icon';
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Badge,
} from 'reactstrap';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';
import StarFile from 'components/Star/Star.js';

const FileCard = ({ file, isStarred }) => {
  let history = useHistory();

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
          name: file.name,
        },
      });
    }
  };


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
              <StarFile file={file} 
              isStarred={isStarred}>
              </StarFile>
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
