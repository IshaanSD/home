import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" 
          src={data.companylogo} 
          alt={data.company} 
          width={200}
          height={50}
        />
        <p className="lead">
          <b>{data.role}</b>, <i>{data.company}</i>
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;