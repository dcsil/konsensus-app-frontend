import {
  getFiles,
} from 'api/fileFunctions';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import { useEffect, useState } from 'react';

import Header from 'components/Headers/Header.js';
import FileCard from 'components/File/FileCard';

const Index = (props) => {
  const [allFiles, setAllFiles] = useState([]);
  const [recentFiles, setRecentFiles] = useState([]);
  const [starredFiles, setStarredFiles] = useState([]);

  useEffect(() => {
    getFiles('/file/all', setAllFiles);
    getFiles('/file/recent', setRecentFiles);
    getFiles('/file/starred', setStarredFiles);
  }, []);

  return (
    <>
      <Header />
      <Container className="mt--8 pb-7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <p className="text-secondary font-weight-300">
              Suggested
            </p>
          </Col>
        </Row>
        <Row>
          <FileCards files={recentFiles} starredFiles={starredFiles}/>
        </Row>
        <Row className="pt-7">
          <Col className="mb-5 mb-xl-0" xl="8">
            <h3>All Files</h3>
          </Col>
        </Row>
        <Row>
          <FileCards files={allFiles} starredFiles={starredFiles}/>
        </Row>
      </Container>
    </>
  );
};

const FileCards = ({files, starredFiles}) => {
  const isFileStarred = (file) => {
    let isStarred = false;
    starredFiles.forEach((f) => {
      if (file.id === f.id) {
        isStarred = true;
      }
    });
    return isStarred;
  };

  return (
    <>
      {files.map((file) => {
        const isStarred = isFileStarred(file);
        return (
          <Col key={file.id} lg={{ size: 'auto' }}>
            <FileCard file={file} isStarred={isStarred} />
          </Col>
        );
      })}
    </>
  )
}

export default Index;
