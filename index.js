const prompt = require('prompt-sync')();
const fs = require('fs');

const {
    Musician,
    Guitarist,
    Bassist,
    Percussionist,
    Flautist,
    Troupe
  } = require('./objects.js');

const {
    registerMusician
    createTroupe
    addMusicianToTroupe
    calculateCost
    importNamesFromTextFile
    exportNamesToTextFile
    eturnToMenu
    showMenu
} = require('functions.js')

let importedNames = [];