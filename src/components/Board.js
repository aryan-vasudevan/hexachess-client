import React from "react";
import tile from "../img/tile.png";

// Tile component
function Tile() {
    return (
        <img
            src={tile}
            className="mx-[17px] my-[-16.5px]"
            alt="tile"
            height={60}
            width={60}
        />
    );
}

// The Board component
function Board() {
    // The board layout
    let boardMap = [
        ["", "", "", "", "", "t", "", "", "", "", ""],
        ["", "", "", "", "t", "", "t", "", "", "", ""],
        ["", "", "", "t", "", "t", "", "t", "", "", ""],
        ["", "", "t", "", "t", "", "t", "", "t", "", ""],
        ["", "t", "", "t", "", "t", "", "t", "", "t", ""],
        ["t", "", "t", "", "t", "", "t", "", "t", "", "t"],
        ["", "t", "", "t", "", "t", "", "t", "", "t", ""],
        ["t", "", "t", "", "t", "", "t", "", "t", "", "t"],
        ["", "t", "", "t", "", "t", "", "t", "", "t", ""],
        ["t", "", "t", "", "t", "", "t", "", "t", "", "t"],
        ["", "t", "", "t", "", "t", "", "t", "", "t", ""],
        ["t", "", "t", "", "t", "", "t", "", "t", "", "t"],
        ["", "t", "", "t", "", "t", "", "t", "", "t", ""],
        ["t", "", "t", "", "t", "", "t", "", "t", "", "t"],
        ["", "t", "", "t", "", "t", "", "t", "", "t", ""],
        ["t", "", "t", "", "t", "", "t", "", "t", "", "t"],
        ["", "t", "", "t", "", "t", "", "t", "", "t", ""],
        ["", "", "t", "", "t", "", "t", "", "t", "", ""],
        ["", "", "", "t", "", "t", "", "t", "", "", ""],
        ["", "", "", "", "t", "", "t", "", "", "", ""],
        ["", "", "", "", "", "t", "", "", "", "", ""],
    ];

    return (
        <div>
            {boardMap.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex}>
                            {cell === "t" ? <Tile /> : null}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
