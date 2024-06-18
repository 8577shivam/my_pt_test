import React, { useState } from 'react';

function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: '', experience: 1, description: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({ ...newSkill, [name]: value });
  };

  const addSkill = () => {
    if (isEditing) {
      const updatedSkills = [...skills];
      updatedSkills[currentIndex] = newSkill;
      setSkills(updatedSkills);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setSkills([...skills, newSkill]);
    }
    setNewSkill({ name: '', experience: 1, description: '' });
  };

  const editSkill = (index) => {
    setNewSkill(skills[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div className="App">
      <h1>Top skills:</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.name} - {skill.experience} years of experience
            <p>{skill.description}</p>
            <button onClick={() => editSkill(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>{isEditing ? 'Edit' : 'Add'} a skill</h2>
      <div>
        <input
          type="text"
          name="name"
          value={newSkill.name}
          onChange={handleInputChange}
          placeholder="Skill name"
        />
        <select
          name="experience"
          value={newSkill.experience}
          onChange={handleInputChange}
        >
          {[...Array(11).keys()].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <textarea
          name="description"
          value={newSkill.description}
          onChange={handleInputChange}
          placeholder="Describe your experience"
        />
        <button onClick={addSkill}>{isEditing ? 'Update' : 'Add'}</button>
      </div>
    </div>
  );
}

export default SkillsSection;
