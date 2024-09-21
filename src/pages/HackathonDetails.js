import React from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';

import { Container, Row, Col, Button } from 'react-bootstrap';

const HackathonDetails = ({ hackathons, updateHackathon, deleteHackathon }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hackathon = hackathons.find((h) => h.id === parseInt(id));

  if (!hackathon) return <p>Hackathon not found!</p>;

  const handleDelete = () => {
    deleteHackathon(hackathon.id);
    navigate('/');
  };

  return (
    <div className="">
         <Row className=" justify-content-between cardhome">
            <Col md={12}>
              <div className="d-flex justify-content-between  mx-4">
               <div className='className'>


                        <Button  variant="light bg-warning mt-1">Starts {hackathon.startDate}  09:00 PM (India Standard Time)</Button>
               <h1>{hackathon.name}</h1>
               <p>{hackathon.description}</p>       
              
                        <Button  variant="light mt-1">{hackathon.level}</Button>
               </div>
                {/* <img
                  src={rocket}
                  alt="Rocket"
                  style={{ width: '400px', animation: 'move-top 1s infinite alternate' }}
                /> */}
              </div>
            </Col>
          </Row>
          <div className='d-flex justify-content-between'>
          <Link to="/overview" className=" text-dark">
        <h2>Overview</h2>
      </Link>

<div className='text-end '>

  <button onClick={() => navigate(`/edit/${hackathon.id}`)} className="btn btn-warning">
    Edit
  </button>
  <button onClick={handleDelete} className="btn btn-danger m-2 ml-2">
    Delete
  </button>
</div>

          </div>
          <p>Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.


.</p>   
          <p>An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
          .</p>   
          <p>Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to</p>   
    </div>
  );
};

export default HackathonDetails;
