import FilePreviewer from 'react-file-previewer';
import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import OrgTable from 'components/Profile/OrgTable';
import AccessHistoryTable from './AccessHistoryTable';
import { getFileById } from 'components/Auth/authFunctions';
import { getUserById } from 'components/Auth/authFunctions';
import { useHistory } from 'react-router-dom';

const ImageViewer = ({ actions, user }) => {
  const history = useHistory();
  const [tab, setTab] = useState('file');
  const fileName = history.location.state.name;
  const fileUrl = history.location.state.url;

  return (
    <div>
      <Row>
        <Col className="mb-5 mb-xl-0" xl="8">
          <h3 className="text-secondary">{fileName}</h3>
        </Col>
        <Button
          color="primary"
          className={tab === 'history' ? null : 'active'}
          size="sm"
          type="button"
          onClick={() => setTab('file')}
        >
          File View
        </Button>
        <Button
          color="primary"
          className={tab === 'file' ? null : 'active'}
          size="sm"
          type="button"
          onClick={() => setTab('history')}
        >
          Access History
        </Button>
      </Row>
      <div style={{ alignItems: 'center', paddingTop: '4px' }}>
        <Row>
          <Col>
            {tab === 'file' ? (
              <FilePreviewer
                style={{ width: '50px' }}
                file={{
                  url: fileUrl,
                }}
              />
            ) : (
              <AccessHistoryTable actions={[actions]} user={user} />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ImageViewer;
