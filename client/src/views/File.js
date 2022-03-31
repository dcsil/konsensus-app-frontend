import { getFiles } from 'components/Auth/authFunctions';
import React from 'react';
import FilePreviewer from 'react-file-previewer';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import { useEffect, useState } from 'react';

import Header from 'components/Headers/Header.js';
import FileCard from 'components/File/FileCard';
import { useHistory, useParams } from 'react-router-dom';

const File = () => {
  let history = useHistory();
  const { fileId, url } = history.location.state;
  console.log(fileId);
  // const [ownedFiles, setOwnedFiles] = useState([]);
  // const [recentFiles, setRecentFiles] = useState([]);
  // const [starredFiles, setStarredFiles] = useState([]);

  // useEffect(() => {
  //   getFiles(setOwnedFiles, setRecentFiles, setStarredFiles);
  // }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7 pb-7" fluid>
        <FilePreviewer
          file={{
            url: url,
          }}
        />
      </Container>
    </>
  );
};

export default File;
