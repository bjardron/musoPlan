
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

  const border = '\x1b[36m================================\x1b[0m';
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

//this function creates a troupe
function createTroupe() {
  const border = '\x1b[36m================================\x1b[0m';
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
let duration = parseFloat(prompt('Enter duration (in hours, between 0.5 and 3): '));

if (isNaN(duration) || duration < 0.5 || duration > 3) {  
  console.log('Duration should be a number between 0.5 and 3 hours.'); //error handling for duration of show. if it is not a number or outside the declared range it will throw an error to user
  createTroupe();
  return;
}

const troupe = new Troupe(name, genre, duration);
troupes.push(troupe);
console.log('Troupe created successfully.');
returnToMenu(true); //boolean statement that returns user to menu calling the return to menu function. 

}

function addMusicianToTroupe() {
  if (musicians.length === 0) {
    console.log('No musicians registered yet.'); //error handling for no created musicians. If array is empty it will throw this error'
    showMenu();
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
    console.log('No troupes created yet.'); //error handling, refers to array, if array length = 0 then throws error
    showMenu();
    return;
  }

  console.log('Available Troupes:');
  troupes.forEach((troupe, index) => {
    console.log(`${index + 1}. ${troupe.name}`);
  });

  const troupeIndex = parseInt(prompt('Select troupe to calculate cost (enter number): ')) - 1;
  if (isNaN(troupeIndex) || troupeIndex < 0 || troupeIndex >= troupes.length) { //error handling for indexing. 
    console.log('Invalid troupe selection.');
    calculateCost();
    return;
  }

  const selectedTroupe = troupes[troupeIndex];
  let totalCost = 0; //set total cost as 0 before introducing variables

  selectedTroupe.members.forEach(member => {
    totalCost += member.hourlyRate * selectedTroupe.duration; //formula for cost calculation. Uses duration of show x hourly rate
  });

  console.log(`The cost of deploying ${selectedTroupe.name} for ${selectedTroupe.duration} hours is $${totalCost}.`); //logs message to user with calculated cost
  showMenu(); //shows the menu
}

function importNamesFromTextFile() {
  const filePath = prompt('Enter the file path: ');

  try {
    const data = fs.readFileSync(filePath, 'utf-8'); //use file sync to read the uploaded file
    importedNames = data.split('\n').filter(name => name.trim() !== ''); //split is used to split the content into an array of substrings, breaking it wherever a newline character (\n) is found.

    if (importedNames.length === 0) {
      console.log('No names found in the file.'); //error handling, if the array is empty it will return this error
    } else {
      console.log('Imported names:');
      importedNames.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`); //prints the array values starting from 1, includes the name variable for readability
      });
    }
  } catch (err) {
    console.error('Error reading the file:', err); //uses catch statement to catch file read error. 
  } finally {
    returnToMenu(); //return user to menu on error
  }
}

function exportNamesToTextFile() {
  if (importedNames.length === 0) {
    console.log('No names to export.'); //error handling for export names to file. If array is empty will return this statement
    returnToMenu(); //return user to menu on error. 
    return;
  }

  const content = importedNames.join('\n'); //joins array values on a new lines.
  const fileName = prompt('Enter the file name to export: ');  //gives user input to choose name of saved file

  try {
    fs.writeFileSync(`${fileName}.txt`, content);
    console.log(`Names exported to ${fileName}.txt`);  //successful write to text will display this message
  } catch (err) {
    console.error('Error exporting names:', err); //error handling for name export
  } finally {
    returnToMenu(); //return user to menu
  }
}
//function to show summary description of troupe
function provideSummaryDescriptionOfTroupe() {
  console.log('List of Troupes:');
  troupes.forEach((troupe, index) => {
    console.log(`${index + 1}. ${troupe.name}`); //uses indexed values from array and logs to console
  });

  const troupeSelection = prompt('Select a troupe by name or number: ');
  const selectedTroupe =
    isNaN(troupeSelection) ? //conditional statement: isNaN(troupeSelection) checks if the input is not a number.
    troupes.find(troupe => troupe.name.toLowerCase() === troupeSelection.toLowerCase()) :  //searches array for a troupe whose name matches the user input (case insensitive due to the use of toLowerCase()).
    troupes[parseInt(troupeSelection) - 1]; // converts troupeSelection to an integer using parseInt() and retrieves the corresponding troupe from the troupes array

  if (!selectedTroupe) {
    console.log('Invalid troupe selection.');
    return; //error handling using boolean value. if the user input does not match any available troupes it returns an error
  }

  const instrumentCount = {}; //initializes an empty object that will store counts for each instrument found among the members of the selected troupe.

  selectedTroupe.members.forEach(member => { //The selectedTroupe.members.forEach() loop iterates through each member of the troupe.
    instrumentCount[member.instrument] = instrumentCount[member.instrument] + 1 || 1; //For each member, it updates the instrumentCount object:
  }); 

  console.log(`Troupe Name: ${selectedTroupe.name}`); 
  for (const instrument in instrumentCount) {
    console.log(`${instrument}: ${instrumentCount[instrument]}`); //For each instrument, it logs the instrument's name and its corresponding count to the console: console.log(${instrument}: ${instrumentCount[instrument]});
  }

  returnToMenu();
}
//function to provide a detailed description of a selected troupe
function provideDetailedDescriptionOfTroupe() {
  //displaying a list of available troupes
  console.log('List of Troupes:');
  troupes.forEach((troupe, index) => {
    console.log(`${index + 1}. ${troupe.name}`);
  });

  //asking the user to select a troupe by name or number
  const troupeSelection = prompt('Select a troupe by name or number: ');
  //determining the selected troupe based on user input
  const selectedTroupe =
    isNaN(troupeSelection) ?
    troupes.find(troupe => troupe.name.toLowerCase() === troupeSelection.toLowerCase()) :
    troupes[parseInt(troupeSelection) - 1];

  //handling invalid troupe selection
  if (!selectedTroupe) {
    console.log('Invalid troupe selection.');
    returnToMenu();
    return;
  }

  //displaying the name of the selected troupe
  console.log(`Troupe Name: ${selectedTroupe.name}`);

  //object to count the number of each instrument in the selected troupe
  const instrumentCount = {};

  //counting the number of members playing each instrument in the selected troupe
  selectedTroupe.members.forEach(member => {
    instrumentCount[member.instrument] = instrumentCount[member.instrument] + 1 || 1;
  });

  //iterating through each instrument in the instrumentCount object
  for (const instrument in instrumentCount) {
    console.log(`${instrument}s:`); // Displaying the instrument name (plural form)
    
    //filtering members who play the current instrument
    const instrumentMembers = selectedTroupe.members.filter(member => member.instrument === instrument);
    
    //displaying information about members playing the current instrument
    instrumentMembers.forEach(member => {
      console.log(`Name: ${member.name}, Hourly Rate: $${member.hourlyRate}`);
    });

    //displaying an interesting fact for specific instruments
    if (instrument === 'Guitarist') {
      const guitarist = new Guitarist('', 0, 0, '');
      console.log(`Interesting Fact: ${guitarist.getInterestingFact()}`);
    } else if (instrument === 'Bassist') {
      const bassist = new Bassist('', 0, 0);
      console.log(`Interesting Fact: ${bassist.getInterestingFact()}`);
    } else if (instrument === 'Percussionist') {
      const percussionist = new Percussionist('', 0, 0);
      console.log(`Interesting Fact: ${percussionist.getInterestingFact()}`);
    } else if (instrument === 'Flautist') {
      const flautist = new Flautist('', 0, 0);
      console.log(`Interesting Fact: ${flautist.getInterestingFact()}`);
    }
  }

  //returns user to menu
  returnToMenu();
}

function returnToMenu(afterOperation = false) { 
  if (!afterOperation) {
    const returnOption = prompt('Press Enter to return to the menu.');
    if (returnOption === '') {
      return true; //return a boolean value to indicate to the caller to show the menu
    } else {
      returnToMenu();
    }
  }
  return false;
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
