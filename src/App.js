import React, { useEffect, useState } from "react";
import Board from "./components/Board";


function App() {
    return (
        <div className="App">
            <h1 className="text-center text-[2em] mb-4">hexachess.io</h1>
            <Board />
        </div>
    );
}

export default App;
