import React from 'react';
import { Link } from 'react-router-dom';

const BotCollection = ({ bots, enlistBot }) => {
    return (
        <div>
            <h2>Available Bots</h2>
            <ul>
                {bots.map(bot => (
                    <li key={bot.id}>
                        <strong>{bot.name}</strong>
                        <button onClick={() => enlistBot(bot)}>Enlist</button>
                    </li>
                ))}
            </ul>
            <Link to="/your-army">View Your Bot Army</Link>
        </div>
    );
};

export default BotCollection;