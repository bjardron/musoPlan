
//this function registers a musician asks the hourly rate, the instrument and returns to the menu once registered
function registerMusician() {
    const name = prompt('Enter musician\'s name (3 to 30 characters): ');
    
    //error handling for the function, if the name is less than 3 characters or more than 30 it will throw 'Name should be between 3 and 30 characters'
    if (name.length < 3 || name.length > 30) {
      console.log('Name should be between 3 and 30 characters.');
      registerMusician();
      return;
    }
  
    const yearsPlaying = parseFloat(prompt('Enter years playing: '));
    const hourlyRate = parseFloat(prompt('Enter hourly rate (minimum $50): '));
    
    //error handling, if the user inputs anything that isnt a number it will return to the start of the function
    if (isNaN(yearsPlaying) || isNaN(hourlyRate) || hourlyRate < 50) {
      console.log('Years playing and hourly rate should be numbers, and the hourly rate should be a minimum of $50.');
      registerMusician();
      return;
    }
    //added cute emojis to the instruments cause javascript
    console.log('Available Instruments:');
    console.log('1. 🎸 Guitarist');
    console.log('2. 🎻 Bassist');
    console.log('3. 🥁 Percussionist');
    console.log('4. 🎶 Flautist');
  
    const musicianType = prompt('Select the type of instrumentalist (enter number): ');
    switch (musicianType) {
      case '1':
        const strings = prompt('Enter number of strings: ');
        const guitarist = new Guitarist(name, yearsPlaying, hourlyRate, strings);
        musicians.push(guitarist);
        console.log('Guitarist registered successfully.');
        showMenu();//show menu returns the user to the menu upon successful registration
        break;
      case '2':
        const bassist = new Bassist(name, yearsPlaying, hourlyRate);
        musicians.push(bassist);
        console.log('Bassist registered successfully.');
        showMenu();
        break;
      case '3':
        const percussionist = new Percussionist(name, yearsPlaying, hourlyRate);
        musicians.push(percussionist);
        console.log('Percussionist registered successfully.');
        showMenu();
        break;
      case '4':
        const flautist = new Flautist(name, yearsPlaying, hourlyRate);
        musicians.push(flautist);
        console.log('Flautist registered successfully.');
        showMenu();
        break;
      default:
        console.log('Invalid selection.');//this handles invalid selections and returns the user to the start of the function
        registerMusician();
        break;
    }
  }