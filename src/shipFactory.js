const shipFactory = (length) => {
   
    return {
        length: length,
        hits: 0,
        sunkStatus: false,
        hit: function() {
            this.hits++;
        },
        isSunk: function() {
            if (this.length === this.hits) this.sunkStatus = true;
        }
    };
};

module.exports = shipFactory;