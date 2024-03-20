import React, { useState } from "react";

function Toggle() {
  // Use destructuring to get isOn and setIsOn from useState
  const [isOn, setIsOn] = useState(false);

  // Function to handle button click and toggle isOn
  function toggleState() {
    setIsOn((prevIsOn) => !prevIsOn);
  }

  // Determine button text and color based on the state (isOn)
  const buttonText = isOn ? "ON" : "OFF";
  const buttonColor = isOn ? "red" : "white";

  // Return the button with onClick event and dynamic styles
  return (
    <button onClick={toggleState} style={{ background: buttonColor }}>
      {buttonText}
    </button>
  );
}

export default Toggle;

