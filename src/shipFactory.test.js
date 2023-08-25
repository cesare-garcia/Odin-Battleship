const shipFactory = require("./shipFactory");

test("returns an object with the proper length, hits, and sunkStatus properties", () => {
    const carrier = shipFactory(5);

    expect(carrier.length).toBe(5);
    expect(carrier.hits).toBe(0);
    expect(carrier.sunkStatus).toBe(false);
});