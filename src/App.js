import { useEffect, useState } from 'react';
import './App.css';
// ES6
import Draggable from 'react-draggable'; // The default
import colorImg from './color.svg';
import postColorImg from './postColor.svg'

function App() {
  const [showEditTextBackground, setShowEditTextBackground] = useState(false);
  const [theText, settheText] = useState("Edit Me");
  const [colorChooser, setColorChooser] = useState(false);
  const [postColorChooser, setPostColorChooser] = useState(false);

  const [fontSize, setFontSize] = useState("25");
  const [fontColor, setFontColor] = useState("white");
  const [postColor, setPostColor] = useState("#78db78");
  const [fontWeight, setFontWeight] = useState("bold");

  const toggleEditTextBackground = () => {
    setShowEditTextBackground(!showEditTextBackground);
  };

  const toggleColor = () => {
    setColorChooser(!colorChooser);
  };
  const togglePost = () => {
    setPostColorChooser(!colorChooser);
  };
  const toggleFontWeight = () => {
    if(fontWeight == "bold"){
      setFontWeight("normal");
    }else{
      setFontWeight("bold");
    }
  };

  const handleColorChange = (color) => {
    setFontColor(color);
    setColorChooser(false);
  };

  const handlePostColorChange = (color) => {
    setPostColor(color);
    setPostColorChooser(false);
  };

  function editText(){
    alert()
    return(
      <div className="editTextBackground">
      </div>
    )
  }

  useEffect(() => {

  },[fontSize])
  return (
    <div className="App">
      <Draggable handle=".moveIt">
      <div className="postIt" style={{backgroundColor: postColor}}>
        <div className="moveIt">Drag Me</div>
        <button className="editIt" onClick={toggleEditTextBackground}><div className="realText" style={{ fontWeight: fontWeight, fontSize: fontSize + "px", color: fontColor}}>{theText}</div></button>
        {showEditTextBackground && <div className="editTextBackground">
          {colorChooser && 
            <div id="changeColor">
            <div id="colorTitle">Font Color</div>
             <button id="changeColorButton" style={{ backgroundColor: "green"}} onClick={()=>{handleColorChange("#3fcc59")}}>Green</button>
             <button id="changeColorButton" style={{ backgroundColor: "red" }} onClick={()=>{handleColorChange("#e86466")}}>Red</button>
             <button id="changeColorButton" style={{ backgroundColor: "blue" }} onClick={()=>{handleColorChange("#649fe8")}}>Blue</button>
             <button id="changeColorButton" style={{ backgroundColor: "#FFFFFF", color: "black" }} onClick={()=>{handleColorChange("white")}}>White</button>
             <button id="changeColorButton" style={{ backgroundColor: "#000000"}} onClick={()=>{handleColorChange("black")}}>Black</button>
           </div>
          }
          {postColorChooser && 
            <div id="changePostColor">
            <div id="colorTitle">Note Color</div>
             <button id="changeColorButton" style={{ backgroundColor: "green"}} onClick={()=>{handlePostColorChange("#78db78")}}>Green</button>
             <button id="changeColorButton" style={{ backgroundColor: "orange" }} onClick={()=>{handlePostColorChange("#ffb64f")}}>Orange</button>
             <button id="changeColorButton" style={{ backgroundColor: "blue" }} onClick={()=>{handlePostColorChange("#8ac0ff")}}>Blue</button>
             <button id="changeColorButton" style={{ backgroundColor: "#fdffa3"}} onClick={()=>{handlePostColorChange("#fdffa3")}}>Yellow</button>
             <button id="changeColorButton" style={{ backgroundColor: "pink"}} onClick={()=>{handlePostColorChange("#ffa3fd")}}>Pink</button>
           </div>
          }
          <div id="flexTools">
            <button id="tool" onClick={togglePost}><img src={postColorImg} alt="Choose Color"/></button>
            <button id="tool" onClick={toggleFontWeight} style={{fontWeight: fontWeight}}>B</button>
            <button id="tool" onClick={toggleColor}><img src={colorImg} alt="Choose Color"/></button>
            <input id="toolSize" type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)}></input>
          </div>
          <button id="exit" onClick={toggleEditTextBackground}>X</button>
          <textarea id="inputText" value={theText} style={{fontWeight: fontWeight}} onChange={(e) => settheText(e.target.value)}></textarea>
        </div>}
      </div>
      </Draggable>
    </div>
  );
}

export default App;
