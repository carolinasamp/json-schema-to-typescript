"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var utils_1 = require("../src/utils");
function run() {
    ava_1.serial('pathTransform', function (t) {
        var inputPaths = ['MultiSchema/foo/a.json', 'MultiSchema/bar/fuzz/c.json', 'MultiSchema/bar/d.json'];
        var outputPath = 'MultiSchema/Out';
        t.is(utils_1.pathTransform(outputPath, inputPaths[0]), 'MultiSchema/Out/foo/a.json');
        t.is(utils_1.pathTransform(outputPath, inputPaths[1]), 'MultiSchema/Out/bar/fuzz/c.json');
        t.is(utils_1.pathTransform(outputPath, inputPaths[2]), 'MultiSchema/Out/bar/d.json');
    });
    ava_1.serial('generateName', function (t) {
        var usedNames = new Set();
        t.is(utils_1.generateName('a', usedNames), 'A');
        t.is(utils_1.generateName('abc', usedNames), 'Abc');
        t.is(utils_1.generateName('ABcd', usedNames), 'ABcd');
        t.is(utils_1.generateName('$Abc_123', usedNames), '$Abc_123');
        t.is(utils_1.generateName('Abc-de-f', usedNames), 'AbcDeF');
        // Index should increment:
        t.is(utils_1.generateName('a', usedNames), 'A1');
        t.is(utils_1.generateName('a', usedNames), 'A2');
        t.is(utils_1.generateName('a', usedNames), 'A3');
    });
}
exports.run = run;
//# sourceMappingURL=testUtils.js.map