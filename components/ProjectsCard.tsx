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
    <Col lg="6" className="mb-4">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow h-100 d-flex flex-column">
          {images && images.length > 0 && (
            <div 
              className={`position-relative ${name.toLowerCase().includes('mobile doctor') ? 'mobile-doctor-container' : ''}`}
              style={{ 
                height: '280px', 
                overflow: 'hidden'
              }}
            >
              <img
                src={images[currentImageIndex]}
                alt={`${name} screenshot ${currentImageIndex + 1}`}
                className={`card-img-top w-100 h-100 ${name.toLowerCase().includes('mobile doctor') ? 'mobile-doctor-image' : ''}`}
                style={{ 
                  objectFit: name.toLowerCase().includes('mobile doctor') ? 'contain' : 'cover',
                  objectPosition: 'center',
                  borderTopLeftRadius: '0.375rem',
                  borderTopRightRadius: '0.375rem'
                }}
              />
              {images.length > 1 && (
                <>
                  <Button
                    className="position-absolute btn-sm"
                    style={{ 
                      top: '50%', 
                      left: '10px', 
                      transform: 'translateY(-50%)', 
                      zIndex: 2,
                      opacity: 0.8,
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      padding: 0
                    }}
                    color="light"
                    onClick={prevImage}
                  >
                    <i className="fa fa-chevron-left" />
                  </Button>
                  <Button
                    className="position-absolute btn-sm"
                    style={{ 
                      top: '50%', 
                      right: '10px', 
                      transform: 'translateY(-50%)', 
                      zIndex: 2,
                      opacity: 0.8,
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      padding: 0
                    }}
                    color="light"
                    onClick={nextImage}
                  >
                    <i className="fa fa-chevron-right" />
                  </Button>
                  <div className="position-absolute" style={{ bottom: '10px', right: '10px', zIndex: 2 }}>
                    <Badge color="dark" style={{ opacity: 0.9 }}>
                      {currentImageIndex + 1}/{images.length}
                    </Badge>
                  </div>
                </>
              )}
            </div>
          )}
          <CardBody className="d-flex flex-column flex-grow-1">
            <div className="px-3 flex-grow-1">
              <div className="d-flex align-items-center mb-2 flex-wrap">
                <h3 className="mb-0 mr-2" style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>{name}</h3>
                {status && (
                  <Badge color="info" className="ml-auto">{status}</Badge>
                )}
              </div>
              
              {technologies && technologies.length > 0 && (
                <div className="mb-3">
                  {technologies.map((tech, index) => (
                    <Badge key={index} color="secondary" className="mr-1 mb-1" style={{ fontSize: '0.75rem' }}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
              
              <p className="description mt-3 text-muted" style={{ 
                fontSize: '0.9rem', 
                lineHeight: '1.5',
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {desc}
              </p>
            </div>
            
            <div className="px-3 mt-auto pt-3">
              <div className="d-flex flex-wrap justify-content-start">
                {github && (
                  <Button
                    className="btn-icon mr-2 mb-2"
                    color="github"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                    size="sm"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Code</span>
                  </Button>
                )}
                
                {link && (
                  <Button
                    className="btn-icon mr-2 mb-2"
                    color="success"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name.toLowerCase().includes('mobile doctor') ? 'Landing Page' : 'Live Demo'}
                    size="sm"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-external-link mr-1" />
                    </span>
                    <span className="nav-link-inner--text ml-1">
                      {name.toLowerCase().includes('mobile doctor') ? 'Landing Page' : 'Live Demo'}
                    </span>
                  </Button>
                )}
                
                {downloadLink && (
                  <Button
                    className="btn-icon mr-2 mb-2"
                    color="warning"
                    href={downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download App"
                    size="sm"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-download mr-1" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Download</span>
                  </Button>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
