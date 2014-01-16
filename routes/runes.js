/*
 * GET rune info
 */

// Rune Class

function Rune() {
    this.name = null;
    this.description = null;
    this.tier = null;
    this.type = null;
    this.stats = {};
    this.tags = [];
}

var runes = require('../rune.json').data ;
var validRunes = [];

for (var rune in runes ) {
    if (runes[rune].rune.tier === '3') {
        var simpleRune = new Rune();
        simpleRune.name = runes[rune].name;
        simpleRune.description = runes[rune].description;
        simpleRune.tier = runes[rune].rune.tier;
        simpleRune.type = runes[rune].rune.type;
        simpleRune.stats = runes[rune].stats;
        simpleRune.tags = runes[rune].tags;
        validRunes.push(simpleRune);
    }
}

exports.all = function(req, res){
    res.send(validRunes);
};

exports.builder = function(req, res) {
    res.render('runes', { title: "Rune Builder" });
};
