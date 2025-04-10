# Random Quote Generator

This is a **Random Quote Generator** web application built with [React](https://reactjs.org/). The app fetches random quotes from an API and displays them with a dynamic background color. Users can generate new quotes by clicking a button.

## Features

- Fetches random quotes from the [Type.fit Quotes API](https://type.fit/api/quotes).
- Displays quotes with a dynamic background color.
- Smooth fade-in and fade-out transitions for quotes.
- Responsive design.

## Demo

You can run the app locally or deploy it to a hosting service to see it in action.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/random-quote-generator.git
   cd random-quote-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Project Structure

```
src/
├── components/
│   ├── Box.js        # Main container for the quote and button
│   ├── Button.js     # Button to fetch a new quote
│   └── Quote.js      # Displays the quote and author
├── App.js            # Main app component
├── App.css           # App-specific styles
├── index.js          # Entry point of the app
├── index.css         # Global styles
└── reportWebVitals.js
```

## Technologies Used

- React
- Axios (for API requests)
- CSS (for styling)

## API Reference

This app uses the [Type.fit Quotes API](https://type.fit/api/quotes) to fetch random quotes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.