'use strict';



/*
Create a username and email address for a student.
 * @param { string } fullName
 * @return { array } userName and email
*/
// function createEmail(fullName) {}

let userNames = ['erlee',
'erlee1',
'stmendis',
'bekizior',
'mabekova',
'stmendis1',
'stmendis2',
'akeshapula',
'sholongain',
'sholongai1'
];

function createEmail(fullName) {
    if (!fullName) {
        return null;
    }

    // I used const's to split the name between first and last
    const names = fullName.split(" ");
    // I used const's to start the first name at the start
    const firstName = names[0];
    // I used const's to make sure the last name starts when first ends
    const lastName = names[names.length - 1];

    // I then dreated the username by combining the first two characters of the first name plus the last name
    // Made sure they were all lowercase
    let startUserName = `${firstName.slice(0, 2)}${lastName}`.toLowerCase();
    
    // Taking the starting username and replacing all the special characters
    let userName = startUserName.replace(/[^a-zA-Z0-9]/g, '');

    // Limiting the username to 10 characters
    userName = userName.slice(0, 10);

    // I use this function to check for unique names
    // I cycle through names in the list and check user's reponse
    let count = 1;
    while (userNames.includes(userName)) {
        if (userName.length === 10) {
            userName = startUserName.slice(0, 9) + count;
        } else {
            userName = startUserName + count;
        }
    }

    // Adding the username to the list of known usernames
    userNames.push(userName);

    // Create the email address
    const email = `${userName}@iu.js.edu`;

    // Return the welcome message
    return `Welcome! Your username is ${userName} and your new email is ${email}.`;
}

// Flag to determine if the user wants to create more email addresses
let createMore = true;

// Loop to allow the user to create multiple email addresses
while (createMore) {
    // Get the full name from the user
    let promptName = prompt('Enter your full name:');
    
    // Call the createEmail function with the provided full name
    let userInfo = createEmail(promptName);

    // Display the result
    console.log(userInfo);

    // Ask the user if they want to create another email
    let createAnother = prompt('Would you like to create another email address? (yes/no)');

    // Check the user's response
    if (createAnother === null || createAnother.toLowerCase() !== 'yes') {
        createMore = false;
    }
}