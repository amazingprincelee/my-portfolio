import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const YouTubeSection = () => {
  return (
    <section className="section bg-gradient-success py-5">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg="8">
            <h2 className="text-white">Latest YouTube Content</h2>
            <p className="text-white-50">Tech Tutorials & Development Insights</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="10">
            <div className="text-center p-5 bg-white rounded shadow-lg">
              <div className="mb-4">
                <i className="fa fa-youtube-play text-danger" style={{ fontSize: '4rem' }}></i>
              </div>
              <h3 className="text-dark mb-3">Amazing Prince Lee</h3>
              <p className="text-muted mb-4">
                Explore my latest tech tutorials, development insights, and coding projects on YouTube. 
                Subscribe to stay updated with the latest content!
              </p>
              <div className="d-flex justify-content-center flex-wrap">
                <a 
                  href="https://www.youtube.com/@amazingprincelee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-danger btn-lg mr-3 mb-2"
                >
                  <i className="fa fa-youtube-play mr-2"></i>
                  Visit Channel
                </a>
                <a 
                  href="https://www.youtube.com/@amazingprincelee?sub_confirmation=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger btn-lg mb-2"
                >
                  <i className="fa fa-bell mr-2"></i>
                  Subscribe
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default YouTubeSection;