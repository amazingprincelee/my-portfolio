import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="4" className="text-center text-lg-left mb-4 mb-lg-0">
            <img
              src={avatar_url}
              style={{ width: '200px' }}
              alt="Prince Lee Nna"
              className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
            />
            <h2 className="text-white font-weight-bold">Prince Lee Nna</h2>
            <p className="text-white lead mb-4">
              Innovative Full-Stack Developer specializing in React, Node.js, and modern web technologies. 
              Creating scalable solutions that drive business growth.
            </p>
          </Col>
          <Col lg="4" className="text-center mb-4 mb-lg-0">
            <div className="my-3 text-white">
              <h4 className="text-white mb-4 font-weight-bold">Core Expertise</h4>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <i className="ni ni-app text-success mr-2"></i>
                  <span>Full-Stack Development</span>
                </div>
                <div className="expertise-item">
                  <i className="ni ni-atom text-success mr-2"></i>
                  <span>React & Node.js</span>
                </div>
                <div className="expertise-item">
                  <i className="ni ni-mobile-button text-success mr-2"></i>
                  <span>React Native</span>
                </div>
                <div className="expertise-item">
                  <i className="ni ni-palette text-success mr-2"></i>
                  <span>UI/UX Design</span>
                </div>
                <div className="expertise-item">
                  <i className="ni ni-settings text-success mr-2"></i>
                  <span>System Architecture</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" className="text-center text-lg-right">
            <div className="mb-4">
              <h4 className="text-white mb-4 font-weight-bold">Let's Connect</h4>
              <div className="social-links-grid">
                <SocialLinks />
              </div>
            </div>
            <p className="text-white">
              <i className="ni ni-pin-3 mr-2"></i>
              Based in {location} 🌍
            </p>
          </Col>
        </Row>
        <Row className="mt-5 pt-5 border-top border-light">
          <Col lg="6" className="text-center text-lg-left mb-3 mb-lg-0">
            <p className="text-white mb-0">
              &copy; {new Date().getFullYear()} Prince Lee Nna | Transforming Ideas into Digital Reality
            </p>
          </Col>
          <Col lg="6" className="text-center text-lg-right">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <a href="mailto:contact@princelee.pro" className="text-white mx-3 text-decoration-none hover-lift">
                <i className="ni ni-email-83 mr-2"></i>Contact
              </a>
              <a href="https://calendly.com/princelee" className="text-white mx-3 text-decoration-none hover-lift">
                <i className="ni ni-calendar-grid-58 mr-2"></i>Schedule a Call
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
