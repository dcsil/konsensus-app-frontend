import { getSomeFiles } from 'components/Auth/authFunctions';

import { useEffect, useState } from 'react';

import Header from 'components/Headers/Header.js';
import FileTable from 'components/Files/FileTable.js';


const Recent = (props) => {
  // only re-renders when a state variable changes
  const [recentFiles, setRecentFiles] = useState([]);
  // useState() is to create state variables
  // parameter for useState is optional, here it's set to an empty list for when we wait for a request

  useEffect(() => {
    getSomeFiles(
      '/file/recent',
      setRecentFiles
    );
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <FileTable files={recentFiles} />
    </>
  );
};

export default Recent;
