![screenshot](src/assets/public/images/linda.png)

# Linda Austin Dance

This <a href="https://angular.io/">angular4</a> application tracks and manages artists involved in projects by choreographer <a href="https://pwnw-pdx.org/linda-austin-dance/">Linda Austin</a>. An administrator can log in to create, edit, remove & filter artists by role on  projects. All information is dynamically stored in a <a href="https://firebase.google.com/">firebase</a> database.

### Installation/ Usage
_note: to run this locally you'll need an account with firebase_

* Clone this repo
* Navigate to the locally cloned repo `$ cd la-dance`
* Run `$ apm install atom-typescript`
* Run `$ npm install`
* Run `$ bower install`
* Run `$ bower install bootstrap --save`

_dance around & thank <a href="http://seanpierce.us/">Sean</a> for detailing these instructions_

* Sign into your Firebase console
* Create a new database with <a href="https://firebase.google.com/docs/database/security/quickstart">read, write rules set to "true"</a>
* Download this repo
* In the app folder of the local repo _(located in > la-dance/src/app/)_ create a file called **api-keys.ts**  
* in the api-keys.ts file, add:
  ```
  export var masterFirebaseConfig = {
    apiKey: "Your API info",
    authDomain: "Your API info",
    databaseURL: "Your API info",
    projectId: "Your API info",
    storageBucket: "Your API info",
    messagingSenderId: "Your API info"
  };
  ```
* replace "Your API info" with your new database information _(in the Firebase console, this is located in Database > Overview > Add Firebase to your web app)_
* next, set your database permissions in firebase by navigating to > Database > Rules and set both 'read' and 'write' to 'true'
  ```
  {
    "rules": {
      ".read": true,
      ".write": true
    }
  }
  ```
* **You can seed your DB using the information provided in the root directory of this repo, labeled sample-artists.json**
* Once you're all done setting up, run `$ ng s` to start the angular server. Visit <a href="localhost:4200">localhost:4200</a> to see the site in action!

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Technologies Used
* HTML
* CSS, Bootstrap
* JavaScript
* TypeScript
* Node.js
* Angular4
* Firebase

### Support and contact details
_jincamou@gmail.com_

### License
_MIT_ &copy; _2017_ **jin camou**
