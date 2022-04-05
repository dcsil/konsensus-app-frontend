import { getFiles } from 'components/Auth/authFunctions';
import React, { useEffect } from 'react';
import axios from 'axios';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import { useState } from 'react';

import Header from 'components/Headers/Header.js';
import { useHistory } from 'react-router-dom';
import ImageViewer from 'components/File/ImageViewer';
import { getFileById } from 'components/Auth/authFunctions';
import { getUserById } from 'components/Auth/authFunctions';

const File = () => {
  let history = useHistory();
  const fileId = history.location.state.fileId;
  const fileUrl = history.location.state.url;
  const fileName = history.location.state.name;
  const lastUpdater = history.location.state.lastUpdater;

  const [actions, setActions] = useState([]);
  const [user, setUser] = useState(null);
  console.log(lastUpdater);
  useEffect(() => {
    getFileById(fileId, setActions);
    getUserById(lastUpdater, setUser);
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7 pb-7" fluid>
        <ImageViewer actions={actions} user={user} />
      </Container>
    </>
  );
};

export default File;
