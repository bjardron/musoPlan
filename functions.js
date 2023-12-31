const prompt = require('prompt-sync')();
const fs = require('fs');
const {
  Guitarist,
  Bassist,
  Percussionist,
  Flautist,
  Troupe,
} = require('./objects.js');

let importedNames = [];
let musicians = [];
let troupes = [];

//================================================================
//sample data, remove before sending to user.
const sampleGuitarist = new Guitarist('Jimmy Hendrix', 2, 50, '6');
const sampleBassist = new Bassist('John Lennon', 3, 60);
const samplePercussionist = new Percussionist('Jimmy Buffet', 4, 70);
const sampleFlautist = new Flautist('Yoko Ono', 5, 80);
musicians.push(sampleGuitarist, sampleBassist, samplePercussionist, sampleFlautist);
const sampleTroupe1 = new Troupe('Fantastic Fusion', 'Jazz');
const sampleTroupe2 = new Troupe('Rhythmic Rebels', 'Rock');
const sampleTroupe3 = new Troupe('Melodic Masters', 'Pop');
const sampleTroupe4 = new Troupe('Harmonic Heroes', 'Classical');
const sampleTroupe5 = new Troupe('Sonic Symphony', 'Experimental');
troupes.push(sampleTroupe1, sampleTroupe2, sampleTroupe3, sampleTroupe4, sampleTroupe5);
//sample data, remove before sending to user.
//================================================================

const border = '\x1b[36m================================\x1b[0m';

//this function registers a musician asks the hourly rate, the instrument and returns to the menu once registered
function registerMusician() {
  const name = prompt('Enter musician\'s name (3 to 30 characters): ');

  if (name.length < 3 || name.length > 30) {
    console.log('Name should be between 3 and 30 characters.');
    returnToMenu();
    return;
  }

  const yearsPlaying = parseFloat(prompt('Enter years playing: '));
  const hourlyRate = parseFloat(prompt('Enter hourly rate (minimum $50): '));

  if (isNaN(yearsPlaying) || isNaN(hourlyRate) || hourlyRate < 50) {
    console.log('Years playing and hourly rate should be numbers, and the hourly rate should be a minimum of $50.');
    returnToMenu();
    return;
  }

  console.log(border)
  console.log('\x1b[36m|     Available Instruments    |\x1b[0m');
  console.log(border);
  console.log('\x1b[32m| 1. 🎸 Guitarist               |\x1b[0m');
  console.log('\x1b[33m| 2. 🎻 Bassist                 |\x1b[0m');
  console.log('\x1b[34m| 3. 🥁 Percussionist           |\x1b[0m');
  console.log('\x1b[35m| 4. 🎶 Flautist                |\x1b[0m');
  console.log(border);

  const musicianType = prompt('Select the type of instrumentalist (enter number): ');
  switch (musicianType) {
    case '1':
      const strings = prompt('Enter number of strings: ');
      const guitarist = new Guitarist(name, yearsPlaying, hourlyRate, strings);
      musicians.push(guitarist);
      console.log('Guitarist registered successfully.');
      break;
    case '2':
      const bassist = new Bassist(name, yearsPlaying, hourlyRate);
      musicians.push(bassist);
      console.log('Bassist registered successfully.');
      break;
    case '3':
      const percussionist = new Percussionist(name, yearsPlaying, hourlyRate);
      musicians.push(percussionist);
      console.log('Percussionist registered successfully.');
      break;
    case '4':
      const flautist = new Flautist(name, yearsPlaying, hourlyRate);
      musicians.push(flautist);
      console.log('Flautist registered successfully.');
      break;
    default:
      console.log('Invalid selection.');
      break;
  }
}
//creates a troupe
function createTroupe() {
  console.log(border);
  console.log('\x1b[36m| Choose a genre for the troupe |\x1b[0m');
  console.log(border);
  console.log('\x1b[32m| 1. Rock                       |\x1b[0m');
  console.log('\x1b[33m| 2. Jazz                       |\x1b[0m');
  console.log('\x1b[34m| 3. Pop                        |\x1b[0m');
  console.log(border);

let genreChoice = parseInt(prompt('Enter your genre choice (1, 2, or 3): '));

while (isNaN(genreChoice) || genreChoice < 1 || genreChoice > 3) {
  console.log('Invalid choice. Please select 1, 2, or 3.'); //error handling for incorrect input by user
  genreChoice = parseInt(prompt('Enter your genre choice (1, 2, or 3): ')); //prompt uses parse integer to select a number for genre
}

let genre;
switch (genreChoice) {
  case 1:
    genre = 'Rock';
    break;
  case 2:
    genre = 'Jazz';  //case statement to select a genre
    break;
  case 3:
    genre = 'Pop';
    break;
  default:
    break;
}

const name = prompt('Enter troupe name: ');

const troupe = new Troupe(name, genre);
troupes.push(troupe);
console.log('Troupe created successfully.');
returnToMenu(true); //boolean statement that returns user to menu calling the return to menu function. 
}

function addMusicianToTroupe() {
  if (musicians.length === 0) {
    console.log('No musicians registered yet.'); //error handling for no created musicians. If array is empty it will throw this error'
    return;
  }

  if (troupes.length === 0) {
    console.log('No troupes created yet.'); //error handling for no created troupes. If array is empty it will throw this error'
    showMenu();
    return;
  }

  console.log('Available Troupes:');
  troupes.forEach((troupe, index) => {
    console.log(`${index + 1}. ${troupe.name}`);
  });

  let troupeIndex = parseInt(prompt('Select troupe to add musician (enter number): ')) - 1;
  if (isNaN(troupeIndex) || troupeIndex < 0 || troupeIndex >= troupes.length) {
    console.log('Invalid troupe selection.');
    addMusicianToTroupe();
    return;
  }

  console.log('Available Musicians:');
  musicians.forEach((musician, index) => {
    console.log(`${index + 1}. ${musician.name}`);
  });

  let musicianIndex = parseInt(prompt('Select musician to add to troupe (enter number): ')) - 1;
  if (isNaN(musicianIndex) || musicianIndex < 0 || musicianIndex >= musicians.length) {
    console.log('Invalid musician selection.');
    addMusicianToTroupe();
    return;
  }

  try {
    troupes[troupeIndex].addMember(musicians[musicianIndex]);
    console.log('Musician added to troupe.');
  } catch (error) {
    console.log(error.message);
  }
}
//function to calculate cost of deploying a troupe
function calculateCost() {
  if (troupes.length === 0) {
    console.log('No troupes created yet.');
    return;
  }

  console.log('Available Troupes:');
  troupes.forEach((troupe, index) => {
    console.log(`${index + 1}. ${troupe.name}`);
  });

  const troupeIndex = parseInt(prompt('Select troupe to calculate cost (enter number): ')) - 1;
  if (isNaN(troupeIndex) || troupeIndex < 0 || troupeIndex >= troupes.length) {
    console.log('Invalid troupe selection.');
    calculateCost();
    return;
  }

  const selectedTroupe = troupes[troupeIndex];
  const duration = parseFloat(prompt('Enter show duration between 0.5 and 3 hours: ')); // Prompt for duration here

  if (isNaN(duration) || duration < 0.5 || duration > 3) {
    console.log('Duration should be a number between 0.5 and 3 hours.');
    calculateCost();
    return;
  }

  let totalCost = 0;

  selectedTroupe.members.forEach(member => {
    totalCost += member.hourlyRate * duration; //calculate cost using the provided duration
  });

  console.log(`The cost of sending ${selectedTroupe.name} for ${duration} hours will be $${totalCost}.`);

}

function importNamesFromTextFile() {
  let filePath = prompt('Enter the file path: ');

  try {
    let data = fs.readFileSync(filePath, 'utf-8'); //read the file content
    let troupeDetails = data.split('\n').filter(line => line.trim() !== ''); //split content into lines and remove empty lines

    if (troupeDetails.length === 0) {
      console.log('No troupe details found in the file.'); //error handling if no troupe details are found
    } else {
      console.log('Imported troupe details:');
      troupeDetails.forEach((line, index) => {
        const details = line.split(','); //assuming details are separated by commas
        if (details.length >= 2) {
          const [name, genre] = details;
          console.log(`${index + 1}. Name: ${name}, Genre: ${genre}`);
          troupes.push(new Troupe(name.trim(), genre.trim())); //create a new Troupe object and push it into the troupes array
        } else {
          console.log(`Invalid format in line ${index + 1}. Skipping...`); //invalid format handling
        }
      });
    }
  } catch (err) {
    console.error('Error reading the file or file not found. Please enter a valid file path.'); //catch file read error or file not found error
  
  } finally {
    returnToMenu(); //return user to the menu
  }
}

function exportNamesToTextFile() {
  //create a new array and copy the importedNames array into it
  let allNames = [...importedNames];

  //add musician names to the allNames array
  musicians.forEach((musician) => {
    allNames.push(musician.name);
  });

  //add troupe names to the allNames array
  troupes.forEach((troupe) => {
    allNames.push(troupe.name);
  });

  //check if there are any names to export
  if (allNames.length === 0) {
    console.log('No names to export.');
    returnToMenu();
    return;
  }

  //join all the names with newlines to create content for the text file
  let content = allNames.join('\n');

  //get the file name from user input
  let fileName = prompt('Enter the file name to export: ');

  try {
    //write the content to a text file with the provided file name
    fs.writeFileSync(`${fileName}.txt`, content);
    console.log(`Names exported to ${fileName}.txt`);
  } catch (err) {
    //catch and log errors that occur during the file writing process
    console.error('Error exporting names:', err);
  } finally {
    //return to the menu regardless of success or failure
    returnToMenu();
  }
}
//function to show summary description of a troupe
function provideSummaryDescriptionOfTroupe() { 
  console.log(border);
  console.log('\x1b[34m|      \x1b[35mList \x1b[32mof \x1b[33mTroupes\x1b[34m         |\x1b[0m'); //colour coding and bordering
  console.log(border);

  console.log('List of Troupes:'); //display the list of troupes
  troupes.forEach((troupe, index) => {
    console.log(`${index + 1}. ${troupe.name}`); //logs troupe name from index
  });

  //ask the user to select a troupe by name or number
  const troupeSelection = prompt('Select a troupe by name or number: ');
 //determine the selected troupe based on user input
  const selectedTroupe =
    isNaN(troupeSelection) ?
    troupes.find(troupe => troupe.name.toLowerCase() === troupeSelection.toLowerCase()) : //parses everything to lower case to make input case insensitive
    troupes[parseInt(troupeSelection) - 1];

  //handle invalid troupe selection
  if (!selectedTroupe || !selectedTroupe.members || !Array.isArray(selectedTroupe.members)) {
    console.log('Invalid troupe or no members found.');
    returnToMenu();
    return;
  }

  console.log(border);
  console.log(`\x1b[36m|\x1b[0m    \x1b[35mTroupe \x1b[32mName: \x1b[33m${selectedTroupe.name.padEnd(12)} \x1b[36m|\x1b[0m`);
  console.log(border);

  const instrumentCount = {};
  //count the number of each instrument in the selected troupe
  selectedTroupe.members.forEach(member => {
    instrumentCount[member.instrument] = instrumentCount[member.instrument] + 1 || 1;
  });

  //display the count of each instrument in the selected troupe
  for (const instrument in instrumentCount) {
    console.log(`\x1b[36m|\x1b[0m   ${getInstrumentEmoji(instrument)} ${instrument.padEnd(18)}: ${instrumentCount[instrument].toString().padStart(3)} \x1b[36m|\x1b[0m`);
  }

  console.log(border); //bordering
  returnToMenu();
}

function provideDetailedDescriptionOfTroupe() {
  console.log(border);
  console.log('\x1b[34m|      \x1b[35mList \x1b[32mof \x1b[33mTroupes\x1b[34m         |\x1b[0m');
  console.log(border);
  troupes.forEach((troupe, index) => {
    console.log(`${index + 1}. ${troupe.name}`);
  });
  console.log(border);

  const troupeSelection = prompt('Select a troupe by name or number: ');
  const selectedTroupe =
    isNaN(troupeSelection) ?
    troupes.find(troupe => troupe.name.toLowerCase() === troupeSelection.toLowerCase()) :
    troupes[parseInt(troupeSelection) - 1];

  if (!selectedTroupe) {
    console.log('Invalid troupe selection.');
    returnToMenu();
    return;
  }

  console.log(border);
  console.log(`Troupe Name: ${selectedTroupe.name}`);
  console.log(border);

  const instrumentCount = {};

  selectedTroupe.members.forEach(member => {
    instrumentCount[member.instrument] = instrumentCount[member.instrument] + 1 || 1;
  });


  for (const instrument in instrumentCount) {
    console.log(border);
    console.log(`\x1b[34m${instrument} (${getInstrumentEmoji(instrument)}) : \x1b[0m`);

    const instrumentMembers = selectedTroupe.members.filter(member => member.instrument === instrument);

    instrumentMembers.forEach(member => {
      console.log(`| \x1b[32mName: ${member.name}         \x1b[32m| \x1b[32mYears Playing: ${member.yearsPlaying.toString()}        \x1b[32m| \x1b[32mHourly Rate: $${member.hourlyRate.toString().padEnd(3)} \x1b[0m|\x1b[32m`);
      if (instrument === 'Guitarist') {
        const guitarist = new Guitarist('', 0, 0, '');
        console.log(`| \x1b[33mInteresting Fact: ${guitarist.getInterestingFact()}                \x1b[0m`);
      } else if (instrument === 'Bassist') {
        const bassist = new Bassist('', 0, 0);
        console.log(`| \x1b[33mInteresting Fact: ${bassist.getInterestingFact()}                \x1b[0m`);
      } else if (instrument === 'Percussionist') {
        const percussionist = new Percussionist('', 0, 0);
        console.log(`| \x1b[33mInteresting Fact: ${percussionist.getInterestingFact()}                \x1b[0m`);
      } else if (instrument === 'Flautist') {
        const flautist = new Flautist('', 0, 0);
        console.log(`| \x1b[33mInteresting Fact: ${flautist.getInterestingFact()}                \x1b[0m`);
      }
    });
    console.log(border);
  }

  returnToMenu();
}


function returnToMenu(afterOperation = false) { //uses afterOperation as a parameter with a default value of false
  if (!afterOperation) {
    const returnOption = prompt('Press Enter to return to the menu.'); //declares returnoption as a prompt for user to press enter
    if (returnOption === '') { //condition to check the users input is an empty string the function returns true and initiates and returns the user to the menu
      return true; //return a boolean value to indicate to the caller to show the menu
    } else {
      return false; //if the string is not empty it will return false and not show the menu
    }
  }
  return false; //if afterOperation is true the function skips the prompt and just returns false and shows the menu
}
//wrote menu as a function to enable user to return to menu after each use of program to keep stored array data available until the program is exited
function showMenu() {
  console.log('\x1b[36m=====================================\x1b[0m');
  console.log('\x1b[36m|\x1b[0m\x1b[35m     MUSOPLAN\x1b[0m \x1b[32mMUSIC\x1b[0m \x1b[33mMANAGEMENT \x1b[36m    |\x1b[0m');
  console.log('\x1b[36m=====================================\x1b[0m');
  console.log('\x1b[36m|\x1b[0m   \x1b[32m1. Create and Register Member   \x1b[36m|\x1b[0m');
  console.log('\x1b[36m|\x1b[0m   \x1b[33m2. Create Troupe                \x1b[36m|\x1b[0m');
  console.log('\x1b[36m|\x1b[0m   \x1b[34m3. Add Member to Troupe         \x1b[36m|\x1b[0m');
  console.log('\x1b[36m|\x1b[0m   \x1b[35m4. Calculate Show Costs         \x1b[36m|\x1b[0m');
  console.log('\x1b[36m|\x1b[0m   \x1b[36m5. Export Troupe Names          \x1b[36m|\x1b[0m');
  console.log('\x1b[36m|\x1b[0m   \x1b[32m6. Import Troupe Names          \x1b[36m|\x1b[0m');
  console.log('\x1b[36m|\x1b[0m   \x1b[33m7. Summary Troupe Info          \x1b[36m|\x1b[0m');
  console.log('\x1b[36m|\x1b[0m   \x1b[34m8. Detailed Troupe Info         \x1b[36m|\x1b[0m');
  console.log('\x1b[36m|\x1b[0m   \x1b[35m9. Exit the program             \x1b[36m|\x1b[0m');
  console.log('\x1b[36m=====================================\x1b[0m');
}
//function to exit program, uses process.exit
function exitProgram() {
  console.log('Exiting the program. Goodbye!');
  process.exit();
}

function getInstrumentEmoji(instrument) {
  switch (instrument.toLowerCase()) {
    case 'guitarist':
      return '🎸';
    case 'bassist':
      return '🎻';
    case 'percussionist':  //switch statement to return emojis for display information
      return '🥁';
    case 'flautist':
      return '🎶';
    default:
      return ''; //return empty string for unknown instruments, just must have a default case so I included this null value
  }
}

module.exports = {
registerMusician,
createTroupe,
addMusicianToTroupe,
calculateCost,
importNamesFromTextFile,
exportNamesToTextFile,
provideSummaryDescriptionOfTroupe,
provideDetailedDescriptionOfTroupe,
returnToMenu,
showMenu,
exitProgram,
}