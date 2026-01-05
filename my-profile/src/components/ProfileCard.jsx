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
        <input
          style={{ margin: '5px 0' }}
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          />
        <button onClick={addSkill} style={{ margin: '0 2px' }}>Add Skill</button>
          <ul style={{ textAlign: 'left' }}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

      <button onClick={() => setLikes(likes + 1)}>
        🩷 Like {likes}
      </button>
    </div>
  );
}
export default ProfileCard;