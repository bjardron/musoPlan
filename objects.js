const prompt = require('prompt-sync')(); //calls prompt sync to prompt the user for inputs
const fs = require('fs'); //calls the file system from node.js to import and export text files


//musician is the parent class and handles name, years playing, the hourly rate and the instrument played by the musician
class Musician {
    constructor(name, yearsPlaying, hourlyRate, instrument) {
      this.name = name;
      this.yearsPlaying = yearsPlaying;
      this.hourlyRate = hourlyRate < 50 ? 50 : hourlyRate; //checks if the minimum rate is less than 50, if it is then it sets the rate to 50, otherwise it uses the posted hourly rate
      this.instrument = instrument;
    }
  }

  //these are the instrument classes, they include supers from the parent class and the interesting facts for each instrument

  class Guitarist extends Musician {
    constructor(name, yearsPlaying, hourlyRate, strings) {
      super(name, yearsPlaying, hourlyRate, 'Guitarist');
      this.strings = strings;
    }
    
    getInterestingFact() {
      return "The more strings you have, the better you are";
    }
  }
  
  class Bassist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
      super(name, yearsPlaying, hourlyRate, 'Bassist');
    }
    
    getInterestingFact() {
      return "Everyone loves a bassist";
    }
  }
  
  class Percussionist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
      super(name, yearsPlaying, hourlyRate, 'Percussionist');
    }
    
    getInterestingFact() {
      return "Me drum";
    }
  }
  
  class Flautist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
      super(name, yearsPlaying, hourlyRate, 'Flautist');
    }
    
    getInterestingFact() {
      return "1989 heavy metal instrument of the year";
    }
  }

//the troupe class uses an empty list to store member while the program is running. 
//if data needs to be stored locally or online this can be done with an sql database. 
  class Troupe {
    constructor(name, genre, duration) {
      this.name = name;
      this.genre = genre;
      this.duration = duration;
      this.members = [];
    }
  
    addMember(musician) {
      this.members.push(musician);
    }
  }
//exports the classes to be called by index.js
  module.exports = { 
  Musician,
  Guitarist,
  Bassist, 
  Percussionist,
  Flautist,
  Troupe,
};