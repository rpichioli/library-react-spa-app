# library-react-spa-app

This is a library application built with React. 

The objective is to ilustrate the most used concepts within a common SPA (single-page application) and how to use it React-way.

### Concepts you'll find here
You'll see some stuff like routing, lifecycle, state from root parent as "database", data and state management from child, form handling, data validation, prop-types to validate properties data and requirement, and more..

### Requirements
You must have **npm** in your OS by installing **NodeJS**, easily found at the official website.

The **npm** is used to install the project dependencies and run it by command line.

### Running the React application
First of all you must open your terminal and go to the ```/src/``` where you can see a **package.json**. 

Now you need to install the npm dependencies using the command ```npm install```.

Finally you just must enter ```npm start``` to run the React application.

Simple like that!


### Suggestion
- You can go deeper into React data management techniques taking a look at my React-Redux example repository [spa-with-react-redux](https://github.com/rpichioli/spa-with-react-redux). I used redux state store like database and passed by Redux essential principles and techniques to fetch data, persist the state, intercept updates to sync with localStorage, and more.

- If you want to go ahead in a more advanced application like a Redux-Database interation within React + NodeJS RESTful API with relational database in a complete scenerio, I suggest you to see the repository [react-with-nodejs-and-sequelize](https://github.com/rpichioli/react-with-nodejs-and-sequelize). I used axios to request NodeJS API inside my actions scope and dispatched it to reducer that fills the store (Redux principles). The NodeJS Express API is using Sequelize ORM that manipulate relational database (MySQL) mapping tables and doing all the stuff that and ORM do naturally.

### Developed by
Rodrigo Quiñones Pichioli, since Dec/2018
