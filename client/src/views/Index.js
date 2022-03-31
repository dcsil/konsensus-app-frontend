import {
  getAllFiles,
  getRecentFiles,
} from 'components/Auth/authFunctions';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import { useEffect, useState, useContext } from 'react';

import Header from 'components/Headers/Header.js';
import FileCard from 'components/File/FileCard';

const Index = (props) => {
  const [allFiles, setAllFiles] = useState([]);
  const [recentFiles, setRecentFiles] = useState([]);

    useEffect(() => {
    getAllFiles(setAllFiles);
    getRecentFiles(setRecentFiles);
  }, []);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--8 pb-7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <p className="text-secondary font-weight-300">
              Suggested
            </p>
          </Col>
        </Row>
        <Row>
          {recentFiles.map((file) => {
            return (
              <Col lg={{ size: 'auto' }}>
                <FileCard fileId={file.id} />
              </Col>
            );
          })}
        </Row>
        <Row className="pt-7">
          <Col className="mb-5 mb-xl-0" xl="8">
            <h3>All Files</h3>
          </Col>
        </Row>
        <Row>
          {allFiles.map((file) => {
            return (
              <Col lg={{ size: 'auto' }}>
                <FileCard fileId={file.id} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Index;
