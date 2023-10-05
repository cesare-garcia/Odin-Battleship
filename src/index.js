import './style.css';
import loadUI from './loadUI';
import gameBoardFactory from './gameBoard';
import prepDivFactory from './prepDivFactory';

const body = document.querySelector("body");
let selectedLength = 5;
const overlayDiv = document.createElement("div");
overlayDiv.classList.add("overlay");
body.appendChild(overlayDiv);
loadUI(body);
const newGameDiv = document.querySelector(".ngDiv");
const gameInformationDiv = document.querySelector(".giDiv");
const pvpButton = document.querySelector(".pvpButton");
const pveButton = document.querySelector(".pveButton");
const pvpForm = document.querySelector(".pvpForm");
const pveForm = document.querySelector(".pveForm");
const pvpSubmitButton = document.querySelector(".pvpSubmit");
const pveSubmitButton = document.querySelector(".pveSubmit");
const prepParent = document.querySelector(".prepParent");
const pvp1Input = document.querySelector("#pvp1Input");
const pvp2Input = document.querySelector("#pvp2Input");
const pve1Input = document.querySelector("#pve1Input");
const gsMessage = document.querySelector(".gsMessage");
const pScoreBoard1 = document.querySelector(".pscoreboard1");
const pScoreBoard2 = document.querySelector(".pscoreboard2");

pvpButton.addEventListener("click", (e) => {
    newGameDiv.classList.add("hide");
    gameInformationDiv.classList.remove("hide");
    pveForm.classList.add("hide");

});

pveButton.addEventListener("click", (e) => {
    newGameDiv.classList.add("hide");
    gameInformationDiv.classList.remove("hide");
    pvpForm.classList.add("hide");

});

pvpSubmitButton.addEventListener("click", (e) => {
    if (pvp1Input.checkValidity() && pvp2Input.checkValidity()) {
        e.preventDefault();
        const name1 = pvp1Input.value;
        const name2 = pvp2Input.value;
        let p1Name = document.querySelector(".p1name");
        p1Name.innerText = name1;
        let p2Name = document.querySelector(".p2name")
        p2Name.innerText = name2;
        let newP1score = document.querySelector(".pscoreboard1");
        let newP2score = document.querySelector(".pscoreboard2");
        newP1score.innerText = `${name1} has 5 ships left.`;
        newP2score.innerText = `${name2} has 5 ships left.`;
        let pvpBoard1 = gameBoardFactory();
        let pvpBoard2 = gameBoardFactory();
        gameInformationDiv.classList.add("hide");
        let pregamePrep1 = prepDivFactory(pvp1Input.value,1);
        let pregamePrep2 = prepDivFactory(pvp2Input.value,2);

        // create players here

        pvpForm.reset();
        prepParent.appendChild(pregamePrep1);
        prepParent.appendChild(pregamePrep2);
        let prepDivP1 = document.querySelector(`[data-PrepDiv="1"]`);
        let prepDivP2 = document.querySelector(`[data-PrepDiv="2"]`);
        prepDivP2.style = "display: none;";
        const prepMessage = document.querySelectorAll(".p_mess")[0];
        const prepMessage2 = document.querySelectorAll(".p_mess")[1];
        const oriH3 = document.querySelector(".oriH3_1");
        const rotate1 = document.querySelector(".rotate_1");
        let cruiserStat;
        const carrier1Div = document.querySelector(".carrier_1");
        const battleship1Div = document.querySelector(".battleship_1");
        const cruiser1Div = document.querySelector(".cruiser_1");
        const submarine1Div = document.querySelector(".submarine_1");
        const destroyer1Div = document.querySelector(".destroyer_1");
        const oriH3_2 = document.querySelector(".oriH3_2");
        const rotate2 = document.querySelector(".rotate_2");
        const carrier2Div = document.querySelector(".carrier_2");
        const battleship2Div = document.querySelector(".battleship_2");
        const cruiser2Div = document.querySelector(".cruiser_2");
        const submarine2Div = document.querySelector(".submarine_2");
        const destroyer2Div = document.querySelector(".destroyer_2");
        let cleanBoard1 = pvpBoard1.getBoard();
        let cleanBoard2 = pvpBoard2.getBoard();
        const prep1Tiles = document.querySelectorAll(".prepboard_a");
        let prepSubmit1 = document.querySelector("[data-submitButton='1']");
        prepSubmit1.disabled = true;
        const prep2Tiles = document.querySelectorAll(".prepboard_b");
        let prepSubmit2 = document.querySelector("[data-submitButton='2']");
        prepSubmit2.disabled = true;
        const gameTilesA = document.querySelectorAll(".board_a");
        const gameTilesB = document.querySelectorAll(".board_b");
        const paintTiles = (board, order) => {
            let boardLayout = board.getBoard();
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const targetPrepBox = document.querySelector(`#${order}_${j}${i}`);
                    (boardLayout[i][j] !== "") ? targetPrepBox.style.backgroundColor = "green" : targetPrepBox.style.backgroundColor = "grey";
                }
            }

        }
        const cleanTheBoard = (board, lengthOfShip, statusOfCruiser) => {
            if (lengthOfShip !== 3) {
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j ++) {
                        if (board[i][j].shipLength === lengthOfShip) board[i][j] = "";
                    }
                }

            } else {
                if (statusOfCruiser) {
                    for (let i = 0; i < 10; i++) {
                        for (let j = 0; j < 10; j ++) {
                            if (board[i][j].cruiserStatus === true) board[i][j] = "";
                        }
                    }

                } else {
                    for (let i = 0; i < 10; i++) {
                        for (let j = 0; j < 10; j ++) {
                            if (board[i][j].cruiserStatus === false) board[i][j] = "";
                        }
                    }

                }

            }
            
        }

        rotate1.addEventListener("click", (e) => {
            pvpBoard1.rotateShip();
            (oriH3.innerText === "Orientation: Horizontal") ? oriH3.innerText = "Orientation: Vertical" : oriH3.innerText = "Orientation: Horizontal"; 

        });

        carrier1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Carrier Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 5;
            carrier1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        battleship1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Battleship Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 4;
            battleship1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        cruiser1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Cruiser Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 3;
            cruiser1Div.classList.add("selected");
            cruiserStat = true;
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        submarine1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Submarine Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 3;
            submarine1Div.classList.add("selected");
            cruiserStat = false;
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        destroyer1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Destroyer Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 2;
            destroyer1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        prep1Tiles.forEach(tiles => tiles.addEventListener("click", (e) => {            
            let tileId = e.target.getAttribute("id");
            let idArray = tileId.split("");
            if (selectedLength === 5) {
                cleanTheBoard(cleanBoard1, 5);
                if (pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+4] === undefined) {
                        prepMessage.innerText = "Message: Error, carrier out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+4] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Carrier placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the carrier here will cause a collision.";

                        }

                    }

                } else if (!pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 5 ) {
                        prepMessage.innerText = "Message: Error, carrier out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+3][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+4][Number(idArray[2])] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Carrier placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the carrier here will cause a collision.";

                        }

                    }

                } 
                    
            } else if (selectedLength === 4) {
                cleanTheBoard(cleanBoard1, 4);
                if (pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === undefined) {
                        prepMessage.innerText = "Message: Error, battleship out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Battleship placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the battleship here will cause a collision.";

                        }

                    }

                } else if (!pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 4 ) {
                        prepMessage.innerText = "Message: Error, battleship out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+3][Number(idArray[2])] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Battleship placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the battleship here will cause a collision.";

                        }

                    }

                } 

            } else if (selectedLength === 3) {
                cleanTheBoard(cleanBoard1, 3, cruiserStat);
                if (pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined) {
                        (cruiserStat) ? prepMessage.innerText = "Message: Error, cruiser out of bounds." : prepMessage.innerText = "Message: Error, submarine out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            (cruiserStat) ? prepMessage.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage.innerText = "Message: Submarine placed, select and place another ship.";

                        } else {
                            (cruiserStat) ? prepMessage.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage.innerText = "Message: Error, placing the submarine here will cause a collision.";

                        }

                    }

                } else if (!pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 3 ) {
                        (cruiserStat) ? prepMessage.innerText = "Message: Error, cruiser out of bounds." : prepMessage.innerText = "Message: Error, submarine out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            (cruiserStat) ? prepMessage.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage.innerText = "Message: Submarine placed, select and place another ship.";
                            
                        } else {
                            (cruiserStat) ? prepMessage.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage.innerText = "Message: Error, placing the submarine here will cause a collision.";

                        }

                    }

                } 

            } else if (selectedLength === 2) {
                cleanTheBoard(cleanBoard1, 2);
                if (pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined) {
                        prepMessage.innerText = "Message: Error, destroyer out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Destroyer placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                        }

                    }

                } else if (!pvpBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 2 ) {
                        prepMessage.innerText = "Message: Error, destroyer out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "") {
                            pvpBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pvpBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pvpBoard1, "a");
                            prepMessage.innerText = "Message: Destroyer placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                        }

                    }

                } 

            }

        }));

        prepSubmit1.addEventListener("click", (e) => {
            prepDivP1.style = "display: none;";
            prepDivP2.style = "display: flex";

            rotate2.addEventListener("click", (e) => {
                pvpBoard2.rotateShip();
                (oriH3_2.innerText === "Orientation: Horizontal") ? oriH3_2.innerText = "Orientation: Vertical" : oriH3_2.innerText = "Orientation: Horizontal";

            });
    
            carrier2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 5;
                carrier2Div.classList.add("selected");
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
            
            battleship2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 4;
                battleship2Div.classList.add("selected");
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
            
            cruiser2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 3;
                cruiser2Div.classList.add("selected");
                cruiserStat = true;
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
            
            submarine2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 3;
                submarine2Div.classList.add("selected");
                cruiserStat = false;
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
            
            destroyer2Div.addEventListener("click", (e) => {
                let otherSelected = document.querySelectorAll(".selected");
                selectedLength = 2;
                destroyer2Div.classList.add("selected");
                for (let i = 0; i < otherSelected.length; i ++) {
                    if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
                }
            
            });
    
            prep2Tiles.forEach(tiles => tiles.addEventListener("click", (e) => {
                let tileId = e.target.getAttribute("id");
                let idArray = tileId.split("");                
                if (selectedLength === 5) {
                    cleanTheBoard(cleanBoard2, 5);
                    if (pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+3] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+4] === undefined) {
                            prepMessage2.innerText = "Message: Error, carrier out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+3] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+4] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Carrier placed, select and place another ship.";

                            } else {
                                prepMessage2.innerText = "Message: Error, placing the carrier here will cause a collision.";

                            }

                        }
    
                    } else if (!pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2.length - Number(idArray[3]) < 5 ) {
                            prepMessage2.innerText = "Message: Error, carrier out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+3][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+4][Number(idArray[2])] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Carrier placed, select and place another ship.";

                            } else {
                                prepMessage2.innerText = "Message: Error, placing the carrier here will cause a collision.";

                            }

                        }

                    } 
                        
                } else if (selectedLength === 4) {
                    cleanTheBoard(cleanBoard2, 4);
                    if (pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+3] === undefined) {
                            prepMessage2.innerText = "Message: Error, battleship out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+3] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Battleship placed, select and place another ship.";
    
                            } else {
                                prepMessage2.innerText = "Message: Error, placing the battleship here will cause a collision.";

                            }

                        }
    
                    } else if (!pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2.length - Number(idArray[3]) < 4 ) {
                            prepMessage2.innerText = "Message: Error, battleship out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+3][Number(idArray[2])] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Battleship placed, select and place another ship.";
    
                            } else {
                                prepMessage2.innerText = "Message: Error, placing the battleship here will cause a collision.";

                            }

                        }

                    } 
    
                } else if (selectedLength === 3) {
                    cleanTheBoard(cleanBoard2, 3, cruiserStat);
                    if (pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === undefined) {
                            (cruiserStat) ? prepMessage2.innerText = "Message: Error, cruiser out of bounds." : prepMessage2.innerText = "Message: Error, submarine out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+2] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                (cruiserStat) ? prepMessage2.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage2.innerText = "Message: Submarine placed, select and place another ship.";

                            } else {
                                (cruiserStat) ? prepMessage2.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage2.innerText = "Message: Error, placing the submarine here will cause a collision.";

                            }

                        }
    
                    } else if (!pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2.length - Number(idArray[3]) < 3 ) {
                            (cruiserStat) ? prepMessage2.innerText = "Message: Error, cruiser out of bounds." : prepMessage2.innerText = "Message: Error, submarine out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+2][Number(idArray[2])] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                (cruiserStat) ? prepMessage2.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage2.innerText = "Message: Submarine placed, select and place another ship.";
    
                            } else {
                                (cruiserStat) ? prepMessage2.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage2.innerText = "Message: Error, placing the submarine here will cause a collision.";

                            }

                        }

                    } 
    
                } else if (selectedLength === 2) {
                    cleanTheBoard(cleanBoard2, 2);
                    if (pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === undefined) {
                            prepMessage2.innerText = "Message: Error, destroyer out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])][Number(idArray[2])+1] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Destroyer placed, select and place another ship.";
    
                            } else {
                                prepMessage2.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                            }

                        }
    
                    } else if (!pvpBoard2.getShipOrientation()) {
                        if (cleanBoard2.length - Number(idArray[3]) < 2 ) {
                            prepMessage2.innerText = "Message: Error, destroyer out of bounds.";

                        } else {
                            if (cleanBoard2[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard2[Number(idArray[3])+1][Number(idArray[2])] === "") {
                                pvpBoard2.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                                if (pvpBoard2.getShips().length === 5) prepSubmit2.disabled = false;
                                paintTiles(pvpBoard2, "b");
                                prepMessage2.innerText = "Message: Destroyer placed, select and place another ship.";

                            } else {
                                prepMessage2.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                            }

                        }

                    } 
    
                }
    
            }));

            prepSubmit2.addEventListener("click", (e) => {
                prepDivP2.style = "display: none;";
                prepParent.classList.add("hide");
                overlayDiv.classList.add("hide");
            });
        });

        gameTilesA.forEach(tiles => tiles.addEventListener("click", (e) => {
            let tileId = e.target.getAttribute("id");
            let idArray = tileId.split("");
            let attack = pvpBoard1.receiveAttack(Number(idArray[5]), Number(idArray[4]));
            if (attack === "You cannot strike the same spot twice") {
                gsMessage.innerText = `Message: Try again. ${attack}.`;

            } else if (attack.gameOver === true) {
                gsMessage.innerText = `Message: Game Over! ${name2} Wins!`;
                pScoreBoard1.innerText = `${name1} has ${5 - Number(pvpBoard1.getSunkenCount())} ships left.`;
                e.target.style.backgroundColor = "red";

            } else if (attack.status === "M") {
                gsMessage.innerText = `Message: ${name2} missed. Switching turns.`;
                pScoreBoard1.innerText = `${name1} has ${5 - Number(pvpBoard1.getSunkenCount())} ships left.`;
                e.target.style.backgroundColor = "cyan";

            } else {
                if (attack.sunk === true) {
                    gsMessage.innerText = `Message: Ship sunk! ${name2} may fire again.`;
                    pScoreBoard1.innerText = `${name1} has ${5 - Number(pvpBoard1.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";

                } else {
                    gsMessage.innerText = `Message: Hit! ${name2} may fire again.`;
                    pScoreBoard1.innerText = `${name1} has ${5 - Number(pvpBoard1.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";

                }

            }

        }));

        gameTilesB.forEach(tiles => tiles.addEventListener("click", (e) => {
            let tileId = e.target.getAttribute("id");
            let idArray = tileId.split("");
            let attack = pvpBoard2.receiveAttack(Number(idArray[5]), Number(idArray[4]));
            if (attack === "You cannot strike the same spot twice") {
                gsMessage.innerText = `Message: Try again. ${attack}.`;

            } else if (attack.gameOver === true) {
                gsMessage.innerText = `Message: Game Over! ${name1} Wins!`;
                pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                e.target.style.backgroundColor = "red";

            } else if (attack.status === "M") {
                gsMessage.innerText = `Message: ${name1} missed. Switching turns.`;
                pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                e.target.style.backgroundColor = "cyan";

            } else {
                if (attack.sunk === true) {
                    gsMessage.innerText = `Message: Ship sunk! ${name1} may fire again.`;
                    pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";

                } else {
                    gsMessage.innerText = `Message: Hit! ${name1} may fire again.`;
                    pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";

                }

            }
            
        }));

    } 

});

pveSubmitButton.addEventListener("click", (e) => {
    if (pve1Input.checkValidity()) {
        e.preventDefault();
        let pveBoard1 = gameBoardFactory();
        let name1 = document.querySelector("#pve1Input").value;
        let p1eSB = document.querySelector(".pscoreboard1");
        p1eSB.innerText = `${name1} has 5 ships left.`;
        let p1Name = document.querySelector(".p1name");
        p1Name.innerText = `${name1}`;
        let aiName = "AI";
        let p2eSB = document.querySelector(".pscoreboard2");
        p2eSB.innerText = `${aiName} has 5 ships left.`;
        let p2Name = document.querySelector(".p2name");
        p2Name.innerText = `${aiName}`;
        let aiBoard = gameBoardFactory();
        gameInformationDiv.classList.add("hide");
        let pregamePrep1 = prepDivFactory(pve1Input.value, 1);
        prepParent.appendChild(pregamePrep1);

        // randomly set AI board here

        const setAIBoard = () => {

            // need to prevent overflow from the array -> look at length properties
            // need to figure out what is wrong with vertical orientation conditionals
            // after that we're set

            let totalPlaced = 0;
            // control lengths thru conditionals
            while (totalPlaced < 5) {
                let orientation = Math.floor(Math.random()*2); // potentially switch orientation every loop, 0 for horizontal, 1 for vertical
                let length = 0;
                if (totalPlaced === 0) { // place the carrier
                    length = 5;
                    let xStart = Math.floor(Math.random()*10);
                    let yStart = Math.floor(Math.random()*10);
                    if (orientation === 0) {
                        if ((xStart + length < 10) && (10 - xStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart][xStart+1] === "" && aiBoard.getBoard()[yStart][xStart+2] === "" && aiBoard.getBoard()[yStart][xStart+3] === "" && aiBoard.getBoard()[yStart][xStart+4] === "") {
                                aiBoard.placeAIShip(5, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                            
                        }

                    } else if (orientation === 1) {
                        if ((yStart + length < 10) && (10 - yStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart+1][xStart] === "" && aiBoard.getBoard()[yStart+2][xStart] === "" && aiBoard.getBoard()[yStart+3][xStart] === "" && aiBoard.getBoard()[yStart+4][xStart] === "") {
                                aiBoard.placeAIShip(5, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                        }

                    }

                } else if (totalPlaced === 1) { // place the battleship
                    length = 4;
                    let xStart = Math.floor(Math.random()*10);
                    let yStart = Math.floor(Math.random()*10);
                    if (orientation === 0) {
                        if ((xStart + length < 10) && (10 - xStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart][xStart+1] === "" && aiBoard.getBoard()[yStart][xStart+2] === "" && aiBoard.getBoard()[yStart][xStart+3] === "") {
                                aiBoard.placeAIShip(4, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                        }

                    } else if (orientation === 1) {
                        if ((yStart + length < 10) && (10 - yStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart+1][xStart] === "" && aiBoard.getBoard()[yStart+2][xStart] === "" && aiBoard.getBoard()[yStart+3][xStart] === "") {
                                aiBoard.placeAIShip(4, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                        }

                    }

                } else if (totalPlaced === 2) { // place the cruiser
                    length = 3;
                    let xStart = Math.floor(Math.random()*10);
                    let yStart = Math.floor(Math.random()*10);
                    if (orientation === 0) {
                        if ((xStart + length < 10) && (10 - xStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart][xStart+1] === "" && aiBoard.getBoard()[yStart][xStart+2] === "") {
                                aiBoard.placeAIShip(3, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                        }

                    } else if (orientation === 1) {
                        if ((yStart + length < 10) && (10 - yStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart+1][xStart] === "" && aiBoard.getBoard()[yStart+2][xStart] === "") {
                                aiBoard.placeAIShip(3, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                        }

                    }

                } else if (totalPlaced === 3) { // place the sub
                    length = 3;
                    let xStart = Math.floor(Math.random()*10);
                    let yStart = Math.floor(Math.random()*10);
                    if (orientation === 0) {
                        if ((xStart + length < 10) && (10 - xStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart][xStart+1] === "" && aiBoard.getBoard()[yStart][xStart+2] === "") {
                                aiBoard.placeAIShip(3, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                        }

                    } else if (orientation === 1) {
                        if ((yStart + length < 10) && (10 - yStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart+1][xStart] === "" && aiBoard.getBoard()[yStart+2][xStart] === "") {
                                aiBoard.placeAIShip(3, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                        }

                    }

                } else if (totalPlaced === 4) { // place the destroyer
                    length = 2;
                    let xStart = Math.floor(Math.random()*10);
                    let yStart = Math.floor(Math.random()*10);
                    if (orientation === 0) {
                        if ((xStart + length < 10) && (10 - xStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart][xStart+1] === "") {
                                aiBoard.placeAIShip(2, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                        }

                    } else if (orientation === 1) {
                        if ((yStart + length < 10) && (10 - yStart >= length)) {
                            if (aiBoard.getBoard()[yStart][xStart] === "" && aiBoard.getBoard()[yStart+1][xStart] === "") {
                                aiBoard.placeAIShip(2, yStart, xStart, orientation);
                                totalPlaced++;
                            }
                        }

                    }

                }
                
            };
        }

        setAIBoard();
        console.log(aiBoard.getBoard());
        
        // create players here

        pveForm.reset();
        let prepDivP1 = document.querySelector(`[data-PrepDiv="1"]`);
        const prepMessage = document.querySelector(".p_mess");
        const oriH3 = document.querySelector(".oriH3_1");
        const rotate1 = document.querySelector(".rotate_1");
        let cruiserStat;
        const carrier1Div = document.querySelector(".carrier_1");
        const battleship1Div = document.querySelector(".battleship_1");
        const cruiser1Div = document.querySelector(".cruiser_1");
        const submarine1Div = document.querySelector(".submarine_1");
        const destroyer1Div = document.querySelector(".destroyer_1");
        let cleanBoard1 = pveBoard1.getBoard();
        const prep1Tiles = document.querySelectorAll(".prepboard_a");
        let prepSubmit1 = document.querySelector("[data-submitButton='1']");
        prepSubmit1.disabled = true;
        const paintTiles = (board, order) => {
            let boardLayout = board.getBoard();
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const targetPrepBox = document.querySelector(`#${order}_${j}${i}`);
                    (boardLayout[i][j] !== "") ? targetPrepBox.style.backgroundColor = "green" : targetPrepBox.style.backgroundColor = "grey";
                }
            }

        }
        const cleanTheBoard = (board, lengthOfShip, statusOfCruiser) => {
            if (lengthOfShip !== 3) {
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j ++) {
                        if (board[i][j].shipLength === lengthOfShip) board[i][j] = "";
                    }
                }

            } else {
                if (statusOfCruiser) {
                    for (let i = 0; i < 10; i++) {
                        for (let j = 0; j < 10; j ++) {
                            if (board[i][j].cruiserStatus === true) board[i][j] = "";
                        }
                    }

                } else {
                    for (let i = 0; i < 10; i++) {
                        for (let j = 0; j < 10; j ++) {
                            if (board[i][j].cruiserStatus === false) board[i][j] = "";
                        }
                    }

                }

            }
            
        }

        rotate1.addEventListener("click", (e) => {
            pveBoard1.rotateShip();
            (oriH3.innerText === "Orientation: Horizontal") ? oriH3.innerText = "Orientation: Vertical" : oriH3.innerText = "Orientation: Horizontal"; 

        });

        carrier1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Carrier Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 5;
            carrier1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        battleship1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Battleship Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 4;
            battleship1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        cruiser1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Cruiser Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 3;
            cruiser1Div.classList.add("selected");
            cruiserStat = true;
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        submarine1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Submarine Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 3;
            submarine1Div.classList.add("selected");
            cruiserStat = false;
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });
        
        destroyer1Div.addEventListener("click", (e) => {
            prepMessage.innerText = "Message: Destroyer Selected."
            let otherSelected = document.querySelectorAll(".selected");
            selectedLength = 2;
            destroyer1Div.classList.add("selected");
            for (let i = 0; i < otherSelected.length; i ++) {
                if (otherSelected[i] !== e.target) otherSelected[i].classList.remove("selected");
            }
        
        });

        prep1Tiles.forEach(tiles => tiles.addEventListener("click", (e) => {            
            let tileId = e.target.getAttribute("id");
            let idArray = tileId.split("");
            if (selectedLength === 5) {
                cleanTheBoard(cleanBoard1, 5);
                if (pveBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+4] === undefined) {
                        prepMessage.innerText = "Message: Error, carrier out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+4] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Carrier placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the carrier here will cause a collision.";

                        }

                    }

                } else if (!pveBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 5 ) {
                        prepMessage.innerText = "Message: Error, carrier out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+3][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+4][Number(idArray[2])] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Carrier placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the carrier here will cause a collision.";

                        }

                    }

                } 
                    
            } else if (selectedLength === 4) {
                cleanTheBoard(cleanBoard1, 4);
                if (pveBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === undefined) {
                        prepMessage.innerText = "Message: Error, battleship out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+3] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Battleship placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the battleship here will cause a collision.";

                        }

                    }

                } else if (!pveBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 4 ) {
                        prepMessage.innerText = "Message: Error, battleship out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+3][Number(idArray[2])] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Battleship placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the battleship here will cause a collision.";

                        }

                    }

                } 

            } else if (selectedLength === 3) {
                cleanTheBoard(cleanBoard1, 3, cruiserStat);
                if (pveBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === undefined) {
                        (cruiserStat) ? prepMessage.innerText = "Message: Error, cruiser out of bounds." : prepMessage.innerText = "Message: Error, submarine out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+2] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            (cruiserStat) ? prepMessage.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage.innerText = "Message: Submarine placed, select and place another ship.";

                        } else {
                            (cruiserStat) ? prepMessage.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage.innerText = "Message: Error, placing the submarine here will cause a collision.";

                        }

                    }

                } else if (!pveBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 3 ) {
                        (cruiserStat) ? prepMessage.innerText = "Message: Error, cruiser out of bounds." : prepMessage.innerText = "Message: Error, submarine out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+2][Number(idArray[2])] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]), cruiserStat);
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            (cruiserStat) ? prepMessage.innerText = "Message: Cruiser placed, select and place another ship." : prepMessage.innerText = "Message: Submarine placed, select and place another ship.";
                            
                        } else {
                            (cruiserStat) ? prepMessage.innerText = "Message: Error, placing the cruiser here will cause a collision." : prepMessage.innerText = "Message: Error, placing the submarine here will cause a collision.";

                        }

                    }

                } 

            } else if (selectedLength === 2) {
                cleanTheBoard(cleanBoard1, 2);
                if (pveBoard1.getShipOrientation()) {
                    if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === undefined || cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === undefined) {
                        prepMessage.innerText = "Message: Error, destroyer out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])][Number(idArray[2])+1] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Destroyer placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                        }

                    }

                } else if (!pveBoard1.getShipOrientation()) {
                    if (cleanBoard1.length - Number(idArray[3]) < 2 ) {
                        prepMessage.innerText = "Message: Error, destroyer out of bounds.";

                    } else {
                        if (cleanBoard1[Number(idArray[3])][Number(idArray[2])] === "" && cleanBoard1[Number(idArray[3])+1][Number(idArray[2])] === "") {
                            pveBoard1.placeShip(selectedLength, Number(idArray[3]), Number(idArray[2]));
                            if (pveBoard1.getShips().length === 5) prepSubmit1.disabled = false;
                            paintTiles(pveBoard1, "a");
                            prepMessage.innerText = "Message: Destroyer placed, select and place another ship.";

                        } else {
                            prepMessage.innerText = "Message: Error, placing the destroyer here will cause a collision.";

                        }

                    }

                } 

            }

        }));

        prepSubmit1.addEventListener("click", (e) => {
            prepDivP1.style = "display: none;";
            prepParent.classList.add("hide");
            overlayDiv.classList.add("hide");
            // ai placement of ships

            gameTilesB.forEach(tiles => tiles.addEventListener("click", (e) => {
                let tileId = e.target.getAttribute("id");
                let idArray = tileId.split("");
                let attack = pvpBoard2.receiveAttack(Number(idArray[5]), Number(idArray[4]));
                if (attack === "You cannot strike the same spot twice") {
                    gsMessage.innerText = `Message: Try again. ${attack}.`;
    
                } else if (attack.gameOver === true) {
                    gsMessage.innerText = `Message: Game Over! ${name1} Wins!`;
                    pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "red";
    
                } else if (attack.status === "M") {
                    gsMessage.innerText = `Message: ${name1} missed. Switching turns.`;
                    pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                    e.target.style.backgroundColor = "cyan";
    
                } else {
                    if (attack.sunk === true) {
                        gsMessage.innerText = `Message: Ship sunk! ${name1} may fire again.`;
                        pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                        e.target.style.backgroundColor = "red";
    
                    } else {
                        gsMessage.innerText = `Message: Hit! ${name1} may fire again.`;
                        pScoreBoard2.innerText = `${name2} has ${5 - Number(pvpBoard2.getSunkenCount())} ships left.`;
                        e.target.style.backgroundColor = "red";
    
                    }
    
                }
                
            }));





        });
    }
});
