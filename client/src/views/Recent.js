import { getFiles } from 'components/Auth/authFunctions';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import { useEffect, useState } from 'react';

import Header from 'components/Headers/Header.js';
import FileCard from 'components/File/FileCard';

const Recent = (props) => {
  const [ownedFiles, setOwnedFiles] = useState([]);
  const [recentFiles, setRecentFiles] = useState([]);
  const [starredFiles, setStarredFiles] = useState([]);

  useEffect(() => {
    getFiles(setOwnedFiles, setRecentFiles, setStarredFiles);
  }, []);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7 pb-7" fluid>
        <Row>
          {recentFiles.map((fileId) => {
            return (
              <Col lg={{ size: 'auto' }}>
                <FileCard fileId={fileId} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Recent;
