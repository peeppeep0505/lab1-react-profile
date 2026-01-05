import ProfileCard from './components/ProfileCard.jsx';

function App() {

  return (
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
    <h1>My Team Portfolio</h1>
      <ProfileCard
        name="ศิริกร ใจศรี"
        role="Student @ CEDT"
        bio="ใจกลางเมืองมีแต่ตึกใจความรู้สึกมีแต่เทอ"
      />
      <ProfileCard
        name="John Doе"
        role="Guest Developer"
        bio="I love coding and learning new things."
      />
    </div>
  );
}

export default App
