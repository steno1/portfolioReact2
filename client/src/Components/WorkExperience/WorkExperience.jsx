import './workexperience.css'; // Import your CSS file

import { Col, Container, Row } from 'react-bootstrap'; // Import Bootstrap components

import React from 'react';
import WorkData from '../../WorkExperienceData';

const WorkExperience = () => {
  return (
    <div className="work-experience-section" id="WorkExperience">
      <div className="section-title">
        <h2>Work Experience</h2>
      </div>
      <Container>
        <Row>
          {WorkData.map((item, index) => (
            <Col lg={6} md={12} key={index}>
              <div className="work-experience-item">
                <h3>{item.companyName}</h3>
                <p>{item.Position}</p>
                <p>{item.des}</p>
                <p>{item.startDate} - {item.endDate}</p>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default WorkExperience;
