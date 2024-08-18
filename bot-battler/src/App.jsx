import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';


function App() {
    const [bots, setBots] = useState([]);
    const [yourArmy, setYourArmy] = useState([]);

    const fetchBots = async () => {
        try {
            const response = await fetch('http://localhost:5000/bots');
            const data = await response.json();
            setBots(data);
        } catch (error) {
            console.error("Failed to fetch:", error);
        }
    };

    useEffect(() => {
        fetchBots();
    }, []);

    const enlistBot = (bot) => {
        if (!yourArmy.find((b) => b.id === bot.id)) {
            setYourArmy([...yourArmy, bot]);
        }
    };

    const releaseBot = (bot) => {
        setYourArmy(yourArmy.filter((b) => b.id !== bot.id));
    };

    const dischargeBot = async (botId) => {
        await fetch(`http://localhost:5000/bots/${botId}`, { method: 'DELETE' });
        releaseBot({ id: botId }); // Update state on discharge
    };

    return (
        <Router>
            <div className="App">
                <h1>Bot Battlr</h1>
                <Routes>
                    <Route path="/" element={<BotCollection bots={bots} enlistBot={enlistBot} />} />
                    <Route path="/your-army" element={<YourBotArmy yourArmy={yourArmy} dischargeBot={dischargeBot} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;