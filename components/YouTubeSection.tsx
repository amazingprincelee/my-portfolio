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
            <div className="embed-responsive embed-responsive-16by9">
              <iframe 
                className="embed-responsive-item shadow-lg rounded"
                src="https://www.youtube.com/embed/videoseries?list=UUamazingprincelee"
                title="Latest YouTube videos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center mt-4">
              <a 
                href="https://www.youtube.com/@amazingprincelee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-white text-success"
              >
                Visit My Channel
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default YouTubeSection;