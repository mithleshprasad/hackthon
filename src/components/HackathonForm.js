import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const HackathonForm = ({ addHackathon }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hackathon, setHackathon] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    level: 'easy',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setHackathon({
      ...hackathon,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHackathon(hackathon);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit Hackathon' : 'Challenge Details'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Challenge Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={hackathon.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            value={hackathon.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            className="form-control"
            name="endDate"
            value={hackathon.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={hackathon.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Level</label>
          <select
            className="form-control"
            name="level"
            value={hackathon.level}
            onChange={handleChange}
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleChange}
            required
          />
        </div>

        {hackathon.image && (
          <div className="form-group">
            <img
              src={hackathon.image}
              alt="Selected Hackathon"
              style={{ width: '200px', height: 'auto', marginTop: '10px' }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-success mt-2">
          {id ? 'Update' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default HackathonForm;
