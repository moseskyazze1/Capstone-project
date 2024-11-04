import React from 'react';
import './About.css'; 

function About() {
  const posts = [
    {
      title: "Draft your team",
      content: "Player_1 selects first followed by Player_2 then Player_3.",
    },
    {
      title: "Set your lineup",
      content: "First player selected goes to Player_1, second player goes to Player_2 then third player goes to Player_3.",
    },
    {
      title: "Confirm teams",
      content: "Keep drafting until each player has at least 8 players selected then check them out on the draftboard.",
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
