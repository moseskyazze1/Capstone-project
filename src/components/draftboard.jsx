import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; 
import './draftboard.css'; 

function Draftboard() {
    const [savedTeam, setSavedTeam] = useState([]);
    const [email, setEmail] = useState('');
    const [inviteSent, setInviteSent] = useState(false);

    useEffect(() => {
        const storedTeam = localStorage.getItem('savedTeam');
        if (storedTeam) {
            setSavedTeam(JSON.parse(storedTeam));
        }
    }, []);

    const renderTeams = () => {
        const teams = [[], [], []]; 
        savedTeam.forEach((player, index) => {
            const teamIndex = index % 3; 
            teams[teamIndex].push(player);
        });

        return teams.map((team, index) => (
            <div key={index} className={`team team-${index + 1}`}>
                <h3>Player {index + 1}'s Team</h3>
                {team.length > 0 ? (
                    <div className="team-list">
                        {team.map((player, playerIndex) => (
                            <div key={playerIndex} className="player">
                                <h5>{player.title}</h5>
                                <img src={player.image} alt={player.title} />
                                <p>{player.content}</p>
                                <h2>{player.description}</h2>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No players in this team yet.</p>
                )}
            </div>
        ));
    };

    const handleDeleteTeam = () => {
        localStorage.removeItem('savedTeam');
        setSavedTeam([]); 
        alert('Team has been deleted!');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleInviteSubmit = async (e) => {
        e.preventDefault();
        try {
            const templateParams = {
                to_email: email, 
            };
            await emailjs.send("service_gbbw7vu", "template_zh19m7m", templateParams);
            setInviteSent(true);
            setEmail(''); 
        } catch (error) {
            console.error('Failed to send invite:', error);
            alert('Failed to send invite. Please try again later.');
        }
    };

    return (
        <div className="draftboard">
            <h2>Draftboard - Saved Teams</h2>
            {savedTeam.length > 0 ? renderTeams() : <p>No team saved yet.</p>}
            {savedTeam.length > 0 && (
                <button className="delete-button" onClick={handleDeleteTeam}>
                    Delete Team
                </button>
            )}
            <h3>Invite Others to Select Teams</h3>
            <form onSubmit={handleInviteSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter email address"
                    required
                />
                <button type="submit">Send Invite</button>
            </form>
            {inviteSent && <p>Invite sent to {email}!</p>}
        </div>
    );
}

export default Draftboard;
