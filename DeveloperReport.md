### Developer Report

#### Project Overview
The project is a music management software named "MUSOPLAN" that facilitates the management of musicians and troupes, allowing users to register musicians, create troupes, add musicians to troupes, calculate deployment costs, import/export troupe names, and view summaries/detailed descriptions of troupes.

#### Functions and Variables Breakdown

#### `registerMusician()`
- **Variables**:
  - `name`: Captures musician name.
  - `yearsPlaying`: Records the duration of musician's experience.
  - `hourlyRate`: Holds the musician's set hourly rate.
  - `musicianType`: Represents the chosen instrumentalist.
  - `strings`: Stores the number of strings for guitarists.
  - `guitarist/bassist/percussionist/flautist`: Instances of specific musician types based on user input.

#### `createTroupe()`
- **Variables**:
  - `genreChoice`: Records the selected genre for the new troupe.
  - `genre`: Represents the chosen genre.
  - `name`: Stores the newly created troupe's name.
  - `troupe`: Instance of the Troupe class based on user inputs.

#### `addMusicianToTroupe()`
- **Variables**:
  - `troupeIndex`: Captures the index of the selected troupe.
  - `musicianIndex`: Records the index of the selected musician.
  - `selectedTroupe`: Represents the chosen troupe for adding a musician.
  - `instrument`: Stores the instrument of the chosen musician.

#### `calculateCost()`
- **Variables**:
  - `troupeIndex`: Records the index of the selected troupe for cost calculation.
  - `selectedTroupe`: Represents the chosen troupe for cost calculation.
  - `duration`: Holds the duration input for cost computation.
  - `totalCost`: Accumulates the total deployment cost for the specified duration.

#### `importNamesFromTextFile()`
- **Variables**:
  - `filePath`: Stores the file path entered by the user.
  - `data`: Captures the content read from the text file.
  - `troupeDetails`: Holds extracted troupe details from the file.
  - `name/genre`: Variables storing troupe name and genre from the imported file.

#### `exportNamesToTextFile()`
- **Variables**:
  - `allNames`: Contains combined musician and troupe names for export.
  - `content`: Holds concatenated names for writing to the text file.
  - `fileName`: Stores the user-input file name for export.

#### `provideSummaryDescriptionOfTroupe()` & `provideDetailedDescriptionOfTroupe()`
- **Variables**:
  - `troupeSelection`: Captures user-selected troupe (by name or number).
  - `selectedTroupe`: Represents the chosen troupe based on user selection.
  - `instrumentCount`: Counts of each instrument in the selected troupe.
  - `instrumentMembers`: Holds members of the selected instrument within the troupe.

#### `returnToMenu()`
- **Variables**:
  - `returnOption`: Stores user input for returning to the menu.

#### `showMenu()` & `exitProgram()`
- **Variables**:
  - These functions do not declare specific variables.
