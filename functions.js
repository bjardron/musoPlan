
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