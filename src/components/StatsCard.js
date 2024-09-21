import React from 'react';
import { Card } from 'react-bootstrap';

import Robot from '../assets/icons/Robot.svg';

const StatsCard = ({ title, count }) => {
  return (
    <Card className=" countcard" style={{background:"#003145",color:"white"}}>
      <Card.Body>
        <Card.Text>
        <Card.Img variant="top" src={Robot} style={{width:'40px',height:"40px"}}/>

          <h1>{count}k+</h1>
        </Card.Text>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
