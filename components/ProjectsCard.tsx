import React, { useState } from 'react';
import { Card, CardBody, Col, Button, Badge } from 'reactstrap';
import Fade from './Fade';
import { ProjectType } from '../types/sections';

const ProjectsCard = ({ name, desc, github, link, images, downloadLink, status, technologies }: ProjectType) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isFeatured = status === 'Featured';
  const isEnterprise = status === 'Enterprise';

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

  const statusColor = () => {
    if (isFeatured) return 'danger';
    if (isEnterprise) return 'primary';
    return 'info';
  };

  return (
    <Col lg={isFeatured ? '12' : '6'} className="mb-4">
      <Fade bottom duration={2000}>
        <Card
          className="shadow-lg--hover shadow h-100 d-flex flex-column"
          style={{
            border: isFeatured ? '2px solid #fb6340' : isEnterprise ? '2px solid #5e72e4' : undefined,
            borderRadius: '0.5rem',
          }}
        >
          {isFeatured && (
            <div
              style={{
                background: 'linear-gradient(135deg, #fb6340 0%, #fbb140 100%)',
                padding: '8px 20px',
                borderTopLeftRadius: '0.5rem',
                borderTopRightRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <i className="fa fa-star text-white" />
              <span className="text-white font-weight-bold" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                FEATURED PROJECT
              </span>
            </div>
          )}
          {isEnterprise && (
            <div
              style={{
                background: 'linear-gradient(135deg, #5e72e4 0%, #825ee4 100%)',
                padding: '8px 20px',
                borderTopLeftRadius: '0.5rem',
                borderTopRightRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <i className="fa fa-building text-white" />
              <span className="text-white font-weight-bold" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                ENTERPRISE PROJECT — Built Solo as Head of IT
              </span>
            </div>
          )}

          <div className={isFeatured ? 'd-flex flex-column flex-lg-row' : ''} style={{ flex: 1 }}>
            {images && images.length > 0 && (
              <div
                className={`position-relative ${isFeatured ? 'featured-image-panel' : ''}`}
                style={{
                  height: isFeatured ? '320px' : '280px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  width: isFeatured ? undefined : '100%',
                }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt={`${name} screenshot ${currentImageIndex + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
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
                        opacity: 0.85,
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        padding: 0,
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
                        opacity: 0.85,
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        padding: 0,
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
              <div className="px-1 flex-grow-1">
                <div className="d-flex align-items-center mb-2 flex-wrap">
                  <h3
                    className="mb-0 mr-2"
                    style={{ fontSize: isFeatured ? '1.4rem' : '1.15rem', lineHeight: '1.3', fontWeight: 700 }}
                  >
                    {name}
                  </h3>
                  {status && !isFeatured && !isEnterprise && (
                    <Badge color={statusColor()} className="ml-2">
                      {status}
                    </Badge>
                  )}
                </div>

                {technologies && technologies.length > 0 && (
                  <div className="mb-3">
                    {technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        color="secondary"
                        className="mr-1 mb-1"
                        style={{ fontSize: '0.72rem' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                <p
                  className="description mt-2 text-muted"
                  style={{
                    fontSize: '0.88rem',
                    lineHeight: '1.55',
                    whiteSpace: 'pre-line',
                    display: '-webkit-box',
                    WebkitLineClamp: isFeatured ? 8 : 5,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {desc}
                </p>
              </div>

              <div className="px-1 mt-auto pt-3">
                <div className="d-flex flex-wrap align-items-center" style={{ gap: '8px' }}>
                  {github && (
                    <Button
                      className="btn-icon"
                      color="github"
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      className="btn-icon"
                      color="success"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-external-link mr-1" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Live Demo</span>
                    </Button>
                  )}

                  {downloadLink && (
                    <Button
                      className="btn-icon"
                      color="warning"
                      href={downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      size={isFeatured ? 'md' : 'sm'}
                      style={isFeatured ? { fontWeight: 700, padding: '0.5rem 1.25rem' } : {}}
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-download mr-1" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        {isFeatured ? 'Download App (APK)' : 'Download'}
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </CardBody>
          </div>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
