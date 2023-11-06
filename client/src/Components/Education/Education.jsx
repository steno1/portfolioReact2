import { Col, Container, Row } from 'react-bootstrap';

import { EducationData } from '../../data';
import React from 'react';
import styles from './education.module.css'; // Import the CSS module

const Education = () => {
  return (
    <div className={styles['education-section']} id="Education">
      <div className={styles['section-title']}>
      <h2 style={{color:"black", fontWeight:"600"}}>Education</h2>
      </div>
      <Container>
        {EducationData.map((data, index) => (
          <Row key={index} className={styles['education-item']}>
            <Col xs={12} md={3} className={styles['education-date']}>
              <p>{data.year}</p>
            </Col>
            <Col xs={12} md={9} className={styles['education-details']}>
              <h5>{data.name}</h5>
              <h5>{data.degree}</h5>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Education;
