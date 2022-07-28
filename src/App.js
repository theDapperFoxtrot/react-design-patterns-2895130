import "./App.css";
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "purple" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "blue" }}>{message}</h1>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={2}>
      <LeftHandComponent name="Steve" />
      <RightHandComponent message="Welcome to styled components" />
    </SplitScreen>
  );
}

export default App;
