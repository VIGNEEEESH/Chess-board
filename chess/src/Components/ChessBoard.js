import React, { useState } from "react";
import "./ChessBoard.css";

const ChessBoard = () => {
  // State to keep track of the currently selected box
  const [selectedBox, setSelectedBox] = useState(null);

  // State to keep track of the history of selected boxes for undo functionality
  const [history, setHistory] = useState([]);

  // Function to create the chessboard with 8x8 grid
  const createBoard = () => {
    const boxes = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        // Generate a unique ID for each box
        const id = `box-${i}-${j}`;
        // Determine the class name based on the position and selection
        const className = getClassName(i, j);
        // Determine the content based on whether the box is selected
        const content =
          selectedBox && selectedBox[0] === i && selectedBox[1] === j
            ? "Clicked!"
            : "";
        // Create a box element and add it to the boxes array
        boxes.push(
          <div
            key={id} // Unique key for each box
            id={id} // ID for the box
            className={className} // Class name for styling
            onClick={() => handleBoxClick(i, j)} // Click handler for selecting a box
          >
            {content} {/* Display content if the box is selected */}
          </div>
        );
      }
    }
    return boxes; // Return the array of box elements
  };

  // Function to determine the class name for a box based on its position
  const getClassName = (i, j) => {
    // Alternate between white and black boxes
    let className = (i + j) % 2 === 0 ? "box white" : "box black";
    // Add 'red' class if the box is diagonally aligned with the selected box
    if (selectedBox) {
      const [x, y] = selectedBox;
      if (Math.abs(x - i) === Math.abs(y - j)) {
        className += " red";
      }
    }
    return className; // Return the final class name
  };

  // Function to handle box click events
  const handleBoxClick = (i, j) => {
    if (selectedBox) {
      // Save the current state to history if there's already a selected box
      setHistory([...history, selectedBox]);
    }
    // Set the new selected box
    setSelectedBox([i, j]);
  };

  // Function to handle the undo action
  const handleUndo = () => {
    if (history.length > 0) {
      // Revert to the last state from history
      setSelectedBox(history[history.length - 1]);
      // Remove the last state from history
      setHistory(history.slice(0, -1));
    } else {
      // No history to undo, reset the selected box
      setSelectedBox(null);
    }
  };

  return (
    <div id="main">
      <div id="heading">
        <h1>Chessboard</h1>
        {/* Button to undo the last selection */}
        <button id="undoButton" onClick={handleUndo}>
          Undo
        </button>
      </div>
      <div id="container">
        {/* Render the chessboard */}
        <div id="boxes">{createBoard()}</div>
      </div>
    </div>
  );
};

export default ChessBoard;
