// const createPlayer = require("./createPlayer");
const createAI = require("./createPlayer");

test.skip("creates a player object with a name and number assigned", () => {
    const player1 = createPlayer("Cesar", 1);
    const player2 = createPlayer("Zaynab", 2);

    expect(player1.name).toBe("Cesar");
    expect(player1.order).toBe(1);
    expect(player2.name).toBe("Zaynab");
    expect(player2.order).toBe(2);
});

test.skip("player object is able to select a coordinate on the enemy map to target.", () => {
    const player1 = createPlayer("Cesar", 1);
    let attackCoordinates = player1.launchAttack(4, 4);

    expect(attackCoordinates).toStrictEqual([4,4]);
});

test("creates enemy AI", () => {
    const enemyAI = createAI();

    expect(enemyAI.name).toBe("Enemy AI");
});