import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HackathonCard = ({ hackathon }) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const now = new Date();
    const startDate = new Date(hackathon.startDate);
    const endDate = new Date(hackathon.endDate);

    if (now < startDate) {
      setStatus('Upcoming');
      const interval = setInterval(() => {
        const distance = startDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }, 1000);
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    } else if (now >= startDate && now <= endDate) {
      setStatus('Live');
      setTimeLeft('');
    } else {
      setStatus('Ended');
      setTimeLeft('');
    }
  }, [hackathon.startDate, hackathon.endDate]);

  return (
    <div className="card m-4">
      <img src={hackathon.image || 'https://via.placeholder.com/150'} alt={hackathon.name} className="card-img-top" style={{height:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title">{hackathon.name}</h5>
        <p className="card-text"> Date: {hackathon.startDate}</p>
        {/* <p className="card-text">End Date: {hackathon.endDate}</p> */}
        <p className="card-text">{hackathon.description}</p>

        {/* Status and Countdown */}
        {status === 'Upcoming' && (
          <p className="card-text text-warning">Upcoming in {timeLeft}</p>
        )}
        {status === 'Live' && (
          <p className="card-text text-success">Hackathon is Live!</p>
        )}
        {status === 'Ended' && (
          <p className="card-text text-danger">Hackathon has Ended</p>
        )}

        <Link to={`/hackathon/${hackathon.id}`} className="btn btn-success">
          Participate Now
        </Link>
      </div>
    </div>
  );
};

export default HackathonCard;
