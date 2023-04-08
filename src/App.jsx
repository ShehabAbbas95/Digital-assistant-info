import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./assets/images/alexa.png";
import CortanaImage from "./assets/images/cortana.png";
import SiriImage from "./assets/images/siri.png";

function App() {
  return (
    <div className="p-5 text-center ">
      <h1 className="bg-orange-400 rounded-full text-center w-full font-bold">
        Personal Digital Assistance
      </h1>
      <br />
      <div className="flex justify-around ">
        <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
        <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
        <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
      </div>
    </div>
  );
}

export default App;
