import VeryEasy from "./ components/veryeasy";
import BasicInfo from "./ components/basicinfo";
import Contacts from "./ components/contacts";

function App() {
  return (
    <div className="App">
      {/* Comparing both components to see if both visually look the same */}
      <VeryEasy />
      <BasicInfo />
      <Contacts />

    </div>
  );
}

export default App;
