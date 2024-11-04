import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Team.css';

function Team() {
    const location = useLocation();
    const pickedPlayers = location.state?.pickedPlayers || [];
    
    
    const [savedTeam, setSavedTeam] = useState(null);

    const saveTeam = () => {
    
        localStorage.setItem('savedTeam', JSON.stringify(pickedPlayers));
        setSavedTeam(pickedPlayers);
        alert("Your team has been saved!");
    };

    return (
        <div className="team">
            <h2>Your Team</h2>
            <div className="team-list">
                {pickedPlayers.length > 0 ? (
                    pickedPlayers.map(player => (
                        <div key={player.title} className="player">
                            <h5>{player.title}</h5>
                            <img src={player.image} alt={player.title} />
                            <p>{player.content}</p>
                            <h2>{player.description}</h2>
                        </div>
                    ))
                ) : (
                    <p>No players picked yet!</p>
                )}
            </div>

            <div className="save-button-container">
                <button onClick={saveTeam} className="save-button">
                    Save Team
                </button>
               
            </div>
        </div>
    );
}

export default Team;
