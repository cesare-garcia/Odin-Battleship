const shipFactory = require("./shipFactory");

test("returns an object with the proper length, hits, sunkStatus, and orientation properties", () => {
    const carrier = shipFactory(5);

    expect(carrier.length).toBe(5);
    expect(carrier.hits).toBe(0);
    expect(carrier.sunkStatus).toBe(false);
    expect(carrier.orientation).toBe("horizontal");
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

test("changes the ship's orientation property to vertical from horizontal", () => {
    const patrol = shipFactory(2);
    patrol.rotate();

    expect(patrol.orientation).toBe("vertical");
});

test("changes the ship's orientation property to horizontal from vertical", () => {
    const patrol = shipFactory(2);
    patrol.rotate();
    patrol.rotate();

    expect(patrol.orientation).toBe("horizontal");
});