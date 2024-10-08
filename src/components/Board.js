import React, { useState, useEffect } from "react";
import axios from "axios";
import tile from "../img/tile.png";

// Piece component
function Piece({ tileId, positions }) {
    // Use positions to render pieces on the board
    return (
        <div className="absolute z-10 bottom-[12px] left-[27px]">
            {/* Only render the piece if there is a piece on the tile */}
            {positions && positions[tileId] && (
                <img
                    src={require(`../img/pieces/${
                        isNaN(positions[tileId].slice(-1))
                            ? positions[tileId]
                            : positions[tileId].slice(0, -1)
                    }.png`)}
                    width={40}
                    alt={positions[tileId]}
                    onClick={console.log(`Piece clicked: ${positions[tileId]}`)}
                />
            )}
        </div>
    );
}

// Tile component
function Tile({ id, gameId, positions }) {
    return (
        <div className="relative">
            <img
                src={tile}
                className="mx-[17px] my-[-16.5px]"
                alt="tile"
                height={60}
                width={60}
                onClick={() => {
                    console.log(`Tile clicked: ${id}`);
                }}
            />
            <Piece tileId={id} gameId={gameId} positions={positions} />
        </div>
    );
}

// The Board component
function Board({ gameId }) {
    const [positions, setPositions] = useState({}); // State to hold the board positions

    // Function to fetch game positions from the backend
    const fetchGamePositions = async () => {
        try {
            // Make a GET request using the gameId prop
            const response = await axios.get(`/api/game/${gameId}`);
            setPositions(response.data.boardState); // Update the positions state with fetched data
        } catch (error) {
            console.error("Error fetching game positions:", error);
        }
    };

    // Fetch the game positions when the component mounts or when gameId changes
    useEffect(() => {
        if (gameId) {
            fetchGamePositions();
        }
    }, [gameId]);

    // The board layout
    let boardMap = [
        ["", "", "", "", "", "t1", "", "", "", "", ""], // Row 1
        ["", "", "", "", "t2", "", "t3", "", "", "", ""], // Row 2
        ["", "", "", "t4", "", "t5", "", "t6", "", "", ""], // Row 3
        ["", "", "t7", "", "t8", "", "t9", "", "t10", "", ""], // Row 4
        ["", "t11", "", "t12", "", "t13", "", "t14", "", "t15", ""], // Row 5
        ["t16", "", "t17", "", "t18", "", "t19", "", "t20", "", "t21"], // Row 6
        ["", "t22", "", "t23", "", "t24", "", "t25", "", "t26", ""], // Row 7
        ["t27", "", "t28", "", "t29", "", "t30", "", "t31", "", "t32"], // Row 8
        ["", "t33", "", "t34", "", "t35", "", "t36", "", "t37", ""], // Row 9
        ["t38", "", "t39", "", "t40", "", "t41", "", "t42", "", "t43"], // Row 10
        ["", "t44", "", "t45", "", "t46", "", "t47", "", "t48", ""], // Row 11
        ["t49", "", "t50", "", "t51", "", "t52", "", "t53", "", "t54"], // Row 12
        ["", "t55", "", "t56", "", "t57", "", "t58", "", "t59", ""], // Row 13
        ["t60", "", "t61", "", "t62", "", "t63", "", "t64", "", "t65"], // Row 14
        ["", "t66", "", "t67", "", "t68", "", "t69", "", "t70", ""], // Row 15
        ["t71", "", "t72", "", "t73", "", "t74", "", "t75", "", "t76"], // Row 16
        ["", "t77", "", "t78", "", "t79", "", "t80", "", "t81", ""], // Row 17
        ["", "", "t82", "", "t83", "", "t84", "", "t85", "", ""], // Row 18
        ["", "", "", "t86", "", "t87", "", "t88", "", "", ""], // Row 19
        ["", "", "", "", "t89", "", "t90", "", "", "", ""], // Row 20
        ["", "", "", "", "", "t91", "", "", "", "", ""], // Row 21
    ];

    return (
        <div>
            {/* Render the board using the boardMap layout */}
            {boardMap.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex}>
                            {cell[0] === "t" ? (
                                <Tile
                                    id={cell.slice(1)}
                                    gameId={gameId}
                                    positions={positions}
                                />
                            ) : null}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
