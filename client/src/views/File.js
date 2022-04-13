import React, { useEffect, useContext } from 'react';

// reactstrap components
import { Container } from 'reactstrap';

// core components
import { useState } from 'react';

import Header from 'components/Headers/Header.js';
import { useHistory } from 'react-router-dom';
import ImageViewer from 'components/File/ImageViewer';
import Cookies from 'js-cookie';

import { getUserById } from 'api/userFunctions';
import { getFileById } from 'api/fileFunctions';
import {
  sendFileAction,
  getFileHistoryById,
} from 'api/smartContractFunctions';
import moment from 'moment';
const File = () => {
  let history = useHistory();
  const fileId = history.location.state.fileId;
  const fileName = history.location.state.name;
  const lastUpdater = history.location.state.lastUpdater;
  const [actions, setActions] = useState([]);
  const [file, setFile] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getFileById(fileId, setFile);
    getUserById(lastUpdater, setUser);

    const userId = Cookies.get('userId');
    const userRole = Cookies.get('userRole');
    const userName = Cookies.get('userName');

    // Pass in file, date, userId, action, role;
    userId &&
      sendFileAction(
        fileId,
        fileName,
        moment().format('MMM DD/YYYY hh:mmA'),
        userId,
        userName,
        'viewed',
        userRole
      );
    getFileHistoryById(fileId, setActions);
  }, []);

  return (
    <>
      <Header />
      <Container className="mt--7 pb-7" fluid>
        {file && (
          <ImageViewer file={file} actions={actions} user={user} />
        )}
      </Container>
    </>
  );
};

export default File;
