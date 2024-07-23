0x05. NodeJS Basics
===================

Back-end JavaScript ES6 NodeJS ExpressJS


![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220809T195501Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=43b4a8b5bdaf5cb33711d5acc543430bc22f2a0a5354406c81d145a57b6abe44)

Resources
---------

**Read or watch**:

-   [Node JS getting started](https://alx-intranet.hbtn.io/rltoken/zIYhQPHfn37Hlk3I9gfPGw "Node JS getting started")
-   [Process API doc](https://alx-intranet.hbtn.io/rltoken/Wt69QV2xygB4GEqob26AjQ "Process API doc")
-   [Child process](https://alx-intranet.hbtn.io/rltoken/IS4y9rRCblX71W_oeXpymw "Child process")
-   [Express getting started](https://alx-intranet.hbtn.io/rltoken/XsfrhG9NRLuuaTpVZlZv_g "Express getting started")
-   [Mocha documentation](https://alx-intranet.hbtn.io/rltoken/EBGDj1FwLrK_y4kgxp8hfg "Mocha documentation")
-   [Nodemon documentation](https://alx-intranet.hbtn.io/rltoken/vnDSbLsicMDdxcf5YUSXIg "Nodemon documentation")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/vXmxtc5JH_CeIWReMTNhDA "explain to anyone"), **without the help of Google**:

-   run javascript using NodeJS
-   use NodeJS modules
-   use specific Node JS module to read files
-   use `process` to access command line arguments and the environment
-   create a small HTTP server using Node JS
-   create a small HTTP server using Express JS
-   create advanced routes with Express JS
-   use ES6 with Node JS with Babel-node
-   use Nodemon to develop faster

Requirements
------------

-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
-   All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

Provided files
--------------

### `database.csv`

```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS

```

### `package.json`

Click to show/hide file contents

```
{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
```

### `babel.config.js`

Click to show/hide file contents

```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `.eslintrc.js`

Click to show/hide file contents

```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```
### and...

Don't forget to run `$ npm install` when you have the `package.json`

```
In Node.js, synchronous and asynchronous are two different ways of executing code
that involve handling tasks that may take time to complete,
such as reading files, making network requests, or performing database operations.
The key difference between them lies in how they handle blocking and non-blocking behavior:

Synchronous Execution:

In synchronous code execution:
Each operation is executed one after the other in a sequential manner.
When an operation is encountered that takes time to complete (e.g., reading a file),
the entire program is blocked and waits for that operation to finish before moving on to the next line of code.
Synchronous code can lead to reduced responsiveness,
as the program is blocked and cannot perform other tasks during the waiting period.
Asynchronous Execution:

In asynchronous code execution:
Tasks that take time to complete are initiated,
and the program continues executing without waiting for the task to finish.
When the task is completed, a callback function or a promise is used to handle the result.
Asynchronous code allows the program to remain responsive and continue executing other
tasks while waiting for slow operations to complete.
Asynchronous code is suitable for tasks that may take an unpredictable amount of time,
such as I/O operations and network requests.


------Synchronous Example:-----

const fs = require('fs');

try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
} catch (error) {
  console.error(error.message);
}

console.log('After reading file');

------Asynchronous Example:----

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(data);
  }
});

console.log('After initiating asynchronous read');

```

Tasks
-----

### 0\. Executing basic javascript with Node JS

mandatory

In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.

```
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `0-console.js`

 Done? Help Check your code Get a sandbox

### 1\. Using Process stdin

mandatory

Create a program named `1-stdin.js` that will be executed through command line:

-   It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
-   The user should be able to input their name on a new line
-   The program should display `Your name is: INPUT`
-   When the user ends the program, it should display `This important software is now closing` (followed by a new line)

**Requirements:**

-   Your code will be tested through a child process, make sure you have everything you need for that

```
bob@dylan:~$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$
bob@dylan:~$ echo "John" | node 1-stdin.js
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `1-stdin.js`

Done? Help Check your code Get a sandbox

```
CODE EXPLANATION

This code presents a simple interaction with the user in the command line using the process.stdin and process.stdout streams.

1. process.stdout.write('Welcome to Holberton School, what is your name?\n');
This line writes the given text to the standard output (console), prompting the user to input their name.

2. process.stdin.on('readable', () => { ... });
This part sets up an event listener for the readable event on the standard input (process.stdin). This event fires when there is data available to be read from the input stream.

3. Inside the event listener:

a. const chunk = process.stdin.read();
This line reads the data that is available to be read from the standard input stream.

b. if (chunk !== null) { ... }
This condition checks if data (chunk) has been read. If it's not null, the following code block executes.

c. process.stdout.write(Your name is: ${chunk});
This line writes the user's input (the read data) along with the message "Your name is: " to the standard output.

4. process.stdin.on('end', () => { ... });

This part sets up an event listener for the end event on the standard input stream. This event fires when there is no more data to be read from the input stream.

5. Inside the end event listener:
process.stdout.write('This important software is now closing\n');

This line writes a closing message to the standard output, indicating that the program is closing.
```

### 2\. Reading a file synchronously with Node JS

mandatory

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`

-   Create a function named `countStudents`. It should accept a path in argument
-   The script should attempt to read the database file synchronously
-   If the database is not available, it should throw an error with the text `Cannot load the database`
-   If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
-   It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

```
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `2-read_file.js`

```
CODE EXPLANATION

1. Read the content of the CSV file specified by the path parameter using fs.readFileSync.

2. Split the content into lines using data.split('\n') and then split each line intoindividual data elements using , as the delimiter. The result is stored in the result array.

3. Remove the header line (containing column names) using result.shift().

4. Create a new array named newis that contains only the first and fourth elements from each sub-array in result,
which corresponds to the first name and field of study.

5.Create a Set named fields to store unique field of study values.
6.Iterate through the newis array to populate the fields set with unique field values.

7. Create an empty object named final to store the final count of students in each field of study.

8. Iterate through the unique field values in the fields set. For each field, initialize the count to 0 in the final object.

9. Iterate through the newis array and increment the count for each field of study in the final object.

10. Print the total number of students in the dataset by filtering out rows with fewer than 4 elements (presumably excluding incomplete or erroneous data).

11. For each field of study in the final object, print the number of students, list their names, and the field they belong to.
```

 Done? Help Check your code Get a sandbox

### 3\. Reading a file asynchronously with Node JS

mandatory

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`

-   Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
-   The script should attempt to read the database file asynchronously
-   The function should return a Promise
-   If the database is not available, it should throw an error with the text `Cannot load the database`
-   If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
-   It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

```
bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$

```

**Tips:**

-   Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `3-read_file_async.js`

 Done? Help Check your code Get a sandbox

```
CODE EXPLANATION

1. The function now uses the async keyword to indicate that it's an asynchronous function.

2. Inside the function, you check if the file exists using fs.existsSync(path).
If the file does exist, you return a promise.

3. Within the promise, you use fs.readFile to read the file asynchronously.
The callback function passed to fs.readFile handles the file reading process.

4.Inside the callback function:

  a. If there's an error (err) while reading the file, an error is thrown with the message 'Cannot load the database'.

  b. If the file is read successfully, you proceed with processing the data similar to the previous version.

5. The final processed data and results are logged to the console, just like in the previous version.

6. You're using the resolve function to fulfill the promise. You are passing result, final, and newis as arguments to resolve, but this usage is a bit unusual. Usually, promises return a single value.

7. The entire function is encapsulated in a promise and returns this promise.

```

```
PROMISES IN JAVASCRIPT

A Promise in JavaScript is an asynchronous programming concept that represents a value that might be available now,
or in the future, or never.
Promises provide a clean way to handle asynchronous operations such as reading files,
making network requests, and other time-consuming tasks without blocking the main execution thread.
Promises improve the readability and maintainability of asynchronous code by providing a structured way to handle success and failure cases.

Promises have three possible states:

1. Pending: The initial state. The promise is neither fulfilled nor rejected.

2. Fulfilled (Resolved): The state when the asynchronous operation is completed successfully. In this state, the promise has a value associated with it.

3. Rejected: The state when the asynchronous operation fails. In this state, the promise has a reason (error) associated with it.

------ How Promises Work Step By Step -----

1. You create a new Promise instance, providing a function with two arguments: resolve and reject.
Inside this function, you perform your asynchronous operation, and when it's done,
you call either resolve(result) to fulfill the promise or reject(error) to reject it.

2. You attach callbacks using the .then() method to handle the successful resolution of the promise.
The callback inside .then() will be executed with the resolved value as an argument.

3. You can also attach a .catch() method to handle errors. If the promise is rejected,
the callback inside .catch() will be executed with the error as an argument.

Promises help to manage the flow of asynchronous code, making it more readable and maintainable.
However, they can become quite nested when dealing with multiple asynchronous operations.
To mitigate this, modern JavaScript includes the concept of async/await,
which provides a more synchronous-like syntax for working with asynchronous operations and promises.

```

### 4\. Create a small HTTP server using Node's HTTP module

mandatory

In a file named `4-http.js`, create a small HTTP server using the `http` module:

-   It should be assigned to the variable `app` and this one must be exported
-   HTTP server should listen on port 1245
-   Displays `Hello Holberton School!` in the page body for any endpoint as plain text

In terminal 1:

```
bob@dylan:~$ node 4-http.js
...

```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
Hello Holberton School!
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `4-http.js`

 Done? Help Check your code Get a sandbox


**---------- CODE EXPLANATION --------------**

1. `const http = require('http');`

- This line imports the built-in http module, which allows you to create HTTP servers and handle HTTP requests and responses.

2. `const hostname = 'localhost';`

- This sets the hostname to 'localhost', which means the server will bind to the local machine.

3. `const port = 1245;`

- This sets the port number to 1245 that the server will listen on.

4. `const app = http.createServer((req, res) => { ... });`

- This line creates an HTTP server using the `createServer` method of the `http` module. The callback function `(req, res) => { ... }` is called whenever a request is made to the server.

5. Inside the request handler callback function:
- a. `res.statusCode = 200;`
Sets the HTTP status code of the response to 200 (OK).

- b. `res.setHeader('Content-Type', 'text/plain');`
Sets the Content-Type header of the response to 'text/plain', indicating that the response will contain plain text.

- c. `res.end('Hello Holberton School!');`
Writes the provided text as the response body and closes the response stream.

6. `app.listen(port, hostname, () => { ... });`

- This line starts the server and makes it listen for incoming requests on the specified `port` and `hostname`. The callback function is executed when the server starts listening.

7. Inside the server start callback:

- Logs a message indicating that the server is running, including the URL.

8. `module.exports = app;`

- Exports the `app` (HTTP server) instance so that it can be used or tested in other parts of your code.

### 5\. Create a more complex HTTP server using Node's HTTP module

mandatory

In a file named `5-http.js`, create a small HTTP server using the `http` module:

-   It should be assigned to the variable app and this one must be exported
-   HTTP server should listen on port 1245
-   It should return plain text
-   When the URL path is `/`, it should display `Hello Holberton School!` in the page body
-   When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

Terminal 1:

```
bob@dylan:~$ node 5-http.js database.csv
...

```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `5-http.js`

 Done? Help Check your code Get a sandbox


**----------CODE EXPLANATION -------------**

1. The `countStudents` function now accepts an additional parameter `stream`, which represents the response stream. This parameter allows you to write the results directly to the HTTP response.

2. Inside the `countStudents` function, you've made some modifications to the way you write the results to the `stream`. The results are written directly to the response stream using `stream.write()`.

3. Inside the HTTP server callback function `(req, res) => { ... }:`
a. If the URL is `'/'`, it responds with the message "Hello Holberton School!".
b. If the URL is `'/students'`, it responds with "This is the list of our students" and then calls the `countStudents` function to process the CSV file and write the results to the response stream. If an error occurs during processing, the error message is written to the response.

4. The server listens on the specified port and hostname using `app.listen(port, hostname);`

5. The `module.exports = app;` statement at the end exports the `app` instance so that it can be used or tested in other parts of your code.


- This updated version of the code continues to demonstrate creating an HTTP server, but now it has different behavior for different URLs. When accessing the root URL `'/'`, it provides a simple greeting message. When accessing the `'/students'` URL, it processes the CSV file and provides information about the students and their fields of study.

### 6\. Create a small HTTP server using Express

mandatory

Install Express and in a file named `6-http_express.js`, create a small HTTP server using Express module:

-   It should be assigned to the variable `app` and this one must be exported
-   HTTP server should listen on port 1245
-   Displays `Hello Holberton School!` in the page body for the endpoint `/`

In terminal 1:

```
bob@dylan:~$ node 6-http_express.js
...

```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /lskdlskd</pre>
</body>
</html>
bob@dylan:~$

```

**Repo:**
-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `6-http_express.js`

 Done? Help Check your code Get a sandbox

**------------CODE EXPLANATION ----------------**

- Express.js is a popular web application framework for Node.js that simplifies the process of creating APIs and handling HTTP requests and responses.


1. `const express = require('express');`

- This line imports the express module, which provides the functionality to create a web server and handle HTTP requests.

2. `const app = express();`

- This creates an instance of the Express application.

3. `app.get('/', (req, res) => { ... });`

- This defines a route for the root URL `'/'`using the HTTP GET method.
- When a GET request is made to the root URL, the callback function `(req, res) => { ... }` is executed.
- Inside the callback function, `res.send('Hello Holberton School!');` sends the specified text as the response body.

4. `app.listen(1245);`

- This starts the Express application and makes it listen on port 1245 for incoming HTTP requests.

5. `module.exports = app;`

- This exports the app instance so that it can be used or tested in other parts of your code.

- This code creates a basic Express web server that responds with the message "Hello Holberton School!" when accessed through the root URL. It demonstrates the simplicity of creating routes and handling responses using Express.js.

### 7\. Create a more complex HTTP server using Express

mandatory

In a file named `7-http_express.js`, recreate the small HTTP server using `Express`:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- It should return plain text
- When the URL path is /, it should display `Hello Holberton School!` in the  page body
- When the URL path is /students, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student!

Terminal 1:

```
bob@dylan:~$ node 7-http_express.js database.csv
...
```

Terminal 2:

```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$
```

**Repo:**
-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `7-http_express.js`

**----------CODE EXPLANATION-------------**

1. `const express = require('express');`

- Import the express module to use the Express framework.


2. `const { argv } = require('process');`

- Import the argv object from the process module to access command-line arguments.

3. `const fs = require('fs');`

- Import the fs module to work with the file system and read the CSV file.

4. Create an instance of the Express application using `const app = express();`.

5. Define a route for the root URL `'/'`  using `app.get('/', (req, res) => { ... });`:

- Set the `Content-Type` header to `'text/plain'`.
- Send the response body with the message "Hello Holberton School!".

6. Define a route for the `'/students'` URL using `app.get('/students', (req, res) => { ... });`:

- Set the `Content-Type` header to `'text/plain'`.
- Write the introductory message to the response.
- Use `fs.readFile` to asynchronously read the CSV file specified in the command-line arguments (`argv[2]`).
- Inside the file reading callback, process the data similar to the previous versions.
- Write the calculated results to the response.
- End the response with `res.end()`.

7. Start the Express application by calling `app.listen(1245);`.
8. Export the app instance using `module.exports = app`;

- This code demonstrates using Express to handle HTTP requests for specific routes (`'/'` and `'/students'`). It reads the CSV file specified as a command-line argument, processes the data, and sends the results as a response to the `/students` route.

### 8. Organize a complex HTTP server using Express

Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named `full_server`.

Since you have used ES6 and Babel in the past projects, let’s use `babel-node` to allow to use ES6 functions like `import` or `export`.

**8.1 Organize the structure of the server**

- Create 2 directories within:
    - `controllers`
    - `routes`
- Create a file `full_server/utils.js` in the file create a function named `readDatabase` that accepts a file path as argument:

- It should read the database asynchronously
- It should return a promise
- When the file is not accessible, it should reject the promise with the error
- When the file can be read, it should return an object of arrays of the firstname of students per fields

**8.2 Write the App controller**
Inside the file `full_server/controllers/AppController.js`:

- Create a class named `AppController`. Add a static method named `getHomepage`
- The method accepts `request` and `response` as argument. It returns a 200 status and the message `Hello Holberton School!`

**8.3 Write the Students controller**

Inside the file `full_server/controllers/StudentsController.js`, create a class named `StudentsController`. Add two static methods:

The first one is `getAllStudents`:

- The method accepts `request` and `response` as argument
- It should return a status 200
- It calls the function `readDatabase` from the `utils` file, and display in the page:
    - First line: `This is the list of our students`
    - And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
- If the database is not available, it should return a status 500 and the error message `Cannot load the database`

**8.4 Write the routes**

Inside the file full_server/routes/index.js:

- Link the route / to the AppController
- Link the route /students and /students/:majorto the StudentsController

**8.5 Write the server reusing everything you created**

Inside the file named full_server/server.js, create a small Express server:

- It should use the routes defined in full_server/routes/index.js
- It should use the port 1245

**8.6 Update package.json (if you are running it from outside the folder full_server)**

If you are starting node from outside of the folder full_server, you will have to update the command dev by: nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv

Warning:

- Don’t forget to export your express app at the end of server.js (export default app;)
- The database filename is passed as argument of the server.js BUT, for testing purpose, you should retrieve this filename at the execution (when getAllStudents or getAllStudentsByMajor are called for example)

In terminal 1:

```
bob@dylan:~$ npm run dev
...
```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/students/SWE && echo ""
List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$
bob@dylan:~$ curl localhost:1245/students/French -vvv && echo ""
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
> GET /students/SWES HTTP/1.1
> Host: localhost:1245
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 500 Internal Server Error
< X-Powered-By: Express
< Date: Mon, 06 Jul 2020 03:29:00 GMT
< Connection: keep-alive
< Content-Length: 33
<
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
bob@dylan:~$
```

If you want to add test to validate your integration, you will need to add this file: ``.babelrc`

Click to show/hide file contents

```
{
    "presets": [["env", {"exclude": ["transform-regenerator"]}]]
}
```

```
npx nodemon --exec babel-node --presets babel-preset-env server.js database.csv
```

**Repo:**
-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `full_server/utils.js, full_server/controllers/AppController.js, full_server/controllers/StudentsController.js, full_server/routes/index.js, full_server/server.js`
