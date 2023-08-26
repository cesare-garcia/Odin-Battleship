// we will potentially need to include an orientation property that describes whether the ship is horizontal or vertical

const shipFactory = (length) => {
   
    return {
        length: length,
        hits: 0,
        sunkStatus: false,
        orientation: "horizontal",
        hit: function() {
            this.hits++;
        },
        isSunk: function() {
            if (this.length === this.hits) this.sunkStatus = true;
        },
        rotate: function() {
            (this.orientation === "horizontal") ? this.orientation = "vertical" : this.orientation = "horizontal";
        }
    };
};

module.exports = shipFactory;