import React from 'react';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';

const FileCard = () => {
  return (
    <>
      <Card style={{ width: '18rem', height: '8rem' }}>
        <CardImg
          alt="..."
          style={{ maxHeight: '6rem', objectFit: 'cover' }}
          src={require('assets/img/theme/chibi_julian.png').default}
          top
        />
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle className="text-uppercase text-muted mb-0">
                Total traffic
              </CardTitle>
              <span className="h2 font-weight-bold mb-0">
                350,897
              </span>
            </div>
            <Col className="col-auto">
              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                <i className="fas fa-chart-bar" />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default FileCard;
