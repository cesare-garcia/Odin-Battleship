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

    const shipFactory = (shipLength, cruiserStatus) => {
   
        return {
            shipLength,
            hits: 0,
            sunkStatus: false,
            cruiserStatus,
            hit: function() {
                this.hits++;
            },
            isSunk: function() {
                if (this.shipLength === this.hits) this.sunkStatus = true;
            }
        };
    };
    
    const placeShip = (shipLength, yCoord, xCoord, cruiserStat) => {
        if (shipLength === 5) {
            let carrier = shipFactory(shipLength, null);
            if (getShipOrientation()) {
                if (board[yCoord].length - xCoord >= shipLength){
                    for (let i = xCoord; i < xCoord + shipLength; i++) {
                        board[yCoord][i] = carrier;
                    }
                    if (!placedShips.includes("carrier")) placedShips.push("carrier");

                } else {
                    return "Not enough space. Cannot place carrier here.";

                }

            } else {
                if (board.length - yCoord >= shipLength) {
                    for (let i = yCoord; i < yCoord + shipLength; i++) {
                        board[i][xCoord] = carrier;
                    }
                    if (!placedShips.includes("carrier")) placedShips.push("carrier");

                } else {
                    return "Not enough space. Cannot place carrier here.";

                }

            }

        } else if (shipLength === 4) {
            let battleship = shipFactory(shipLength, null);
            if (getShipOrientation()) {
                if (board[yCoord].length - xCoord >= shipLength){
                    for (let i = xCoord; i < xCoord + shipLength; i++) {
                        board[yCoord][i] = battleship;
                    }
                    if (!placedShips.includes("battleship")) placedShips.push("battleship");

                } else {
                    return "Not enough space. Cannot place battleship here.";

                }

            } else {
                if (board.length - yCoord >= shipLength) {
                    for (let i = yCoord; i < yCoord + shipLength; i++) {
                        board[i][xCoord] = battleship;
                    }
                    if (!placedShips.includes("battleship")) placedShips.push("battleship");

                } else {
                    return "Not enough space. Cannot place battleship here.";

                }

            }
         
        } else if (shipLength === 3) {
            if (cruiserStat) {
                let cruiser = shipFactory(shipLength, true);
                if (getShipOrientation()) {
                    if (board[yCoord].length - xCoord >= shipLength){
                        for (let i = xCoord; i < xCoord + shipLength; i++) {
                            board[yCoord][i] = cruiser;
                        }
                        if (!placedShips.includes("cruiser")) placedShips.push("cruiser");

                    } else {
                        return "Not enough space. Cannot place cruiser here.";

                    }
    
                } else {
                    if (board.length - yCoord >= shipLength) {
                        for (let i = yCoord; i < yCoord + shipLength; i++) {
                            board[i][xCoord] = cruiser;
                        }
                        if (!placedShips.includes("cruiser")) placedShips.push("cruiser");

                    } else {
                        return "Not enough space. Cannot place cruiser here.";

                    }

                }
    
            } else {
                let submarine = shipFactory(shipLength, false);
                if (getShipOrientation()) {
                    if (board[yCoord].length - xCoord >= shipLength){
                        for (let i = xCoord; i < xCoord + shipLength; i++) {
                            board[yCoord][i] = submarine;
                        }
                        if (!placedShips.includes("submarine")) placedShips.push("submarine");

                    } else {
                        return "Not enough space. Cannot place submarine here.";

                    }
    
                } else {
                    if (board.length - yCoord >= shipLength) {
                        for (let i = yCoord; i < yCoord + shipLength; i++) {
                            board[i][xCoord] = submarine;
                        }
                        if (!placedShips.includes("submarine")) placedShips.push("submarine");

                    } else {
                        return "Not enough space. Cannot place submarine here.";

                    }

                }

            }

        } else {
            let destroyer = shipFactory(shipLength, null);
            if (getShipOrientation()) {
                if (board[yCoord].length - xCoord >= shipLength){
                    for (let i = xCoord; i < xCoord + shipLength; i++) {
                        board[yCoord][i] = destroyer;
                    }
                    if (!placedShips.includes("destroyer")) placedShips.push("destroyer");

                } else {
                    return "Not enough space. Cannot place destroyer here.";

                }

            } else {
                if (board.length - yCoord >= shipLength) {
                    for (let i = yCoord; i < yCoord + shipLength; i++) {
                        board[i][xCoord] = destroyer;
                    }
                    if (!placedShips.includes("destroyer")) placedShips.push("destroyer");

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
            return "X";

        } else if (board[yCoord][xCoord] === "M" || board[yCoord][xCoord] === "X") {
            return "You cannot strike the same spot twice";

        } else {
            board[yCoord][xCoord] = "M";
            return "M"

        }   

    };

    const allSunk = () => {
        if (maxSunken === getSunkenCount()) {
            return true;

        } else {
            return false;
            
        }

    };

    const getShips = () => {
        return placedShips;
        
    }

    return {
        getBoard,
        getGameStatus,
        getSunkenCount,
        rotateShip,
        getShipOrientation, 
        placeShip,
        receiveAttack,
        getShips
    };
};
// module.exports = gameBoardFactory;

export default gameBoardFactory;