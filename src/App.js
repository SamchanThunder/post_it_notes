import { useState } from 'react';
import './App.css';
// ES6
import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>

function App() {
  const [showEditTextBackground, setShowEditTextBackground] = useState(false);
  const [theText, settheText] = useState("");

  const toggleEditTextBackground = () => {
    setShowEditTextBackground(!showEditTextBackground);
  };

  function editText(){
    alert()
    return(
      <div className="editTextBackground">
      </div>
    )
  }
  return (
    <div className="App">
      <Draggable handle=".moveIt">
      <div className="postIt">
        <div className="moveIt">Drag Me</div>
        <button className="editIt" onClick={toggleEditTextBackground}><div className="realText">{theText}</div></button>
        {showEditTextBackground && <div className="editTextBackground">
          <div id="flexTools">
            <button id="tool"></button>
            <button id="tool"></button>
            <button id="tool"></button>
            <button id="tool"></button>
          </div>
          <button id="exit" onClick={toggleEditTextBackground}>X</button>
          <input id="inputText" value={theText} onChange={(e) => settheText(e.target.value)}></input>
        </div>}
      </div>
      </Draggable>
    </div>
  );
}

export default App;
