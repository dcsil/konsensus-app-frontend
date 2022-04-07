import React, { useEffect } from 'react';

// reactstrap components
import { Container } from 'reactstrap';

// core components
import { useState } from 'react';

import Header from 'components/Headers/Header.js';
import { useHistory } from 'react-router-dom';
import ImageViewer from 'components/File/ImageViewer';

import { getUserById } from 'api/userFunctions';
import { getFileById } from 'api/fileFunctions';

const File = () => {
  let history = useHistory();
  const fileId = history.location.state.fileId;
  const lastUpdater = history.location.state.lastUpdater;
  const [actions, setActions] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getFileById(fileId, setActions);
    getUserById(lastUpdater, setUser);
  }, [fileId, lastUpdater]);

  return (
    <>
      <Header />
      <Container className="mt--7 pb-7" fluid>
        {actions && <ImageViewer actions={actions} user={user} /> }
      </Container>
    </>
  );
};

export default File;
