import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';


const FreelancerProfiles = () => {
  return (
    <section className="section-lg bg-gradient-info text-white py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="12">
            <h2 className="text-white mb-4">My Freelancer Profiles</h2>
            <Row>
              <Col lg="4" className="mb-4">
                <Card className="profile-card  shadow rounded">
                  <CardBody>
                    <CardTitle tag="h5" className="profile-title">Upwork</CardTitle>
                    <CardText className="profile-text text-dark">
                      Explore my freelance projects and client reviews on Upwork.
                    </CardText>
                    <Button color="primary" className="profile-button" href="https://www.upwork.com/freelancers/~01f5e085fce3ca17bd?mp_source=share" target="_blank">
                      View Profile
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" className="mb-4">
                <Card className="profile-card  shadow rounded">
                  <CardBody>
                    <CardTitle tag="h5" className="profile-title">Fiverr</CardTitle>
                    <CardText className="profile-text text-dark">
                      Check out my services and gigs on Fiverr.
                    </CardText>
                    <Button color="primary" className="profile-button" href="https://www.fiverr.com/princelee515" target="_blank">
                      View Profile
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" className="mb-4">
                <Card className="profile-card  shadow rounded">
                  <CardBody>
                    <CardTitle tag="h5" className="profile-title">Freelancer</CardTitle>
                    <CardText className="profile-text text-dark">
                      Find my freelance work and reviews on Freelancer.
                    </CardText>
                    <Button color="primary" className="profile-button" href="https://www.freelancer.com/u/agxcash" target="_blank">
                      View Profile
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FreelancerProfiles;
