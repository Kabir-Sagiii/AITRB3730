import "./App.css";

import Parent from "./components/parent-child/Parent";

import Nav from "./components/nav/Nav";
import Input from "./components/parent-child/task/Input";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Parent /> */}
      <Input />
    </div>
  );
}

export default App;
