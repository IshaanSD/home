import React from 'react';
import parse from 'html-react-parser';

import {
  Row,
  Col,
} from "react-bootstrap";


const ExperienceCard = ({ data }) => {
  return (
    <Row>
    <Col lg="6">
      <div className="pb-5 text-center">
      <a target='_blank' href={data.link}>
        <img className=" bg-white mb-3" 
          src={data.companylogo} 
          alt={data.company} 
          width={200}
          height={50}
        />
        <p className="lead">
          
          <b>{data.role}</b>
          <br />
          <i>{data.company}</i>
          <br />
          
          {data.date}
        </p>
        </a>
      </div>
    </Col>
    <Col lg="6">
      <div className="pb-5 text-center">
        <p className="lead">
          <div>{parse(data.info)}</div>
        </p>

      </div>
    </Col>
    </Row>
  );
}

export default ExperienceCard;