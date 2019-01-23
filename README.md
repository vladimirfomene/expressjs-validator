# Express-Validator

## IDE And Tools

* This application does not use any build tools just Node.js and npm

## App Setup

* Clone this repository by executing `git clone https://github.com/vladimirfomene/expressjs-validator.git` in your console.
* Enter the project directory with `cd expressjs-validatory`.
* Run `npm install` to install all the project's dependencies.

## Running the app.

* Run the app by executing `node app.js` in the project directory.


## Testing the application

* Visit `http://localhost:3000` and enter bogus data in the signup form. Then press enter to see how the app reacts.


## Validation Rules

* `firstName` must exist with a mininum length of 2.
* `lastName` must exist with a mininum length of 2.
* `classYear` is an int and must exist.
* `email`, email must exist and has to be valid.
* `phoneNumber`, must exist and be at least 8 digits.
* `password`, must exist with a mininum length of 5.
* `confirmPassword`, must be the same as `password`.
* `isAdmin` is optional.
