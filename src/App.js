import React, { useEffect, useState } from "react";
import tile from "./img/tile.png";

function App() {
    return (
        <div className="App">
            <h1 className="text-center text-[2em]">hexachess.io</h1>
            <img src={tile} alt="tile" height={40} width={40} />
        </div>
    );
}

export default App;
