import React, { useState, useEffect } from 'react';

const Bots = () => {
    const [bots, setBots] = useState([]);

    const fetchBots = async () => {
        try {
            const response = await fetch('http://localhost:5000/bots');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setBots(data);
        } catch (error) {
            console.error("Failed to fetch:", error);
        }
    };

    useEffect(() => {
        fetchBots();
    }, []);

    return (
        <div>
            <h1>Your Bots</h1>
            <ul>
                {bots.map(bot => (
                    <li key={bot.id}>
                        {bot.name} - {bot.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bots;