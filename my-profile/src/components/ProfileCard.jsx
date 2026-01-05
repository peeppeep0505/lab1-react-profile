import { useState } from 'react';

function ProfileCard({ name, role, bio }) {
    const [likes, setLikes] = useState (0);
    
    const [skills, setSkills] = useState (["React", "JavaScript"]);
    const [newSkill, setNewSkill] = useState ("");

    const addSkill = () => {
        if (newSkill.trim() !== "") {
        setSkills([...skills, newSkill]);
        setNewSkill("");
        }
    };

    const [searchTerm, setSearchTerm] = useState ("");

    const filterSkills = skills.filter(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const deleteSkill = (indexToDelete) => {
    const updatedSkills = skills.filter((_, index) => index !== indexToDelete);
    setSkills (updatedSkills);
  }; 
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{name}</h2>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>{bio}</p>

       <div>
        <h3>Skills</h3>
        <input
          placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filterSkills.map((skill, index) => (
              <li key={index} style={{ color: skill.toLowerCase().includes("react") ? 'blue' : 'black' }} >
                {skill}
                <button onClick={() => deleteSkill(index)} style={{ marginLeft: '10px' }}>Delete</button>
                </li>
            ))}
        
          <input
          placeholder="add skills..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
        <button onClick={addSkill} style={{ margin: '0 2px' }}>Add Skill</button>
        </div>

      <button onClick={() => setLikes(likes + 1)} style={{ margin: '10px 0' }}>
        🩷 Like {likes}
      </button>
    </div>
  );
}
export default ProfileCard;