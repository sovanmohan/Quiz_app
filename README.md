# Quiz_app
Task2 of bharatintern is to make a quiz app using language like HTML,CSS and Javascript and to use it in the electron app prcedure.
# Install Node.js and npm:

Go to the Node.js website (https://nodejs.org) and download the latest version of Node.js.
Install Node.js on your computer, following the instructions on the website.
npm (Node Package Manager) is installed automatically with Node.js.
Create a new project folder:

# Create a new folder for your project.
Open the folder in your terminal or command prompt.
Initialize the project:

# Run the following command to initialize your project:
npm init -y
This command will create a package.json file in your project folder.
Install Electron:

# Run the following command to install Electron:
npm install --save-dev electron
This will install Electron as a development dependency for your project.
Create the HTML, CSS, and JavaScript files:

Create a new file called index.html and write the HTML code for your quiz app.
Create a new file called style.css and write the CSS code to style your quiz app.
Create a new file called script.js and write the JavaScript code to implement the functionality of your quiz app.
Build the quiz:

# Write a series of questions and answers in JavaScript arrays.
Use DOM manipulation to display the questions and answers in the HTML document.
Use JavaScript event listeners to check if the selected answer is correct or incorrect.
Use a scoring system to keep track of the user's score.
Test your app:

# Run the following command to start your Electron app:
npx electron .
This will launch your app in an Electron window.
Test your app by answering the quiz questions and verifying that the scoring system works correctly.
Package your app:

# Run the following command to package your app:

npm run package
This will create a packaged version of your app in the dist folder.
