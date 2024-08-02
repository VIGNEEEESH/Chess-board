# Chessboard React App

## Description

This is a React-based application that simulates a chessboard. Users can click on squares to select them and see a visual indication of their selection. The application includes an undo feature to revert the last selection. It is built using React, CSS for styling, and features responsive design for different screen sizes.

## Features

- Interactive chessboard with 64 squares.
- Click a square to select it and highlight diagonals.
- Undo the last selection using the undo button.
- Responsive design for various screen sizes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling for layout and appearance.
- **Media Queries**: Responsive design adjustments for different screen sizes.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/VIGNEEEESH/Chess-board.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd chessboard-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Start the development server:**

   ```bash
   npm start
   ```

   This will open the application in your default browser at `http://localhost:3000`.

2. **Interact with the chessboard:**
   - Click on any square to select it.
   - The selected square will highlight diagonally connected squares.
   - Use the "Undo" button to revert to the previous selection.

## Folder Structure

- `src/`
  - `Components/`
    - `ChessBoard.js`: The main component for rendering the chessboard.
  - `Pages/`
    - `Home.js`: The page component that includes the `ChessBoard`.
  - `App.js`: The root component of the application.
  - `App.css`: The CSS file for styling the `App` component.
  - `index.js`: The entry point of the application.

## Styling

- **ChessBoard.css**: Contains styles for the chessboard, including grid layout, box colors, and hover effects.
- **App.css**: Contains styles for the main application layout and responsiveness.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## Acknowledgments

- The project uses [React](https://reactjs.org/) for building the UI.
- Thanks to the open-source community for contributing to React and related tools.
](https://remarkable-khapse-c6b216.netlify.app/)
