import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; 

function Home(){
    const [pickedPlayers, setPickedPlayers] = useState([]);
    const navigate = useNavigate();

    const posts = [
        {
            title: "C.J STROUD",
            image: "/images/cj.png",
            content: "4 QB",
            description: "Houston Texans",
        },
        {
            title: "COOPER KUPP",
            image: "/images/cooper.png",
            content: "10 WR",
            description: "L.A Rams",
        },
        {
            title: "AJ BROWN",
            image: "/images/AJ.png",
            content: "11 WR",
            description: "Philadelphia Eagles",
        },
        {
            title: "JOE BURROW",
            image: "/images/burrow.png",
            content:"9 QB",
            description: "Cincinati Bangels",
        },
        {
            title: "CEEDEE LAMB",
            image: "/images/ceedee.png",
            content:"88 WR",
            description: "Dallas Cowboys",
        },
        {
            title: "DAK PRESCOTT",
            image: "/images/dak.png",
            content:"4 QB",
            description: "Dallas Cowboys",
        },
        {
            title: "DEEBO SAMUEL",
            image: "/images/deebo.png",
            content:"1 WR",
            description: "San Fran 49ers",
        },
        {
            title: "DEVANTE ADAMS",
            image: "/images/devante.png",
            content:"17 WR",
            description: "Las Vegas Raiders",
        },
        {
            title: "STEFON DIGGS",
            image: "/images/diggs.png",
            content:"1 WR",
            description: "Houston Texans",
        },
        {
            title: "GENO SMITH",
            image: "/images/geno.png",
            content: "7 QB",
            description: "Seattle Seahawks",
        },
        {
            title: "BAKER MAYFIELD",
            image: "/images/baker.png",
            content: "6 QB",
            description: "T.B Buccaneers",
        },
        {
            title: "JUSTIN FIELDS",
            image: "/images/fields.png",
            content:"2 QB",
            description: "Pittsburg Steelers",
        },
        {
            title: "ZAY FLOWERS",
            image: "/images/flowers.png",
            content:"4 WR",
            description: "Baltimore Ravens",
        },
        {
            title: "GARRET WILSON",
            image: "/images/garret.png",
            content:"5 WR",
            description: "New York Jets",
        },
        {
            title: "DERRICK HENRY",
            image: "/images/henry.png",
            content:"22 RB",
            description: "Baltimore Ravens",
        },
        {
            title: "JALEN HURTS",
            image: "/images/jalen.png",
            content:"1 QB",
            description: "Philadelphia Eagles",
        },
        {
            title: "JaMarr CHASE",
            image: "/images/jaMarr-Chase.png",
            content:"1 WR",
            description: "Cinccinati Bangels",
        },
        {
            title: "J JEFFERSON",
            image: "/images/jefferson.png",
            content:"18 WR",
            description: "Minnesota Vikings",
        },
        {
            title: "JOSH ALLEN",
            image: "/images/josh.png",
            content:"17 QB",
            description: "Buffalo Bills",
        },
        {
            title: "KIRK COUSINS",
            image: "/images/kirk.png",
            content:"18 QB",
            description: "Atlanta Falcons",
        },
        {
            title: "LAMAR JACKSON",
            image: "/images/lamar.png",
            content:"8 QB",
            description: "Baltimore Ravens",
        },
        {
            title: "PAT MAHOMES",
            image: "/images/mahomes.png",
            content:"15 QB",
            description: "Kansas City Chiefs",
        },
        {
            title: "DK METCAF",
            image: "/images/metcaf.png",
            content:"14 WR",
            description: "Seattle Seahawks",
        },
        {
            title: "ODELL BECKHAM",
            image: "/images/odell.png",
            content:"3 WR",
            description: "Miami Dolphins",
        },
        {
            title: "BROCK PURDY",
            image: "/images/purdy.png",
            content:"13 QB",
            description: "San Fran 49ers",
        },
        {
            title: "AARON RODGERS",
            image: "/images/rodgers.webp",
            content:"8 QB",
            description: "New York Jets",
        },
        {
            title: "ROME ODUNZE",
            image: "/images/rome.png",
            content:"15 WR",
            description: "Chicago Bears",
        },
        {
            title: "S BARKLEY",
            image: "/images/saquan.png",
            content:"26 RB",
            description: "Philadelphia Eagles",
        },
        {
            title: "TUA TAG",
            image: "/images/tua.webp",
            content:"1 QB",
            description: "Miami Dolphins",
        },
        {
            title: "TYREEK HILL",
            image: "/images/tyreek.png",
            content:"10 WR",
            description: "Miami Dolphins",
        },
        {
            title: "XAVIER WORTHY",
            image: "/images/worthy.png",
            content:"1 WR",
            description: "Kansas City Chiefs",
        },
        {
            title: "CHRIS MCCAFREY",
            image: "/images/christian.png",
            content:"23 RB",
            description: "San Fran 49ers",
        },
        
    ]
    
    const handlePickPlayer = (player) => {
        setPickedPlayers((prevPickedPlayers) => {
    
            if (prevPickedPlayers.some(p => p.title === player.title)) {
                alert(`${player.title} is already picked.`);
                return prevPickedPlayers;
            }
            return [...prevPickedPlayers, player];
        });
    };

    const handleGoToTeamPage = () => {
        navigate('/contact', { state: { pickedPlayers } });  
    };

    return (
        <div className="home">
            <h2>Make Your Pick</h2>

            <div className="list">
                {posts.map(p => (
                    <div className="post" key={p.title}>
                        <h5>{p.title}</h5>
                        <img src={p.image} alt={p.title} />
                        <p>{p.content}</p>
                        <h2>{p.description}</h2>
                        <button className="pick-btn" onClick={() => handlePickPlayer(p)}>
                            Pick Player
                        </button>
                    </div>
                ))}
            </div>

            <div className="picked-players">
                <h3>Picked Players: {pickedPlayers.length}</h3>
                <button onClick={handleGoToTeamPage} disabled={pickedPlayers.length === 0}>
                    Go to Team Page
                </button>
            </div>
        </div>
    );
}

export default Home;