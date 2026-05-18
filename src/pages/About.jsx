function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h1>About Mini Game Platform</h1>
        <p>
          Mini Game Platform is a React web application that allows users to
          play simple browser games. The project was created to practice React,
          JavaScript logic, routing, state management, and deployment.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h2>Project Goal</h2>
          <p>
            The main goal of this project is to build a basic but functional
            game platform where users can navigate between different games and
            play them directly in the browser.
          </p>
        </div>

        <div className="about-card">
          <h2>Games Included</h2>
          <p>
            The platform includes games such as Guess the Number, Rock Paper
            Scissors, Dice Game, Coin Toss, Math Quiz, and Reaction Time. Each
            game uses different JavaScript logic to create an interactive
            experience.
          </p>
        </div>

        <div className="about-card">
          <h2>React Concepts Used</h2>
          <p>
            This project uses React components, props, useState, event handling,
            conditional rendering, React Router, and reusable components such as
            the GameCard component.
          </p>
        </div>

        <div className="about-card">
          <h2>JavaScript Logic</h2>
          <p>
            JavaScript was used to generate random numbers, check win or lose
            conditions, validate user input, update scores, handle timers, and
            display game results dynamically.
          </p>
        </div>

        <div className="about-card">
          <h2>Environment Variables</h2>
          <p>
            The project uses a .env file to store environment variables such as
            the application name and author name. These values are accessed in
            React using import.meta.env.
          </p>
        </div>

        <div className="about-card">
          <h2>Deployment</h2>
          <p>
            The project is stored on GitHub and deployed using Vercel. A
            vercel.json file is used to make React Router routes work correctly
            after deployment.
          </p>
        </div>
      </div>

      <div className="about-learning">
        <h2>What I Learned</h2>
        <p>
          Through this project, I learned how to structure a React application,
          create multiple pages, manage game state, handle user interactions,
          validate inputs, use environment variables, push a project to GitHub,
          and deploy it online.
        </p>
      </div>
    </section>
  );
}

export default About;