import { GlobalStateContext } from 'components/GlobalState';
import { getFiles } from 'components/Auth/authFunctions';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import { useEffect, useState, useContext } from 'react';

import Header from 'components/Headers/Header.js';
import FileCard from 'components/File/FileCard';

const Recent = (props) => {
  const [ownedFiles, setOwnedFiles] = useState([]);
  const [recentFiles, setRecentFiles] = useState([]);
  const [starredFiles, setStarredFiles] = useState([]);
  const dummyfiledata = [
    {filename: 'FileName.pdf', filesize: '123.45 Gb', status: 'Warning', collaborators: ['Ryan Tompson', 'Romina Hadid', 'Alexander Smith', 'Jessica Doe'], progress: '60%', timestamp: 'Apr 01 2022 06:42:57'}, 
    {filename: 'file2.docx', filesize: '43.45 Gb', status: 'Completed', collaborators: ['Felisha Keys','Draco Rico'], progress: '100%', timestamp: 'Apr 01 2022 04:10:41'}, 
    {filename: 'file3.ppt', filesize: '2.45 Gb', status: 'On Schedule', collaborators: ['Bella Hadid', 'Will Smith', 'Chris Rock'], progress: '80%', timestamp: 'Mar 27 2022 12:38:01'},
    {filename: 'file4.xls', filesize: '3.45 Gb', status: 'Completed', collaborators: ['Britney Spierres'], progress: '100%', timestamp: 'Mar 15 2022 14:25:13'},
    {filename: 'file5.txt', filesize: '123.45 Mb', status: 'Completed', collaborators: ['Bob Flenderson'], progress: '100%', timestamp: 'Feb 04 2022 08:42:45'}] 
  

  const globalState = useContext(GlobalStateContext);
  useEffect(() => {
    getFiles(
      globalState.token,
      setOwnedFiles,
      setRecentFiles,
      setStarredFiles
    );
  }, []);
// test 
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
