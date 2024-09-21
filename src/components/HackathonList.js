import React, { useState } from 'react';
import { Card, Row, Col, Modal, Button, Form } from 'react-bootstrap';

import HackathonCard from './HackathonCard'; // Import HackathonCard
import class1Image from '../assets/cardimage/Group 1000002466.png'; // Import your static images
import class2Image from '../assets/cardimage/Group 1000002767.png';
import class3Image from '../assets/cardimage/Group 1000002771.png';
import class4Image from '../assets/cardimage/Group 1000002772.png';
import class5Image from '../assets/cardimage/Group 1000002773.png';
import class6Image from '../assets/cardimage/Group 1000002466.png';
import Robot from '../assets/icons/Robot.svg';
import Vector from '../assets/icons/Vector.svg';
import carbon_notebook from '../assets/icons/bi_image-fill.svg';
import carbon_skill from '../assets/icons/carbon_notebook-reference.svg';

const HackathonList = ({ hackathons }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    { title: "Class 1", date: "01-01-2024", description: "Introduction to Hackathons", image: class1Image, level: "easy" },
    { title: "Class 2", date: "02-01-2024", description: "Hackathon Planning", image: class2Image, level: "medium" },
    { title: "Class 3", date: "03-01-2024", description: "Project Management", image: class3Image, level: "hard" },
    { title: "Class 4", date: "04-01-2024", description: "Design Thinking", image: class4Image, level: "easy" },
    { title: "Class 5", date: "05-01-2024", description: "Prototyping Techniques", image: class5Image, level: "medium" },
    { title: "Class 6", date: "06-01-2024", description: "Team Collaboration", image: class6Image, level: "hard" },
  ];
  
  const handleShow = (hackClass) => {
    setSelectedClass(hackClass);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedClass(null);
  };

  // Filter hackathons based on search term and selected level
  const filteredHackathons = hackathons.filter((hackathon) => {
    const matchesSearch = hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hackathon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel ? hackathon.level === selectedLevel : true;
    return matchesSearch && matchesLevel;
  });
  const filteredHackathons1 = classes.filter((hackClass) => {
    const matchesSearch = hackClass.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hackClass.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel ? hackClass.level === selectedLevel : true;
    return matchesSearch && matchesLevel;
  });
  

  return (
    <div>
      <Row className="justify-content-between p-4">
        <div className="headningtext text-center">
          <h1>Why Participate in <span className="text-success">AI Challenges ?</span></h1>
        </div>

        <Col md={6} className="border-none">
          <Card className="countcard1">
            <Card.Body>
              <Card.Img variant="top" src={carbon_skill} style={{ width: '40px', height: '40px' }} />
              <Card.Title>Prove your skills</Card.Title>
              <Card.Text>
                Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="countcard1">
            <Card.Body>
              <Card.Img variant="top" src={Vector} style={{ width: '40px', height: '40px' }} />
              <Card.Title>Learn from community</Card.Title>
              <Card.Text>
                One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} >
          <Card className="countcard1 p-3">
            <Card.Body>
              <Card.Img variant="top" src={Robot} style={{ width: '40px', height: '40px' }} />
              <Card.Title>Challenge yourself</Card.Title>
              <Card.Text>
                You can fail safe, learn out of the entire experience and bounce back harder.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="countcard1">
            <Card.Body>
              <Card.Img variant="top" src={carbon_skill} style={{ width: '40px', height: '40px' }} />
              <Card.Title>Earn recognition</Card.Title>
              <Card.Text>
                You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="cardimage">
        <div className="text-center p-2">
          <h1>Explore Challenges</h1>
        </div>

        {/* Search and Filter Section */}
        <Row className='m-4'>
          <Col md={9}>
            <Form.Control
              type="text"
              placeholder="Search hackathons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
              <option value="">Filter by Level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-4 mt-3">
          {filteredHackathons.length === 0 ? (
            <p className="text-center">No hackathons found.</p>
          ) : (
            filteredHackathons.map((hackathon) => (
              <Col md={4} key={hackathon.id}>
                <HackathonCard hackathon={hackathon} />
              </Col>
            ))
          )}
        </Row>

        <Row className=" m-4">
          {filteredHackathons1.map((hackClass, index) => (
            <Col md={4} key={index} className="mt-4 mb-4">
              <Card>
                <Card.Img variant="top" src={hackClass.image} />
                <Card.Body>
                  <Card.Title>{hackClass.title}</Card.Title>
                  <Card.Text>Date: {hackClass.date}</Card.Text>
                  <Card.Text>Description: {hackClass.description}</Card.Text>
                  <Button variant="success" onClick={() => handleShow(hackClass)}>
                    Participate Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal for displaying class details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedClass?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedClass?.image} alt={selectedClass?.title} style={{ width: '100%' }} />
          <p><strong>Date:</strong> {selectedClass?.date}</p>
          <p><strong>Description:</strong> {selectedClass?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HackathonList;
