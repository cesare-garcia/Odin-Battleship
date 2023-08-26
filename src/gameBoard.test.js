const gameBoardFactory = require("./gameBoard");

test.skip("the gameboard Factory function returns an object with a board property housing an array with 10 elements, a property that counts sunken ships, and a property that determines whether the game is over", () => {
    const gameBoardOne = gameBoardFactory();

    expect(gameBoardOne.getBoard().length).toBe(10);
    expect(gameBoardOne.getBoard()[0].length).toBe(10);
    expect(gameBoardOne.getBoard()[1].length).toBe(10);
    expect(gameBoardOne.getBoard()[2].length).toBe(10);
    expect(gameBoardOne.getBoard()[3].length).toBe(10);
    expect(gameBoardOne.getBoard()[4].length).toBe(10);
    expect(gameBoardOne.getBoard()[5].length).toBe(10);
    expect(gameBoardOne.getBoard()[6].length).toBe(10);
    expect(gameBoardOne.getBoard()[7].length).toBe(10);
    expect(gameBoardOne.getBoard()[8].length).toBe(10);
    expect(gameBoardOne.getBoard()[9].length).toBe(10);
    expect(gameBoardOne.sunkenCount).toBe(0);
    expect(gameBoardOne.gameOver).toBe(false);
});

test.skip("Calls the ship Factory function and places it properly at a starting coordinate with a horizontal orientation (destroyer - success).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.placeShip(2, 3, 3);
    
    expect(gameBoardOne.getBoard()[3][3].hits).toBe(0);
    expect(gameBoardOne.getBoard()[3][4].hits).toBe(0);
    expect(gameBoardOne.getBoard()[3][3].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[3][4].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[3][3].shipLength).toBe(2);
    expect(gameBoardOne.getBoard()[3][4].shipLength).toBe(2);
});

test.skip("Calls the ship Factory function and places it properly at a starting coordinate with a horizontal orientation (carrier - success).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.placeShip(5, 3, 3);

    expect(gameBoardOne.getBoard()[3][3].hits).toBe(0);
    expect(gameBoardOne.getBoard()[3][4].hits).toBe(0);
    expect(gameBoardOne.getBoard()[3][5].hits).toBe(0);
    expect(gameBoardOne.getBoard()[3][6].hits).toBe(0);
    expect(gameBoardOne.getBoard()[3][7].hits).toBe(0);
    expect(gameBoardOne.getBoard()[3][3].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[3][4].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[3][5].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[3][6].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[3][7].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[3][3].shipLength).toBe(5);
    expect(gameBoardOne.getBoard()[3][4].shipLength).toBe(5);
    expect(gameBoardOne.getBoard()[3][5].shipLength).toBe(5);
    expect(gameBoardOne.getBoard()[3][6].shipLength).toBe(5);
    expect(gameBoardOne.getBoard()[3][7].shipLength).toBe(5);

});

test.skip("Calls the ship Factory function and does NOT place it at the starting Coord because there isn't space for it (destroyer - horizontal failure).", () => {
    
    const gameBoardOne = gameBoardFactory();
    expect(gameBoardOne.placeShip(2, 9, 9)).toBe("Not enough space. Cannot place destroyer here.");
});

test.skip("Calls the ship Factory function and does NOT place it at the starting Coord because there isn't space for it (carrier - horizontal failure).", () => {
    
    const gameBoardOne = gameBoardFactory();
    expect(gameBoardOne.placeShip(5, 6, 6)).toBe("Not enough space. Cannot place carrier here.");
});

test.skip("Calls the ship Factory function and places it properly at a starting coordinate with a vertical orientation (carrier - success).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.rotateShip();
    gameBoardOne.placeShip(5, 3, 3);

    expect(gameBoardOne.getShipOrientation()).toBe(false);
    expect(gameBoardOne.getBoard()[3][3].hits).toBe(0);
    expect(gameBoardOne.getBoard()[4][3].hits).toBe(0);
    expect(gameBoardOne.getBoard()[5][3].hits).toBe(0);
    expect(gameBoardOne.getBoard()[6][3].hits).toBe(0);
    expect(gameBoardOne.getBoard()[7][3].hits).toBe(0);
    expect(gameBoardOne.getBoard()[3][3].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[4][3].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[5][3].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[6][3].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[7][3].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[3][3].shipLength).toBe(5);
    expect(gameBoardOne.getBoard()[4][3].shipLength).toBe(5);
    expect(gameBoardOne.getBoard()[5][3].shipLength).toBe(5);
    expect(gameBoardOne.getBoard()[6][3].shipLength).toBe(5);
    expect(gameBoardOne.getBoard()[7][3].shipLength).toBe(5);

});

test.skip("Calls the ship Factory function and places it properly at a starting coordinate with a vertical orientation (destroyer - success).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.rotateShip();
    gameBoardOne.placeShip(2, 3, 3);
    
    expect(gameBoardOne.getBoard()[3][3].hits).toBe(0);
    expect(gameBoardOne.getBoard()[4][3].hits).toBe(0);
    expect(gameBoardOne.getBoard()[3][3].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[4][3].sunkStatus).toBe(false);
    expect(gameBoardOne.getBoard()[3][3].shipLength).toBe(2);
    expect(gameBoardOne.getBoard()[4][3].shipLength).toBe(2);
});

test.skip("Calls the ship Factory function and does NOT place it at the starting Coord because there isn't space for it (destroyer - vertical failure).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.rotateShip();
    expect(gameBoardOne.placeShip(2, 9, 9)).toBe("Not enough space. Cannot place destroyer here.");
});

test.skip("Calls the ship Factory function and does NOT place it at the starting Coord because there isn't space for it (carrier - vertical failure).", () => {
    
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.rotateShip();
    expect(gameBoardOne.placeShip(5, 6, 6)).toBe("Not enough space. Cannot place carrier here.");
});

test("Takes a pair of coordinates and correctly determines the ship has been hit, sends the hit to the correct ship, and changes element of coordinate to X (horizontal test).", () => {
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.placeShip(2,2,2);
    gameBoardOne.receiveAttack(2,2);
    gameBoardOne.receiveAttack(2,3);
    
    expect(gameBoardOne.getBoard()[2][2]).toBe("X");
    expect(gameBoardOne.getBoard()[2][3]).toBe("X");
    expect(gameBoardOne.getSunkenCount()).toBe(1);
    expect(gameBoardOne.receiveAttack(2,2)).toBe("You cannot strike the same spot twice");
});

test("Takes a pair of coordinates and correctly determines the ship has been hit, sends the hit to the correct ship, and changes element of coordinate to X (vertical test).", () => {
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.rotateShip();
    gameBoardOne.placeShip(2,2,2);
    gameBoardOne.receiveAttack(2,2);
    gameBoardOne.receiveAttack(2,3);
    gameBoardOne.receiveAttack(3,2);
    
    expect(gameBoardOne.getBoard()[2][2]).toBe("X");
    expect(gameBoardOne.getBoard()[2][3]).toBe("M");
    expect(gameBoardOne.getBoard()[3][2]).toBe("X");
    expect(gameBoardOne.getSunkenCount()).toBe(1);
    expect(gameBoardOne.receiveAttack(2,2)).toBe("You cannot strike the same spot twice");
});

test.skip("Records an attack as missed (M) within the gameboard if it does not hit a ship.", () => {
    const gameBoardOne = gameBoardFactory();
    gameBoardOne.receiveAttack(0,0);

    expect(gameBoardOne.getBoard()[0][0]).toBe("M");
});

// test("Correctly reports that all ships have been sunk.", () => {
    
//     // this is going to require a ton of code
    
//     expect().toBe();
// });

// test("Correctly reports that NOT all ships have been sunk.", () => {
//     const gameBoardOne = gameBoardFactory();
//     gameBoardOne.allSunk();

//     expect(gameBoardOne.gameOver).toBe(false);
// });