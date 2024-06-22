# Gingerbread

SPA with some requirements:
<details>
  <summary>Click me</summary>

* Pages:
  * Login page
  * Table with data received from the server
  * Table must provide CRUD 
* Behavior of the application functions:
  * An unauthorized user should be prompted to log in when opening applications.
  * After successful authorization, the user should see a table with data.
  * After reloading the page the user must remain logged in
  * Ability to add a new record to the table
  * The new entry in the table should appear immediately
  * Ability to delete an entry
  * The deleted record should immediately disappear from the table
  * Ability to change entry
  * Changes should be immediately reflected in the table
  * The application must correctly inform the user about errors in filling out forms or unsuccessful requests to the server
  * While receiving and sending data to the server, the user should be shown indicators of the loading/sending process (progress bars, spinners) of data
</details>

# Installation
At least you need [Node.js](https://nodejs.org/en) 

run these commands
```
npm install
npm run dev
```

# Stack 
* React
* TypeScript
* MUI