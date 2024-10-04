import React from "react";
import tile from "../img/tile.png";

function Piece(props) {
    let positions = {
        1: "bishopB",
    };

    return (
        <div className="absolute z-10 bottom-[12px] left-[27px]">
            {/* Only render the piece if there is a piece on the tile */}
            {positions[props.tileId] != null && (
                <img
                    src={require(`../img/pieces/${
                        positions[props.tileId]
                    }.png`)}
                    width={40}
                />
            )}
        </div>
    );
}

// Tile component
function Tile(props) {
    
    return (
        <div className="relative">
            <img
                src={tile}
                className="mx-[17px] my-[-16.5px]"
                alt="tile"
                height={60}
                width={60}
            />
            <Piece tileId={props.id}/>
            
        </div>
    );
}


// The Board component
function Board() {
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
            {boardMap.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex}>
                            {cell[0] === "t" ? (
                                <Tile id={cell.slice(1)} />
                            ) : null}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
