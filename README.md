# About my project

## JavaScript and React Concepts Used

### React Components
The project uses React components to separate the application into smaller parts. For example, the Navbar, GameCard, Home page, Games page, and each game are built as separate components.

### useState
I used `useState` to store and update values that change during the game, such as the player score, computer score, messages, user input, random numbers, dice results, quiz answers, and reaction time.

### Event Handling
The project uses events like `onClick` and `onChange`. `onClick` is used when the user clicks buttons, and `onChange` is used when the user types in an input field.

### Conditional Logic
I used `if`, `else if`, and `else` statements to decide the result of each game. For example, the app checks if the user wins, loses, draws, enters a wrong answer, or gives invalid input.

### Random Values
The games use `Math.random()` and `Math.floor()` to generate random values. This is used for dice rolls, coin tosses, computer choices, secret numbers, and math quiz questions.

### React Router
React Router is used to create multiple pages in the app. It allows navigation between the Home page, Games page, About page, and each game page without reloading the browser.

### setTimeout
The Reaction Time game uses `setTimeout` to wait for a random amount of time before showing the “CLICK NOW!” message.

### Environment Variables
The project uses a `.env` file to store environment variables such as the application name and author name. These variables are accessed using `import.meta.env` in React.
