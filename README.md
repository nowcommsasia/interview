# Interview

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Database

The endpoint to the test database for this interview has been setup.

An example to retrieve data from the Firebase endpoint can be found in /src/services/notes.service.ts.

## Objective

The objective of this test is to evaluate the candidate's capability in the following areas by building a simple note taking application:

1. Handling CRUD with Firebase (Create, read, update, delete notes)
2. Popup a modal on clicking new folder or new note to create
3. When note is clicked, show the selected note in a modal for the user to read or edit
4. Allow user to create folder to add notes in it
5. When folder is clicked, show all notes in the folder
6. Recent folders should always reflect the folder that was last clicked by the user
7. Search should search all content in all notes and show any notes that contains the keyword in real time

You are allowed to use as many assumptions as you like, but don't forget to explain it.

Expected output for reference:
![alt text](https://github.com/nowcommsasia/interview/blob/main/src/assets/expected.png?raw=true)

## Bonus

1. Beautify the UI using Material framework (https://material.angular.io/)
2. Automate test cases using Cypress
3. Surprise us :)
