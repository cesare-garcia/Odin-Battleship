const prepDivFactory = (name, order) => {
    const prepDiv = document.createElement("div");
    prepDiv.classList.add("prepDiv");
    prepDiv.setAttribute("data-prepDiv", `${order}`);
    const prepH1 = document.createElement("h1");
    prepH1.classList.add("prepH1");
    prepH1.innerText = `${name}, please place your ships on the grid.`;
    const prepMessages = document.createElement("p");
    prepMessages.classList.add("p_mess");
    prepMessages.innerText = "Message: Please select a ship and place it on the grid.";
    const placementDiv = document.createElement("div");
    placementDiv.classList.add("placementDiv");
    const placementLeft = document.createElement("div");
    placementLeft.classList.add("p_left");
    const placementRight = document.createElement("div");
    placementRight.classList.add("p_right");
    const prepGrid = document.createElement("div");
    prepGrid.classList.add("prepGrid");
    prepGrid.setAttribute("data-order", `${order}`);

    const rowCreator = (grid, order, rowNumber) => {
        (order === 1) ? order = "a" : order = "b";
        for (let i = 0; i < 10; i++) {
            const prepBox = document.createElement("div");
            prepBox.classList.add("prepBox");
            prepBox.classList.add(`prepboard_${order}`);
            prepBox.setAttribute("id", `${order}_${i}${rowNumber}`);
            grid.appendChild(prepBox);
        }    
    }

    rowCreator(prepGrid, order, 0);
    rowCreator(prepGrid, order, 1);
    rowCreator(prepGrid, order, 2);
    rowCreator(prepGrid, order, 3);
    rowCreator(prepGrid, order, 4);
    rowCreator(prepGrid, order, 5);
    rowCreator(prepGrid, order, 6);
    rowCreator(prepGrid, order, 7);
    rowCreator(prepGrid, order, 8);
    rowCreator(prepGrid, order, 9);

    
    const oriH3 = document.createElement("h3");
    oriH3.classList.add(`oriH3_${order}`);
    oriH3.innerText = "Orientation: Horizontal";
    const rotateButton = document.createElement("button");
    rotateButton.classList.add("rtButton");
    rotateButton.classList.add(`rotate_${order}`);
    rotateButton.innerText = "Rotate";
    const shipsDiv = document.createElement("div");
    shipsDiv.classList.add("shipsDiv");
    const shipsH2 = document.createElement("h2");
    shipsH2.classList.add("shipsH2");
    shipsH2.innerText = "Ships";
    const carrierDiv = document.createElement("div");
    carrierDiv.innerText = "Carrier";
    carrierDiv.classList.add("shipSelector");
    carrierDiv.classList.add(`carrier_${order}`);
    const battleshipDiv = document.createElement("div");
    battleshipDiv.innerText = "Battleship";
    battleshipDiv.classList.add("shipSelector");
    battleshipDiv.classList.add(`battleship_${order}`);
    const cruiserDiv = document.createElement("div");
    cruiserDiv.innerText = "Cruiser";
    cruiserDiv.classList.add("shipSelector");
    cruiserDiv.classList.add(`cruiser_${order}`);
    const submarineDiv = document.createElement("div");
    submarineDiv.innerText = "Submarine";
    submarineDiv.classList.add("shipSelector");
    submarineDiv.classList.add(`submarine_${order}`);
    const destroyerDiv = document.createElement("div");
    destroyerDiv.innerText = "Destroyer";
    destroyerDiv.classList.add("shipSelector");
    destroyerDiv.classList.add(`destroyer_${order}`);

    shipsDiv.appendChild(shipsH2);
    shipsDiv.appendChild(carrierDiv);
    shipsDiv.appendChild(battleshipDiv);
    shipsDiv.appendChild(cruiserDiv);
    shipsDiv.appendChild(submarineDiv);
    shipsDiv.appendChild(destroyerDiv);

    const prepSubmit = document.createElement("button");
    prepSubmit.innerText = "Submit";
    prepSubmit.classList.add("prepSB");
    prepSubmit.setAttribute("data-submitButton", `${order}`);
    // add icons for the ships here. event listeners will later be attached.

    prepDiv.appendChild(prepH1);
    prepDiv.appendChild(prepMessages);
    prepDiv.appendChild(placementDiv);
    placementDiv.appendChild(placementLeft);
    placementLeft.appendChild(prepGrid);
    placementDiv.appendChild(placementRight);
    placementRight.appendChild(oriH3);
    placementRight.appendChild(rotateButton);
    placementRight.appendChild(shipsDiv);
    placementRight.appendChild(prepSubmit);

    return prepDiv;
};

export default prepDivFactory;