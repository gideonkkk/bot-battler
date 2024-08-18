import React from 'react';

const YourBotArmy = ({ yourArmy, dischargeBot }) => {
    return (
        <div>
            <h2>Your Bot Army</h2>
            {yourArmy.length === 0 ? (
                <p>You have no bots enlisted in your army.</p>
            ) : (
                <ul>
                    {yourArmy.map(bot => (
                        <li key={bot.id}>
                            <strong>{bot.name}</strong>
                            <button onClick={() => dischargeBot(bot.id)}>X</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default YourBotArmy;