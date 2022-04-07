/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
// core components
import UserHeader from 'components/Headers/UserHeader.js';
import { useEffect, useState } from 'react';
import OrgTable from 'components/Profile/OrgTable';
import Avatar from 'components/Profile/Avatar';
import { updateUser, checkSession, uploadProfilePicture } from 'api/userFunctions';

import UploadModal from 'components/Modals/UploadModal.js';

const Profile = () => {
  const [user, setUser] = useState({firstName: "", lastName: "", email: "", organization: {}});
  const [message, setMessage] = useState('');
  const [profilePictureModalOpen, setProfilePictureModalOpen] = useState(false);

  const [newFields, setNewFields] = useState({firstName: "", lastName: "", email: ""});

  useEffect(() => {
    checkSession(
      setUser
    );
  }, []);

  const handleUpdate = () => {

    updateUser(newFields, user.id)
      .then(isSuccess => {
        if (isSuccess) {
          setUser({
            ...user,
            firstName: newFields.firstName ? newFields.firstName : user.firstName,
            lastName: newFields.lastName ? newFields.lastName : user.lastName,
            email: newFields.email ? newFields.email : user.email,
          }
          );

          setMessage("Profile has been updated");
          setNewFields({firstName: "", lastName: "", email: ""});
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const toggleProfilePictureModal = () => {
    setProfilePictureModalOpen((data) => !data);
  };

  return (
    <>
      <UserHeader firstName={user.firstName} />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a
                      href="#upload-profile-picture"
                      onClick={toggleProfilePictureModal}
                    >
                      <Avatar name={`${user.firstName} ${user.lastName}`} url={user.image}/>
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">
                          {user.organization.name}
                        </span>
                        <span className="description">
                          {user.firstName} {user.lastName}
                        </span>
                      </div>
                    </div>
                  </div>
                </Row>
              </CardBody>
              <OrgTable
                user={user}
              />
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder={user.email}
                            type="email"
                            value={newFields.email}
                            onChange={(e) => setNewFields({...newFields, email: e.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder={user.firstName}
                            type="text"
                            value={newFields.firstName}
                            onChange={(e) => setNewFields({...newFields, firstName: e.target.value})}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder={user.lastName}
                            type="text"
                            value={newFields.lastName}
                            onChange={(e) => setNewFields({...newFields, lastName: e.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    {message ? (
                      <span className="text-warning">{message}</span>
                    ) : null}
                  </div>
                  <div className="pl-4">
                    <Button
                      className="my-4"
                      color="primary"
                      size="sm"
                      type="button"
                      onClick={() => handleUpdate()}
                    >
                      Update
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <UploadModal
          isOpen={profilePictureModalOpen}
          toggleOpen={toggleProfilePictureModal}
          title={"Upload a New Profile Picture"}
          uploadMethod={uploadProfilePicture}
        />
      </Container>
    </>
  );
};

export default Profile;
