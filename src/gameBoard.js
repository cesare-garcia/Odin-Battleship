const gameBoardFactory = () => {
    
    let placedShips = [];
    let sunkenCount = 0;
    const maxSunken = 5;
    let gameOver = false;
    let board = [];
    for (let i = 0; i < 10; i++) {
        board.push([]);
        for (let j = 0; j < 10; j++) {
            board[i].push("");
        }
    }

    const getBoard = () => {
        return board;
    };

    const getSunkenCount = () => {
        return sunkenCount;
    };

    const getGameStatus = () => {
        return gameOver;
    }; 

    // true = horizontal, false = vertical
    let shipOrientation = true;

    const rotateShip = () => {
        if (shipOrientation) {
            shipOrientation = false;
            return shipOrientation;
        } else {
            shipOrientation = true;
            return shipOrientation;
        } 
    };

    const getShipOrientation = () => {
        return shipOrientation;
    };

    const shipFactory = (shipLength) => {
   
        return {
            shipLength,
            hits: 0,
            sunkStatus: false,
            hit: function() {
                this.hits++;
            },
            isSunk: function() {
                if (this.shipLength === this.hits) this.sunkStatus = true;
            }
        };
    };
    
    const placeShip = (shipLength, yCoord, xCoord) => {
        if (shipLength === 5) {
            let carrier = shipFactory(shipLength);
            placedShips.push(carrier);
            if (getShipOrientation()) {
                console.log(getShipOrientation());
                // if the remaining spaces in the array allow for a five lengther
                if (board[yCoord].length - xCoord >= shipLength){
                    for (let i = xCoord; i < xCoord + shipLength; i++) {
                        board[yCoord][i] = carrier;
                    }
                } else {
                    return "Not enough space. Cannot place carrier here.";
                }

            } else {
                // if the remaining spaces in the array allow for a five lengther
                if (board.length - yCoord >= shipLength) {
                    for (let i = yCoord; i < yCoord + shipLength; i++) {
                        board[i][xCoord] = carrier;
                    }
                } else {
                    return "Not enough space. Cannot place carrier here.";
                }
            }

        } else if (shipLength === 4) {
            let battleship = shipFactory(length);
            placedShips.push(battleship);
            if (getShipOrientation()) {
                // if the remaining spaces in the array allow for a five lengther
                if (board[yCoord].length - xCoord >= shipLength){
                    for (let i = xCoord; i < xCoord + shipLength; i++) {
                        board[yCoord][i] = battleship;
                    }
                } else {
                    return "Not enough space. Cannot place battleship here.";
                }

            } else {
                // if the remaining spaces in the array allow for a five lengther
                if (board.length - yCoord >= shipLength) {
                    for (let i = yCoord; i < yCoord + shipLength; i++) {
                        board[i][xCoord] = battleship;
                    }
                } else {
                    return "Not enough space. Cannot place battleship here.";
                }
            }
         
        } else if (shipLength === 3) {
            let cruiserPresence = false;
            for (let i = 0; i < placedShips.length; i++) {
                if (placedShips[i] === "cruiser") {
                    cruiserPresence = true;
                }
            }

            if (!cruiserPresence) {
                let cruiser = shipFactory(length);
                placedShips.push(cruiser);
                if (getShipOrientation()) {
                    // if the remaining spaces in the array allow for a five lengther
                    if (board[yCoord].length - xCoord >= shipLength){
                        for (let i = xCoord; i < xCoord + shipLength; i++) {
                            board[yCoord][i] = cruiser;
                        }
                    } else {
                        return "Not enough space. Cannot place cruiser here.";
                    }
    
                } else {
                    // if the remaining spaces in the array allow for a five lengther
                    if (board.length - yCoord >= shipLength) {
                        for (let i = yCoord; i < yCoord + shipLength; i++) {
                            board[i][xCoord] = cruiser;
                        }
                    } else {
                        return "Not enough space. Cannot place cruiser here.";
                    }
                }
    
            } else {
                let submarine = shipFactory(length);
                placedShips.push(submarine);
                if (getShipOrientation()) {
                    // if the remaining spaces in the array allow for a five lengther
                    if (board[yCoord].length - xCoord >= shipLength){
                        for (let i = xCoord; i < xCoord + shipLength; i++) {
                            board[yCoord][i] = submarine;
                        }
                    } else {
                        return "Not enough space. Cannot place submarine here.";
                    }
    
                } else {
                    // if the remaining spaces in the array allow for a five lengther
                    if (board.length - yCoord >= shipLength) {
                        for (let i = yCoord; i < yCoord + shipLength; i++) {
                            board[i][xCoord] = submarine;
                        }
                    } else {
                        return "Not enough space. Cannot place submarine here.";
                    }
                }

            }

        } else {
            let destroyer = shipFactory(2);
            placedShips.push(destroyer);
            if (getShipOrientation()) {
                // if the remaining spaces in the array allow for a five lengther
                if (board[yCoord].length - xCoord >= shipLength){
                    for (let i = xCoord; i < xCoord + shipLength; i++) {
                        board[yCoord][i] = destroyer;
                    }
                } else {
                    return "Not enough space. Cannot place destroyer here.";
                }

            } else {
                // if the remaining spaces in the array allow for a five lengther
                if (board.length - yCoord >= shipLength) {
                    for (let i = yCoord; i < yCoord + shipLength; i++) {
                        board[i][xCoord] = destroyer;
                    }
                } else {
                    return "Not enough space. Cannot place destroyer here.";
                }
            }
        }
    };

    const receiveAttack = (yCoord, xCoord) => {

        if (board[yCoord][xCoord] !== "" && board[yCoord][xCoord] !== "M" && board[yCoord][xCoord] !== "X") {
            board[yCoord][xCoord].hit();
            board[yCoord][xCoord].isSunk();
            if (board[yCoord][xCoord].sunkStatus) sunkenCount++;
            board[yCoord][xCoord] = "X";

            if (allSunk()) {
                gameOver = true;
                return gameOver;
            }

        } else if (board[yCoord][xCoord] === "M" || board[yCoord][xCoord] === "X") {
            return "You cannot strike the same spot twice";

        } else {
            board[yCoord][xCoord] = "M";

        }   
    };

    const allSunk = () => {
        if (maxSunken === getSunkenCount()) {
            return true;
        } else {
            return false;
        }
    };

    return {
        getBoard,
        getGameStatus,
        getSunkenCount,
        rotateShip,
        getShipOrientation, 
        placeShip,
        receiveAttack
    };
};
module.exports = gameBoardFactory;

// note to self -> i don't think shipFactory will be returned, rather it will assist another method

// let gameBoardOne = gameBoardFactory();
// gameBoardOne.rotateShip();
// gameBoardOne.placeShip(5,3,3);
// console.log(gameBoardOne.board);