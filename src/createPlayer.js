const createPlayer = (name, order) => {

    const launchAttack = (yCoord, xCoord) => {
        return [yCoord, xCoord];
    };

    return {
        name,
        order,
        launchAttack
    };
};
// module.exports = createPlayer;

const createAI = () => {
    
    launchAttack = () => {
        let yCoord = Math.floor(Math.random()*11);
        let xCoord = Math.floor(Math.random()*11);

        // probably will use some type of loop to do this
        // code to check if the xys are duplicates or not
    };
    
    return {
        name: "Enemy AI",
        order: 2,
        launchAttack
    };
};
// module.exports = createAI;

export default createPlayer;