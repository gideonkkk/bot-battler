import React from 'react';

const BotItem = ({ bot, onEnlist }) => {
    return (
        <li>
            <h3>{bot.name}</h3>
            <p>{bot.description}</p>
            <button onClick={() => onEnlist(bot)}>Enlist</button>
        </li>
    );
};

export default BotItem;