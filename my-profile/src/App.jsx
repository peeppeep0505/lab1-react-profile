import { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard.jsx';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (null);
  const [githubData, setGithubData] = useState(null);
  const username = "peeppeep0505";
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then (data => {
    setGithubData (data);
    setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
  },[]); 


  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const themeStyles = theme === 'dark'
    ? { backgroundColor: '#3c2336ff', color: '#f5f5f5' }
    : { backgroundColor: '#f5f5f5', color: '#3c2336ff' };




  return (
   
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , textAlign: 'center', minHeight: '100vh', ...themeStyles}}> 
    <h1>My Team Portfolio</h1>
    <button onClick={toggleTheme} style={{ marginBottom: '16px' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
    {githubData ? (
      <ProfileCard
          name={githubData.name || githubData.login}
          role="GitHub User"
          bio={githubData.bio || "No bio available"}
        />        
    ) : loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>User not found</p>
    ) : null}
   
    </div>
  );
}

export default App
