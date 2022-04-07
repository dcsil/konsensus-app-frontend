import { getFiles } from 'api/fileFunctions';

import { useEffect, useState } from 'react';

import Header from 'components/Headers/Header.js';
import FileTable from 'components/File/FileTable.js';


const Recent = () => {
  // only re-renders when a state variable changes
  const [recentFiles, setRecentFiles] = useState([]);
  // useState() is to create state variables
  // parameter for useState is optional, here it's set to an empty list for when we wait for a request

  useEffect(() => {
    getFiles(
      '/file/recent',
      setRecentFiles
    );
  }, []);

  return (
    <>
      <Header />
      <FileTable files={recentFiles} />
    </>
  );
};

export default Recent;
