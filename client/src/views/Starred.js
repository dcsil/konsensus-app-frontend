import { getStarredFiles } from 'components/Auth/authFunctions';
// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from 'reactstrap';

// core components
import { useEffect, useState, useContext } from 'react';

import Header from 'components/Headers/Header.js';
import FileCard from 'components/File/FileCard';
import FileRow from 'components/Files/FileRow.js';

const Starred = (props) => {
  const [starredFiles, setStarredFiles] = useState([]);
  
  useEffect(() => {
    getStarredFiles(setStarredFiles);
  }, []);

  return (

    // {starredFiles.map((fileId) => {
    //   return (
    //     <Col lg={{ size: 'auto' }}>
    //       <FileCard fileId={fileId} />
    //     </Col>
    //   );
    // })}

    
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7 pb-7" fluid>
        <Row>
          {starredFiles.map((file) => {
            return (
              <Col lg={{ size: 'auto' }}>
                <FileCard fileId={file.id} isStarred={true} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Starred;
