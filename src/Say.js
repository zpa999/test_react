import React from "react";

function App() {
  const [message, setMessage] = React.useState("");

  const onClickEnter = () => setMessage("Hello!");
  const onClickLeave = () => setMessage("bye!");

  return (
    <div>
      <h1>The Message : {message}</h1>
      <button onClick={onClickEnter}>enter</button>
      <button onClick={onClickLeave}>exit</button>
    </div>
  );
}

export default App;
