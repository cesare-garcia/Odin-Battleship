const gameBoardFactory = require("./gameBoard");
// may need to const ship for some of these

// test("the gameboard Factory function returns an object with a board property housing an array with 10 elements, a property that counts sunken ships, and a property that determines whether the game is over", () => {
//     const gameBoardOne = gameBoardFactory();

//     expect(gameBoardOne.board.length).toBe(10);
//     expect(gameBoardOne.board[0].length).toBe(10);
//     expect(gameBoardOne.board[1].length).toBe(10);
//     expect(gameBoardOne.board[2].length).toBe(10);
//     expect(gameBoardOne.board[3].length).toBe(10);
//     expect(gameBoardOne.board[4].length).toBe(10);
//     expect(gameBoardOne.board[5].length).toBe(10);
//     expect(gameBoardOne.board[6].length).toBe(10);
//     expect(gameBoardOne.board[7].length).toBe(10);
//     expect(gameBoardOne.board[8].length).toBe(10);
//     expect(gameBoardOne.board[9].length).toBe(10);
//     expect(gameBoardOne.sunkenCount).toBe(0);
//     expect(gameBoardOne.gameOver).toBe(false);
// });

test("Calls the ship Factory function and places it properly at a starting coordinate with a horizontal orientation (destroyer - success).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.placeShip(2, 3, 3);
    
    expect(gameBoardOne.board[3][3].hits).toBe(0);
    expect(gameBoardOne.board[3][4].hits).toBe(0);
    expect(gameBoardOne.board[3][3].sunkStatus).toBe(false);
    expect(gameBoardOne.board[3][4].sunkStatus).toBe(false);
    expect(gameBoardOne.board[3][3].shipLength).toBe(2);
    expect(gameBoardOne.board[3][4].shipLength).toBe(2);
});

test("Calls the ship Factory function and places it properly at a starting coordinate with a horizontal orientation (carrier - success).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.placeShip(5, 3, 3);

    expect(gameBoardOne.board[3][3].hits).toBe(0);
    expect(gameBoardOne.board[3][4].hits).toBe(0);
    expect(gameBoardOne.board[3][5].hits).toBe(0);
    expect(gameBoardOne.board[3][6].hits).toBe(0);
    expect(gameBoardOne.board[3][7].hits).toBe(0);
    expect(gameBoardOne.board[3][3].sunkStatus).toBe(false);
    expect(gameBoardOne.board[3][4].sunkStatus).toBe(false);
    expect(gameBoardOne.board[3][5].sunkStatus).toBe(false);
    expect(gameBoardOne.board[3][6].sunkStatus).toBe(false);
    expect(gameBoardOne.board[3][7].sunkStatus).toBe(false);
    expect(gameBoardOne.board[3][3].shipLength).toBe(5);
    expect(gameBoardOne.board[3][4].shipLength).toBe(5);
    expect(gameBoardOne.board[3][5].shipLength).toBe(5);
    expect(gameBoardOne.board[3][6].shipLength).toBe(5);
    expect(gameBoardOne.board[3][7].shipLength).toBe(5);

});

test("Calls the ship Factory function and does NOT place it at the starting Coord because there isn't space for it (destroyer - horizontal failure).", () => {
    
    const gameBoardOne = gameBoardFactory();
    expect(gameBoardOne.placeShip(2, 9, 9)).toBe("Not enough space. Cannot place destroyer here.");
});

test("Calls the ship Factory function and does NOT place it at the starting Coord because there isn't space for it (carrier - horizontal failure).", () => {
    
    const gameBoardOne = gameBoardFactory();
    expect(gameBoardOne.placeShip(5, 6, 6)).toBe("Not enough space. Cannot place carrier here.");
});

test("Calls the ship Factory function and places it properly at a starting coordinate with a vertical orientation (carrier - success).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.rotateShip();
    gameBoardOne.placeShip(5, 3, 3);

    expect(gameBoardOne.getShipOrientation()).toBe(false);
    expect(gameBoardOne.board[3][3].hits).toBe(0);
    expect(gameBoardOne.board[4][3].hits).toBe(0);
    expect(gameBoardOne.board[5][3].hits).toBe(0);
    expect(gameBoardOne.board[6][3].hits).toBe(0);
    expect(gameBoardOne.board[7][3].hits).toBe(0);
    expect(gameBoardOne.board[3][3].sunkStatus).toBe(false);
    expect(gameBoardOne.board[4][3].sunkStatus).toBe(false);
    expect(gameBoardOne.board[5][3].sunkStatus).toBe(false);
    expect(gameBoardOne.board[6][3].sunkStatus).toBe(false);
    expect(gameBoardOne.board[7][3].sunkStatus).toBe(false);
    expect(gameBoardOne.board[3][3].shipLength).toBe(5);
    expect(gameBoardOne.board[4][3].shipLength).toBe(5);
    expect(gameBoardOne.board[5][3].shipLength).toBe(5);
    expect(gameBoardOne.board[6][3].shipLength).toBe(5);
    expect(gameBoardOne.board[7][3].shipLength).toBe(5);

});

test("Calls the ship Factory function and places it properly at a starting coordinate with a vertical orientation (destroyer - success).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.rotateShip();
    gameBoardOne.placeShip(2, 3, 3);
    
    expect(gameBoardOne.board[3][3].hits).toBe(0);
    expect(gameBoardOne.board[4][3].hits).toBe(0);
    expect(gameBoardOne.board[3][3].sunkStatus).toBe(false);
    expect(gameBoardOne.board[4][3].sunkStatus).toBe(false);
    expect(gameBoardOne.board[3][3].shipLength).toBe(2);
    expect(gameBoardOne.board[4][3].shipLength).toBe(2);
});

test("Calls the ship Factory function and does NOT place it at the starting Coord because there isn't space for it (destroyer - vertical failure).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.rotateShip();
    expect(gameBoardOne.placeShip(2, 9, 9)).toBe("Not enough space. Cannot place destroyer here.");
});

test("Calls the ship Factory function and does NOT place it at the starting Coord because there isn't space for it (carrier - vertical failure).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.rotateShip();
    expect(gameBoardOne.placeShip(5, 6, 6)).toBe("Not enough space. Cannot place carrier here.");
});


// test("Calls the ship Factory function and places it properly at a starting coordinate with a vertical orientation", () => {
    
//     const gameBoardOne = gameBoardFactory();
//     const patrol = shipFactory(2);
//     gameBoardOne.placeShip(patrol, 3, 3);
    
//     expect(gameBoardOne.board[3,3]).toBe(patrol);
//     expect(gameBoardOne.board[4,3]).toBe(patrol);
// });

// test("Takes a pair of coordinates and correctly determines the ship has been hit, sends the hit to the correct ship, and changes element of coordinate to X.", () => {
//     const gameBoardOne = gameBoardFactory();
//     gameBoardOne.receivesAttack(2,2);
    
//     expect(gameBoardOne.board[2,2]).toBe("X");
// });

// test("Records an attack as missed (M) within the gameboard if it does not hit a ship.", () => {
//     const gameBoardOne = gameBoardFactory();
//     gameBoardOne.receivesAttack(0,0);

//     expect(gameBoardOne.board[0][0]).toBe("M");
// });

// test("Correctly reports that all ships have been sunk.", () => {
    
//     // this is going to require a ton of code
    
//     expect().toBe();
// });

// test("Correctly reports that NOT all ships have been sunk.", () => {
//     const gameBoardOne = gameBoardFactory();
//     gameBoardOne.allSunk();

//     expect(gameBoardOne.gameOver).toBe(false);
// });