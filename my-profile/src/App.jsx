import { useState,  useEffect } from 'react';
import ProfileCard from './components/ProfileCard.jsx';

function App() {
  const [githubData, setGithubData] = useState(null);
  const username = "peeppeep0505";
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then (data => {

    setGithubData (data);
    })
    .catch(err => console.error(err));
  },[]); 

  return (
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , textAlign: 'center'}}> 
    <h1>My Team Portfolio</h1>
    {githubData ? (
      <ProfileCard
        name="ศิริกร ใจศรี"
        role="Student @ CEDT"
        bio="ใจกลางเมืองมีแต่ตึกใจความรู้สึกมีแต่เทอ"
      />
    ) : (<p>Loading data from GitHub...</p>
    )}
    </div>
  );
}

export default App
