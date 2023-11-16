const prompt = require('prompt-sync')(); //this calls prompt sync to prompt the user for inputs
const fs = require('fs'); //this calls the file system from node.js to import and export text files


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
} = require('./functions.js')

let importedNames = []; //this stores our imported names from text files to be used or exported later