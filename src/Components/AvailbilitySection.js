import React, { useState } from 'react';
// import './Availability.css';

const AvailbilitySection = () => {
  const [availability, setAvailability] = useState('1 month');
  const [status, setStatus] = useState('Actively looking for a job');

  return (
    <div className="availability-container">
      <h2>Availability</h2>
      <div className="availability-options">
        <div>
          <input 
            type="radio" 
            id="active" 
            name="status" 
            value="Actively looking for a job" 
            checked={status === 'Actively looking for a job'}
            onChange={() => setStatus('Actively looking for a job')} 
          />
          <label htmlFor="active">Actively looking for a job</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="open" 
            name="status" 
            value="I'm open to opportunities" 
            checked={status === "I'm open to opportunities"}
            onChange={() => setStatus("I'm open to opportunities")} 
          />
          <label htmlFor="open">I'm open to opportunities</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="exploring" 
            name="status" 
            value="Not sure, I'm just exploring" 
            checked={status === "Not sure, I'm just exploring"}
            onChange={() => setStatus("Not sure, I'm just exploring")} 
          />
          <label htmlFor="exploring">Not sure, I'm just exploring</label>
        </div>
      </div>
      {status === 'Actively looking for a job' && (
        <div className="availability-slider">
          <label htmlFor="availability">Your availability: {availability}</label>
          <input 
            type="range" 
            id="availability" 
            name="availability" 
            min="1" 
            max="12" 
            value={availability.split(' ')[0]} 
            onChange={(e) => setAvailability(`${e.target.value} month${e.target.value > 1 ? 's' : ''}`)} 
          />
        </div>
      )}
      {/* <div className="availability-navigation">
        <button className="previous">Previous</button>
        <button className="next">Next</button>
      </div> */}
    </div>
  );
};

export default AvailbilitySection;
