import { getFiles } from 'components/Auth/authFunctions';
import React from 'react';
import axios from 'axios';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import { useState } from 'react';

import Header from 'components/Headers/Header.js';
import { useHistory } from 'react-router-dom';
import ImageViewer from 'components/File/ImageViewer';

const File = () => {
  let history = useHistory();
  const fileId = history.location.state.fileId;
  const fileUrl = history.location.state.url;
  const fileName = history.location.state.name;

  return (
    <>
      <Header />
      <Container className="mt--7 pb-7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <h3 className="text-secondary">{fileName}</h3>
          </Col>
        </Row>
        <ImageViewer fileUrl={fileUrl} fileId={fileId} />
      </Container>
    </>
  );
};

export default File;
