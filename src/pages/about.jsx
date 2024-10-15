
import React from 'react';
import './About.css'; // Import the CSS for styling

function About() {
  const posts = [
    {
      title: "Draft your team",
      content: "Join a league then pick your players, or let us use our expert rankings to draft for you.",
    },
    {
      title: "Set your lineup",
      content: "Pick your starting lineup, or let the Optimize Lineup feature do the work.",
    },
    {
      title: "Watch them win",
      content: "Play alongside your team, watch live highlights, and talk trash to your opponents.",
    },
  ];

  return (
    <div className="about-container">
      <div className="overlay">
        <h1>Fantasy Football</h1>
        <p>Learn how to play the game and enjoy your experience!</p>

        {/* Render the posts dynamically */}
        <div className="posts-container">
          {posts.map((post, index) => (
            <div key={index} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;