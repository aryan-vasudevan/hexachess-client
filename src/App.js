import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board"; 

function App() {
    // State variable to hold the game ID
    const [gameId, setGameId] = useState();

    // Create a new game when the component mounts and set the game ID
    useEffect(() => {
        const createNewGame = async () => {
            try {
                // Send POST request to create a new game
                const res = await axios.post("/api/new-game");
                // Set the gameId state with the returned game ID
                setGameId(res.data._id);
            } catch (error) {
                console.error("Error creating new game:", error);
            }
        };

        createNewGame();
    }, []); // Run once only

    return (
        <div className="App">
            <h1 className="text-center text-[2em] mb-4">hexachess.io</h1>
            {gameId != null && <Board gameId={gameId} />}
        </div>
    );
}

export default App;
