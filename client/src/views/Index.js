import { GlobalStateContext } from 'components/GlobalState';
import { getFiles } from 'components/Auth/authFunctions';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import { useEffect, useState, useContext } from 'react';

import Header from 'components/Headers/Header.js';
import FileCard from 'components/File/FileCard';

const Index = (props) => {
  const [ownedFiles, setOwnedFiles] = useState([]);
  const [recentFiles, setRecentFiles] = useState([]);
  const [starredFiles, setStarredFiles] = useState([]);

  const globalState = useContext(GlobalStateContext);
  useEffect(() => {
    getFiles(
      globalState.token,
      setOwnedFiles,
      setRecentFiles,
      setStarredFiles
    );
  }, []);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--8 pb-7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <p className="text-secondary font-weight-300">
              Suggested
            </p>
          </Col>
        </Row>
        <Row>
          {ownedFiles.map((fileId) => {
            return (
              <Col lg={{ size: 'auto' }}>
                <FileCard fileId={fileId} />
              </Col>
            );
          })}
        </Row>
        <Row className="pt-7">
          <Col className="mb-5 mb-xl-0" xl="8">
            <h3>All Files</h3>
          </Col>
        </Row>
        <Row>
          {ownedFiles.map((fileId) => {
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

export default Index;
