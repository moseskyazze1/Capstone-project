import React, { useEffect, useState } from 'react';
import './rankings.css';

const players = [
    { title: "PATRICK MAHOMES", image: "/images/mahomes.png", description: "Kansas City Chiefs", score: 95 },
    { title: "JOSH ALLEN", image: "/images/josh.png", description: "Buffalo Bills", score: 92 },
    { title: "AARON RODGERS", image: "/images/rodgers.webp", description: "New York Jets", score: 90 },
    { title: "LAMAR JACKSON", image: "/images/lamar.png", description: "Baltimore Ravens", score: 89 },
    { title: "JOE BURROW", image: "/images/burrow.png", description: "Cincinnati Bengals", score: 88 },
    { title: "DERRICK HENRY", image: "/images/henry.png", description: "Tennessee Titans", score: 87 },
    { title: "COOPER KUPP", image: "/images/cooper.png", description: "L.A Rams", score: 85 },
    { title: "DEVANTE ADAMS", image: "/images/devante.png", description: "Las Vegas Raiders", score: 84 },
    { title: "JUSTIN JEFFERSON", image: "/images/jefferson.png", description: "Minnesota Vikings", score: 83 },
    { title: "TYREEK HILL", image: "/images/tyreek.png", description: "Miami Dolphins", score: 82 },
    { title: "AJ BROWN", image: "/images/AJ.png", description: "Philadelphia Eagles", score: 81 },
    { title: "CEEDEE LAMB", image: "/images/ceedee.png", description: "Dallas Cowboys", score: 80 },
    { title: "STEFFON DIGGS", image: "/images/diggs.png", description: "Buffalo Bills", score: 79 },
    { title: "KIRK COUSINS", image: "/images/kirk.png", description: "Minnesota Vikings", score: 75 },
    { title: "JUSTIN FIELDS", image: "/images/fields.png", description: "Chicago Bears", score: 74 },
    { title: "TUA TAGOVAILOA", image: "/images/tua.webp", description: "Miami Dolphins", score: 73 },
    { title: "GENO SMITH", image: "/images/geno.png", description: "Seattle Seahawks", score: 72 },
    { title: "BAKER MAYFIELD", image: "/images/baker.png", description: "Tampa Bay Buccaneers", score: 71 },
    { title: "JALEN HURTS", image: "/images/jalen.png", description: "Philadelphia Eagles", score: 70 },
    { title: "DEEBO SAMUEL", image: "/images/deebo.png", description: "San Francisco 49ers", score: 68 },
    { title: "CHRIS MCCAFFREY", image: "/images/christian.png", description: "San Francisco 49ers", score: 67 },
    { title: "SAQUON BARKLEY", image: "/images/saquan.png", description: "New York Giants", score: 66 },
    { title: "JAMARR CHASE", image: "/images/jaMarr-Chase.png", description: "Cincinnati Bengals", score: 59 },
    { title: "GARRETT WILSON", image: "/images/garret.png", description: "New York Jets", score: 58 },
    { title: "DK METCALF", image: "/images/metcaf.png", description: "Seattle Seahawks", score: 57 },
    { title: "ODell BECKHAM", image: "/images/odell.png", description: "Baltimore Ravens", score: 56 },
    { title: "ROME ODUNZE", image: "/images/rome.png", description: "Chicago Bears", score: 55 },
];

function Rankings() {
    const [rankedPlayers, setRankedPlayers] = useState([]);

    useEffect(() => {
        const sortedPlayers = [...players].sort((a, b) => b.score - a.score); 
        setRankedPlayers(sortedPlayers);
    }, []);

    return (
        <div className="ranking">
            <h2>Player Rankings</h2>
            <p className="instruction-text">Use these player ratings to determine your pick selection.</p>
            <div className="ranked-list">
                {rankedPlayers.map((player, index) => (
                    <div className="ranked-player" key={index}>
                        <h5>{index + 1}. {player.title}</h5>
                        <img src={player.image} alt={player.title} />
                        <p>Score: {player.score}</p>
                        <h3>{player.description}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rankings;
