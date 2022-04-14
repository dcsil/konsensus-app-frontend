/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{' '}
            <a
              className="font-weight-bold ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Konsensus
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
