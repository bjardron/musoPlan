const prompt = require('prompt-sync')(); //calls prompt sync to prompt the user for inputs
const fs = require('fs'); //calls the file system from node.js to import and export text files

//calls from functions.js to use our intended functions
const {
  registerMusician,
  createTroupe,
  addMusicianToTroupe,
  calculateCost,
  importNamesFromTextFile,
  exportNamesToTextFile,
  provideSummaryDescriptionOfTroupe,
  provideDetailedDescriptionOfTroupe,
  showMenu,
  exitProgram,
} = require('./functions.js');

while (true) {
  showMenu();
//switch and case statements for menu prompts to call required functions
  const choice = prompt('Enter your choice: ');
  switch (choice) {
    case '1':
      registerMusician();
      break;
    case '2':
      createTroupe();
      break;
    case '3':
      addMusicianToTroupe();
      break;
    case '4':
      calculateCost();
      break;
    case '5':
      exportNamesToTextFile();
      break;
    case '6':
      importNamesFromTextFile();
      break;
    case '7':
      provideSummaryDescriptionOfTroupe();
      break;
    case '8':
      provideDetailedDescriptionOfTroupe();
      break;
    case '9':
      exitProgram();
      break;
    default:
      console.log('Invalid choice. Please enter a valid option.'); //error handling for required functions
      break;
  }
}