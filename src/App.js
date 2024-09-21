import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './pages/Header';
import HackathonList from './components/HackathonList';
import HackathonForm from './components/HackathonForm';
import HackathonDetails from './pages/HackathonDetails';
import StatsCard from './components/StatsCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import rocket from './assets/cardimage/rocket.png'; // Import your rocket image
import '../src/style.css';
import { Link } from 'react-router-dom';

function App() {
  const [hackathons, setHackathons] = useState([]);
console.warn("vvghv",hackathons)
  // Function to add a new hackathon
  const addHackathon = (newHackathon) => {
    setHackathons([...hackathons, { ...newHackathon, id: Date.now() }]);
  };

  // Function to update an existing hackathon
  const updateHackathon = (updatedHackathon) => {
    setHackathons(
      hackathons.map((hackathon) =>
        hackathon.id === updatedHackathon.id ? updatedHackathon : hackathon
      )
    );
  };

  // Function to delete a hackathon
  const deleteHackathon = (id) => {
    setHackathons(hackathons.filter((hackathon) => hackathon.id !== id));
  };

  return (
    <Router>
      <Header />
      <Container className="mt-4">
        <MainContent
          hackathons={hackathons}
          addHackathon={addHackathon}
          updateHackathon={updateHackathon}
          deleteHackathon={deleteHackathon}
        />
      </Container>
    </Router>
  );
}
// MainContent Component for conditional rendering based on route
const MainContent = ({ hackathons, addHackathon, updateHackathon, deleteHackathon }) => {
  console.warn("addHackathon",addHackathon)
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <>
          <Row className="justify-content-between cardhome">
            <Col md={12}>
              <div className="d-flex justify-content-between mx-4">
                <div>
                  <h1>Accelerate Innovation with Global AI Challenges</h1>
                  <p>
                    AI Challenges at DPhi simulate real-world problems. Test your AI/Data Science skills on diverse datasets and foster learning through competitions.
                  </p>
                  <Link to="/create" type="button"  className='btn  bg-light text-dark' variant="light mt-1">Create Challenge</Link>
                </div>
                <img
                  src={rocket}
                  alt="Rocket"
                  style={{ width: '400px', animation: 'move-top 1s infinite alternate' }}
                />
              </div>
            </Col>
          </Row>

          <Row className="mb-4 cardhomecount">
            <Col md={4}>
              <StatsCard title="AI model submissions" count={100} />
            </Col>
            <Col md={4}>
              <StatsCard title="Data Scientists" count={75} />
            </Col>
            <Col md={4}>
              <StatsCard title="AI Challenges hosted" count={100} />
            </Col>
          </Row>
        </>
      )}

      <Routes>
        <Route path="/" element={<HackathonList hackathons={hackathons} />} />
        <Route path="/create" element={<HackathonForm addHackathon={addHackathon} />} />
        <Route path="/hackathon/:id" element={<HackathonDetails hackathons={hackathons} />} />
        <Route path="/edit/:id" element={<HackathonForm addHackathon={updateHackathon} />} />
      </Routes>
    </>
  );
};

export default App;
