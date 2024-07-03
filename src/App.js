import React, { useEffect, useState } from 'react';
import './App.css'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable'
import colorImg from './color.svg';
import postColorImg from './postColor.svg';
import trash from './trash.svg';

const PostIt = ({ id, onDelete }) => {
  const [showEditTextBackground, setShowEditTextBackground] = useState(false);
  const [theText, settheText] = useState("Edit Me");
  const [colorChooser, setColorChooser] = useState(false);
  const [postColorChooser, setPostColorChooser] = useState(false);
  const [fontSize, setFontSize] = useState("25");
  const [fontColor, setFontColor] = useState("white");
  const [postColor, setPostColor] = useState("#78db78");
  const [fontWeight, setFontWeight] = useState("normal");
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [length, setLength] = useState(300);
  const colorCatalog = ["#78db78","#ffb64f","#8ac0ff","#fdffa3","#ffa3fd" ];
  const toggleEditTextBackground = () => {
    setShowEditTextBackground(!showEditTextBackground);
  };

  const toggleColor = () => {
    setColorChooser(!colorChooser);
  };

  const togglePost = () => {
    setPostColorChooser(!postColorChooser);
  };

  const toggleFontWeight = () => {
    setFontWeight(fontWeight === "bold" ? "normal" : "bold");
  };

  const handleColorChange = (color) => {
    setFontColor(color);
    setColorChooser(false);
  };

  const handlePostColorChange = (color) => {
    setPostColor(color);
    setPostColorChooser(false);
  };

  useEffect(() => {
    const randomTop = Math.floor(Math.random() * 50) + 10; 
    const randomLeft = Math.floor(Math.random() * 50) + 10;
    setPosition({ top: randomTop, left: randomLeft });

    const randomColor = Math.floor(Math.random() * 5);
    setPostColor(colorCatalog[randomColor])
  }, []);

  return (
    <Draggable handle="#moveIt">
      <Resizable id="postIt"  defaultSize={{width: 300, height: 300}}style={{ top: `${position.top}vh`, left: `${position.left}vw`, backgroundColor: postColor}} lockAspectRatio={true} minWidth={200} minHeight={200} maxWidth={400} maxHeight={400}>
        <div id="moveIt">Drag Me</div>
        <button id="editIt" onClick={toggleEditTextBackground}>
          <div id="realText" style={{ fontWeight: fontWeight, fontSize: fontSize + "px", color: fontColor }}>{theText}</div>
        </button>
        {showEditTextBackground && (
          <div id="editTextBackground">
            {colorChooser &&
              <div id="changeColor">
                <div id="colorTitle">Font Color</div>
                <button id="changeColorButton" style={{ backgroundColor: "green" }} onClick={() => handleColorChange("#3fcc59")}>Green</button>
                <button id="changeColorButton" style={{ backgroundColor: "red" }} onClick={() => handleColorChange("#e86466")}>Red</button>
                <button id="changeColorButton" style={{ backgroundColor: "blue" }} onClick={() => handleColorChange("#649fe8")}>Blue</button>
                <button id="changeColorButton" style={{ backgroundColor: "#FFFFFF", color: "black" }} onClick={() => handleColorChange("white")}>White</button>
                <button id="changeColorButton" style={{ backgroundColor: "#000000" }} onClick={() => handleColorChange("black")}>Black</button>
              </div>
            }
            {postColorChooser &&
              <div id="changePostColor">
                <div id="colorTitle">Note Color</div>
                <button id="changeColorButton" style={{ backgroundColor: "green" }} onClick={() => handlePostColorChange("#78db78")}>Green</button>
                <button id="changeColorButton" style={{ backgroundColor: "orange" }} onClick={() => handlePostColorChange("#ffb64f")}>Orange</button>
                <button id="changeColorButton" style={{ backgroundColor: "blue" }} onClick={() => handlePostColorChange("#8ac0ff")}>Blue</button>
                <button id="changeColorButton" style={{ backgroundColor: "#fdffa3" }} onClick={() => handlePostColorChange("#fdffa3")}>Yellow</button>
                <button id="changeColorButton" style={{ backgroundColor: "pink" }} onClick={() => handlePostColorChange("#ffa3fd")}>Pink</button>
              </div>
            }
            <div id="flexTools">
              <button id="tool" onClick={togglePost}><img src={postColorImg} alt="Choose Color" /></button>
              <button id="tool" onClick={toggleFontWeight} style={{ fontWeight: fontWeight }}>B</button>
              <button id="tool" onClick={toggleColor}><img src={colorImg} alt="Choose Color" /></button>
              <input id="toolSize" type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
            </div>
            <button id="trash" onClick={() => {onDelete(id)}}><img src={trash} alt="Delete"></img></button>
            <button id="exit" onClick={toggleEditTextBackground}>X</button>
            <textarea id="inputText" value={theText} style={{ fontWeight: fontWeight }} onChange={(e) => settheText(e.target.value)}></textarea>
          </div>
        )}
        <button id="scaleIt">
          
        </button>
      </Resizable>
    </Draggable>
  );
};

function App() {
  const [postItNotes, setPostItNotes] = useState([
    { id: 1 },
  ]);

  const addPostItNote = () => {
    const newId = postItNotes.length + 1;
    setPostItNotes([...postItNotes, { id: newId }]);
  };

  const deletePostItNote = (id) => {
    const updatedPostItNotes = postItNotes.filter(note => note.id !== id);
    setPostItNotes(updatedPostItNotes);
  };

  return (
    <div id="App">
        <button id="addPost" onClick={addPostItNote}>+</button>
      {postItNotes.map(note => (
        <PostIt key={note.id} id={note.id} onDelete={deletePostItNote} />
      ))}
    </div>
  );
}

export default App;