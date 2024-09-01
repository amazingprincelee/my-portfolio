import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container>
        <Row className="align-items-center">
          <Col lg="4" className="text-center text-lg-left mb-4 mb-lg-0">
            <img
              src={avatar_url}
              style={{ width: '200px' }}
              alt="Profile"
              className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
            />
            <h2 className="text-white">Prince Lee Nna</h2>
            <p className="text-white">{bio}</p>
          </Col>
          <Col lg="4" className="text-center mb-4 mb-lg-0">
            <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
              <i className="ni ni-pin-3 text-info mr-2" />
              {location}
            </div>
            <p className="text-white">Location: {location}</p>
          </Col>
          <Col lg="4" className="text-center text-lg-right">
            <SocialLinks />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="text-white mb-0">&copy; {new Date().getFullYear()} Prince Lee Nna. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
