import FilePreviewer from 'react-file-previewer';
import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import OrgTable from 'components/Profile/OrgTable';
import AccessHistoryTable from './AccessHistoryTable';
import { getFileById } from 'components/Auth/authFunctions';

const ImageViewer = ({ fileUrl, fileId }) => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    getFileById(fileId, setActions);
  }, []);
  return (
    <div style={{ alignItems: 'left' }}>
      <Row>
        <Col>
          <FilePreviewer
            file={{
              url: fileUrl,
            }}
          />
        </Col>
        <Col>
          <AccessHistoryTable actions={[actions]} />
        </Col>
      </Row>
    </div>
  );
};

export default ImageViewer;
