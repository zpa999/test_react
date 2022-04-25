import React from "react";

function Button(btn_name) {
  return <button>{btn_name.name}</button>;
}

function App() {
  return (
    <div>
      <Button name="save btn" />
      <Button name="end btn" />
    </div>
  );
}

export default App;
