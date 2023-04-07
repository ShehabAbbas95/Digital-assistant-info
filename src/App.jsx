import ProfileCard from "./components/ProfileCard"

function App() {
  const data = [
    {person1: {
      title: "Alexa",
      text: "Test"
    }},
    {person2: {
      title: "cort",
      text: "Testsss"
    }},
  ]
  
  return (
    <div>
      <div className="pannel">Personal Digital Assistants</div>
      <ProfileCard dataProp = {data} />
      <ProfileCard />
      <ProfileCard />
    </div>
  )
}

export default App
