import React from 'react';
import { useLocation } from 'react-router-dom';
import './Team.css';

function Team() {
    const location = useLocation();
    const pickedPlayers = location.state?.pickedPlayers || []; 

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
        </div>
    );
}

export default Team;
