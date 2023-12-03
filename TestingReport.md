# MusoPlan Testing Report

## Unit Test Cases

### Test Case 1: Registering a Musician

- **User Requirement:** Ability to register a musician with valid information.
- **Inputs Required:** 
  - Name: "John Doe"
  - Years Playing: 4
  - Hourly Rate: 60
  - Instrument: Guitarist
- **Expected Outcome:** Successful registration of the musician.
- **Actual Outcome:** The musician "John Doe" is successfully registered as a guitarist with the provided details.
- **Modifications Required (if defect identified):** None

### Test Case 2: Creating a Troupe

- **User Requirement:** Capability to create a troupe with a specified name and genre.
- **Inputs Required:** 
  - Troupe Name: "Rockstars"
  - Genre: "Rock"
- **Expected Outcome:** Creation of a new troupe named "Rockstars" under the genre "Rock."
- **Actual Outcome:** The troupe "Rockstars" is successfully created under the genre "Rock."
- **Modifications Required (if defect identified):** None

### Test Case 3: Adding Musician to Troupe

- **User Requirement:** Ability to add a musician to a troupe.
- **Inputs Required:** 
  - Select Troupe: "Rockstars"
  - Select Musician: "John Doe" (previously registered)
- **Expected Outcome:** Addition of musician "John Doe" to the "Rockstars" troupe.
- **Actual Outcome:** Musician "John Doe" is successfully added to the "Rockstars" troupe.
- **Modifications Required (if defect identified):** None

### Test Case 4: Calculating Show Costs

- **User Requirement:** Calculate the cost of deploying a troupe for a specific duration.
- **Inputs Required:** 
  - Select Troupe: "Rockstars"
  - Show Duration: 2.5 hours
- **Expected Outcome:** Calculation of the cost for deploying the "Rockstars" troupe for 2.5 hours.
- **Actual Outcome:** Cost calculation completed as expected for the specified duration.
- **Modifications Required (if defect identified):** None

### Test Case 5: Importing Troupe Names from Text File

- **User Requirement:** Import troupe names and genres from a text file.
- **Inputs Required:** 
  - File Path: Path to the text file containing troupe details.
- **Expected Outcome:** Successful import of troupe names and genres from the specified file.
- **Actual Outcome:** Import operation completes successfully, retrieving troupe details as expected.
- **Modifications Required (if defect identified):** None
