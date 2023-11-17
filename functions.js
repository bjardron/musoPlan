
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
returnToMenu(true); //boolean 
}
