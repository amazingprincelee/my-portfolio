import React, { useState } from 'react';
import { Card, CardBody, Col, Button, Badge } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ProjectType } from '../types/sections';

const ProjectsCard = ({ name, desc, github, link, images, downloadLink, status, technologies }: ProjectType) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          {images && images.length > 0 && (
            <div className="position-relative">
              <img
                src={images[currentImageIndex]}
                alt={`${name} screenshot ${currentImageIndex + 1}`}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              {images.length > 1 && (
                <>
                  <Button
                    className="position-absolute"
                    style={{ top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 1 }}
                    color="light"
                    size="sm"
                    onClick={prevImage}
                  >
                    <i className="fa fa-chevron-left" />
                  </Button>
                  <Button
                    className="position-absolute"
                    style={{ top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 1 }}
                    color="light"
                    size="sm"
                    onClick={nextImage}
                  >
                    <i className="fa fa-chevron-right" />
                  </Button>
                  <div className="position-absolute" style={{ bottom: '10px', right: '10px' }}>
                    <Badge color="dark">{currentImageIndex + 1}/{images.length}</Badge>
                  </div>
                </>
              )}
            </div>
          )}
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <div className="d-flex align-items-center mb-2">
                  <h3 className="mb-0">{name}</h3>
                  {status && (
                    <Badge color="info" className="ml-2">{status}</Badge>
                  )}
                </div>
                
                {technologies && technologies.length > 0 && (
                  <div className="mb-3">
                    {technologies.map((tech, index) => (
                      <Badge key={index} color="secondary" className="mr-1 mb-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <p className="description mt-3">{desc}</p>
                
                <div className="d-flex flex-wrap">
                  {github ? (
                    <Button
                      className="btn-icon mr-2 mb-2"
                      color="github"
                      href={github}
                      target="_blank"
                      rel="noopener"
                      aria-label="Github"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Code</span>
                    </Button>
                  ) : null}
                  
                  {link ? (
                    <Button
                      className="btn-icon mr-2 mb-2"
                      color="success"
                      href={link}
                      target="_blank"
                      rel="noopener"
                      aria-label="Live Demo"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Live Demo</span>
                    </Button>
                  ) : null}
                  
                  {downloadLink ? (
                    <Button
                      className="btn-icon mr-2 mb-2"
                      color="warning"
                      href={downloadLink}
                      target="_blank"
                      rel="noopener"
                      aria-label="Download App"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-download mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Download App</span>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
