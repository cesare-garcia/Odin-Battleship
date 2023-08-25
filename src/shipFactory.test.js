const shipFactory = require("./shipFactory");

test("returns an object with the proper length, hits, and sunkStatus properties", () => {
    const carrier = shipFactory(5);

    expect(carrier.length).toBe(5);
    expect(carrier.hits).toBe(0);
    expect(carrier.sunkStatus).toBe(false);
});

test("increases the number of hits on the ship when hit() is invoked", () => {
    const carrier = shipFactory(5);
    carrier.hit();
    carrier.hit();

    expect(carrier.hits).toBe(2);
});

test("evaluates whether the ship has been sunk depending on the number of hits it has sustained (false test)", () => {
    const carrier = shipFactory(5);
    carrier.hit();
    carrier.isSunk();

    expect(carrier.sunkStatus).toBe(false);

});

test("evaluates whether the ship has been sunk depending on the number of hits it has sustained (true test)", () => {
    const carrier = shipFactory(5);
    for (let i = 0; i < 5; i++) {
        carrier.hit();
    }
    carrier.isSunk();

    expect(carrier.sunkStatus).toBe(true);
    
});