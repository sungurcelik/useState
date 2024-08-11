import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { personList } from "./constants/fakeData";

function App() {
  return (
    <div>
      <Header />
      <div className="card-container">
      {personList.map((person) => (
        <Card personInfo={person} />
      ))}
      </div>
    </div>
  );
}

export default App;
