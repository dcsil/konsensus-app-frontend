import { useEffect, useState } from 'react';

import { getFiles } from 'api/fileFunctions';
import Header from 'components/Headers/Header.js';
import FileTable from 'components/File/FileTable.js';

const Starred = (isStarred) => {
  // only re-renders when a state variable changes
  const [starredFiles, setStarredFiles] = useState([]);
  // useState() is to create state variables
  // parameter for useState is optional, here it's set to an empty list for when we wait for a request

  useEffect(() => {
    getFiles(
      '/file/starred',
      setStarredFiles
    );
  }, []);

  return (
    <>
      <Header />
      <FileTable files={starredFiles} 
      isStarred={isStarred}/>
    </>
  );
};

export default Starred;
