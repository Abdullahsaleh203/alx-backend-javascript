0x00. ES6 Basics
================

JavaScriptES6



### Concepts

*For this project, we expect you to look at these concepts:*

- [Modern Javascript](https://alx-intranet.hbtn.io/concepts/541)
- [Software Linter](https://alx-intranet.hbtn.io/concepts/542)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220618%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220618T164529Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2ea50562df14f0719e4e0ee0e3cb071a2778d2965ce5b1623539d459f5b36bf3)

Resources
---------

**Read or watch**:

- [ECMAScript 6 - ECMAScript 2015](https://alx-intranet.hbtn.io/rltoken/NW1dFLFExQ12_hD8yvkV3A "ECMAScript 6 - ECMAScript 2015")
- [Statements and declarations](https://alx-intranet.hbtn.io/rltoken/sroRUsUvOZV28V99MHDenw "Statements and declarations")
- [Arrow functions](https://alx-intranet.hbtn.io/rltoken/N2WLylppCtkkX3YFFtyUHw "Arrow functions")
- [Default parameters](https://alx-intranet.hbtn.io/rltoken/kbw9gMO6sdeOKAY23SYVgA "Default parameters")
- [Rest parameter](https://alx-intranet.hbtn.io/rltoken/erZfCvacuGVk9z1CQlJvYQ "Rest parameter")
- [Javascript ES6 --- Iterables and Iterators](https://alx-intranet.hbtn.io/rltoken/G0Wuy4feyUhLfFqD5OkUYg "Javascript ES6 --- Iterables and Iterators")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/KDGvEqVWIsvOQfCcwDNHNg "explain to anyone"), **without the help of Google**:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

Requirements
------------

### General

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the [Jest Testing Framework](https://alx-intranet.hbtn.io/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q "Jest Testing Framework")
- Your code will be analyzed using the linter [ESLint](https://alx-intranet.hbtn.io/rltoken/Ttd9w5jERwTErJW3DDbVoQ "ESLint") along with specific rules that we'll provide
- All of your functions must be exported

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

```

### Install Jest, Babel, and ESLint

in your project directory:

- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint using: `npm install --save-dev eslint`

Configuration files
-------------------

### `package.json`

Click to show/hide file contents

```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
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

### Finally

Don't forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

Tasks
-----

### 0\. Const or let?

mandatory

 
Modify

- function `taskFirst` to instantiate variables using `const`
- function `taskNext` to instantiate variables using `let`

```
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

```

Execution example:

```
bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
I prefer const when I can. But sometimes let is okay
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `0-constants.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

Solution

```
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

```
The given code demonstrates the usage of const and let keywords to declare variables in JavaScript.
Here's a breakdown of the code:

The code imports the functions taskFirst and taskNext from a module called './0-constants.js'.

The console.log() statement prints the result of calling taskFirst() and taskNext() to the console.
The result will be a combination of the strings returned by these functions.

The taskFirst() function is declared using the export keyword, indicating that it can be imported and used in other modules.
Inside this function, a constant variable named task is declared using the const keyword and assigned the value 'I prefer const when I can.'.
The function then returns the value of task.

The getLast() function is also declared using the export keyword. It simply returns the string ' is okay'.

The taskNext() function is declared using the export keyword as well.
Inside this function, a variable named combination is declared using the let keyword.
Initially, it is assigned the value 'But sometimes let'.
The function then appends the result of calling getLast() to combination using the += operator.
Finally, the function returns the value of combination.

Overall, the code demonstrates the use of const for variables that won't be reassigned and let for variables that can have their values changed.
```

### 1\. Block Scope

mandatory

 
Given what you've read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren't overwritten inside the conditional block.

```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}

```

Execution:

```
bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[ false, true ]
[ false, true ]
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `1-block-scoped.js`

Done? Help Check your code Ask for a new correction Get a sandbox QA Review

SOLUTION

```
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  // eslint-disable-next-line no-empty
  if (trueOrFalse) {
  }

  return [task, task2];
}
```

```
Code Breakdown:->

1. The `taskBlock` function is exported as the default export. It takes a parameter `trueOrFalse`.

2. Inside the function, two variables `task` and `task2` are declared using the `const` keyword.
`task` is initially assigned the value `false`, and `task2` is initially assigned the value `true`.

3. There is an `if` statement that checks the value of the `trueOrFalse` parameter.
If `trueOrFalse` is `true`, the block inside the `if` statement is executed.

4. Within the `if` block, new variables `task` and `task2` are declared using the `const` keyword.
These variables have a scope limited to the `if` block and do not overwrite the outer variables with the same names.

5. The function then returns an array containing the values of the `task` and `task2` variables.

6. The code imports the `taskBlock` function from the `'./1-block-scoped.js'` module.

7. The `console.log()` statements are used to print the result of calling `taskBlock(true)` and `taskBlock(false)` to the console.
These calls will return arrays containing the values of the variables `task` and `task2` based on the input passed to `taskBlock`.

In summary, the modified code introduces new variables with the same names inside the `if` block,
ensuring that the outer variables are not overwritten.
The returned array will contain the values of the variables based on the input passed to the `taskBlock` function.
```

### 2\. Arrow functions

mandatory

 
Rewrite the following standard function to use ES6's arrow syntax of the function `add` (it will be an anonymous function after)

```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

```

Execution:

```
bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `2-arrow.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**SOLUTION**

```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

```
Explanation:

The code provided defines a constructor function `getNeighborhoodsList` and adds a method `addNeighborhood` to its prototype.
The function has been rewritten using ES6 arrow function syntax. Here's a breakdown of the changes:

1. The `this.addNeighborhood` method is converted to an arrow function by replacing the `function` keyword with `=>`.
This allows the function to inherit the `this` context lexically from its surrounding scope.

2. Within the arrow function, `this.sanFranciscoNeighborhoods` , is accessed directly without the need for creating a separate reference to `this`.

3. The `this.addNeighborhood` method now directly pushes the new neighborhood to `this.sanFranciscoNeighborhoods` and returns the updated array.

The code imports the `getNeighborhoodsList` function from the `'./2-arrow.js'` module and creates a new instance of `getNeighborhoodsList` using the `new` keyword. It then calls the `addNeighborhood` method on the `neighborhoodsList` instance with the argument `'Noe Valley'`.
The resulting array is logged to the console using `console.log`.
```

### 3\. Parameter defaults

mandatory

 
Condense the internals of the following function to 1 line - without changing the name of each function/variable.

*Hint:* The key here to define default parameter values for the function parameters.

```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}

```

Execution:

```
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
142
56
41
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `3-default-parameter.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**SOLUTION**

```
export default function getSumOfHoods(
  initialNumber,
  expansion1989 = 89,
  expansion2019 = 19,
) {
  return initialNumber + expansion1989 + expansion2019;
}
```

**CODE EXPLANATION**

```
The code exports a function named getSumOfHoods as the default export.
This function takes three parameters: initialNumber, expansion1989, and expansion2019.

Using ES6's default parameter values, the function parameters expansion1989 and expansion2019 are assigned default values of 89 and 19, respectively.
This means that if the corresponding arguments are not provided when calling the function,
the default values will be used instead.

The function returns the sum of initialNumber, expansion1989, and expansion2019.

By utilizing default parameter values,
the code simplifies the logic of checking if the arguments are undefined and providing default values within the function body.
```

### 4\. Rest parameter syntax for functions

mandatory

Score: 0.00% (Checks completed: 0.00%)

Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```
export default function returnHowManyArguments() {

}

```

Example:

```
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>

```

Execution:

```
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
1
4
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `4-rest-parameter.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**SOLUTION**

```
export default function returnHowManyArguments(...args) {
  return args.length;
}
```

**CODE EXPLANATION**

```
The code exports a function named returnHowManyArguments as the default export.
The function uses the rest parameter syntax ...args to gather all the arguments passed to it into an array called args.

The function then returns the length of the args array, which represents the number of arguments passed to the function.

By using the rest parameter, the function can accept any number of arguments,
and the code simplifies the logic of counting the number of arguments by directly returning the length of the args array.
```

### 5\. The wonders of spread syntax

mandatory

 
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

```
export default function concatArrays(array1, array2, string) {
}

```

Execution:

```
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `5-spread-operator.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**SOLUTION**

```
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
```

**CODE EXPLANATION**

```
The code exports a function named concatArrays as the default export.
The function takes three parameters: array1, array2, and string.

Inside the function, the spread syntax ... is used to spread the elements of array1, array2, and string.
The spread syntax allows us to expand arrays or strings into individual elements.

By using the spread syntax, the function concatenates array1, array2, and each character of string into a single array.
The resulting array contains all the elements from array1, array2, and the individual characters of string.

The function then returns the concatenated array as the result.

Using the spread syntax simplifies the concatenation process by spreading the elements of the arrays and string directly into a new array.
```

### 6\. Take advantage of template literals

mandatory

 
Rewrite the return statement to use a template literal so you can the substitute the variables you've defined.

```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}

```

Execution:

```
bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `6-string-interpolation.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**SOLUTION**

```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };
  return `As of ${year}, it was the seventh-highest income county in the United States`
    + `, with a per capita personal income of ${budget.income}. As of 2015, San Francisco`
    + ` proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
```

**CODE EXPLANATION**

```
The code imports the getSanFranciscoDescription function from the './6-string-interpolation.js' module.

The console.log() statement is used to print the result of calling the getSanFranciscoDescription() function to the console.

By importing and calling the function, the code executes the function and logs the resulting description of San Francisco to the console.
```

### 7\. Object property value shorthand syntax

mandatory

Score: 0.00% (Checks completed: 0.00%)

Notice how the keys and the variable names are the same?

Modify the following function's `budget` object to simply use the keyname instead.

```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}

```

Execution:

```
bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `7-getBudgetObject.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**SOLUTION**

```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  return budget;
}
```

**CODE EXPLANATION**

```
The function directly returns an object with properties named after the variables income, gdp, and capita, using the shorthand syntax.
```

### 8\. No need to create empty objects before adding in properties

mandatory

 
Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object

```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}

```

Execution:

```
bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `8-getBudgetCurrentYear.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**SOLUTION**

```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
```

**CODE EXPLANATION**

```
To rewrite the getBudgetForCurrentYear function using ES6 computed property names on the budget object, you can directly use the computed property syntax to assign the property names based on the current year.

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}

In this version, the budget object is created using the shorthand syntax and computed property names. The property names are generated by combining the variable names (income, gdp, capita) with the current year obtained from the getCurrentYear function.
```

### 9\. ES6 method properties

mandatory

 
Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

```
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

```

Execution:

```
bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
$20
20 euros
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `9-getFullBudget.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**SOLUTION**

```
import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
  return fullBudget;
}
```

**CODE IMPLEMENTATION**

```
To rewrite the getFullBudgetObject function to use ES6 method properties in the fullBudget object, you can use the shorthand method syntax.

----------------------------------------------------------------
import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
  return fullBudget;
}
-----------------------------------------------------------------
In this version, the getIncomeInDollars and getIncomeInEuros methods are defined using the shorthand method syntax directly within the fullBudget object. The methods don't require the function keyword, and the parameter income is available within the method without needing to pass it explicitly.
```

### 10\. For...of Loops

mandatory

 
Rewrite the function `appendToEachArrayValue` to use ES6's `for...of` operator. And don't forget that `var` is not ES6-friendly.

```
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}

```

Execution:

```
bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `10-loops.js`

Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**SOLUTION**

```
export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const value of array) {
    res.push(appendString + array[array.indexOf(value)]);
  }

  return res;
}
```

**CODE EXPLANATION**

```
To rewrite the appendToEachArrayValue function using ES6's for...of loop and avoiding the use of var, you can replace the for...in loop with a for...of loop.

-------------------------------------------------------------------
export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const value of array) {
    res.push(appendString + value);
  }

  return res;
}

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
-------------------------------------------------------------------

In this version, the for...in loop is replaced with a for...of loop to iterate over the values of the array directly. The value variable represents the current element of the array in each iteration. The appendString is concatenated with value and pushed to the res array.
```

### 11\. Iterator

mandatory

 
Write a function named `createEmployeesObject` that will receive two arguments:

- `departmentName` (String)
- `employees` (Array of Strings)

```
export default function createEmployeesObject(departmentName, employees) {

}

```

The function should return an object with the following format:

```
{
     $departmentName: [
          $employees,
     ],
}

```

Execution:

```
bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `11-createEmployeesObject.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**CODE IMPLEMENTATION**

```
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
```

**CODE EXPLANATION**

```
The given code defines a function called createEmployeesObject that takes in two parameters: departmentName and employees.
It creates an object with the departmentName as the key and the employees array as the value.
The departmentName parameter is used as a computed property name within square brackets to set the key dynamically.

The function returns the created object.

The code then calls the createEmployeesObject function with the arguments "Software" as the department name and ["Bob", "Sylvie"] as the employees array.
The resulting object is then logged to the console using console.log().

-------------------------------------------------------------
The expected output of this code would be:
----------------------------------------
{ Software: [ 'Bob', 'Sylvie' ] }
----------------------------------------
-------------------------------------------------------------

This code creates an object that represents a department with its associated employees.
The department name is used as the key, and the employees are stored as an array value.

```

### 12\. Let's create a report object

mandatory

 
Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.

```
export default function createReportObject(employeesList) {

}

```

`createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

`allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you're having trouble, use the spread syntax.

The method property receives `employeesList` and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};

```

Execution:

```
bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `12-createReportObject.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**CODE IMPLEMENTATION**

```
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
```

**CODE EXPLANATION**

```
The first function is createReportObject, which takes in an employeesList object as a parameter.
It returns an object with two properties.
The first property, allEmployees, is created by using the spread operator (...) to copy all the key-value pairs from the employeesList object into a new object.
The second property, getNumberOfDepartments, is a method that takes in the employeesList object as a parameter and returns the number of departments by using Object.keys(employeesList).length to get the number of keys (departments) in the object.

The second function is createEmployeesObject, takes a departmentName and an employees array as parameters and returns an object with the departmentName as the key and the employees array as the value.

The code then creates an employees object by combining the results of calling createEmployeesObject with different department names and employee arrays using the spread operator (...).

Next, the createReportObject function is called with the employees object as an argument, and the resulting object is assigned to the report variable.

Finally, the code logs the allEmployees property of the report object to the console and also logs the result of calling the getNumberOfDepartments method on the report object.

----------------------------------------------------------
The expected output of this code would be:

-------------------------------------------------------
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
-------------------------------------------------------

The first console.log(report.allEmployees) displays the allEmployees property, which contains the merged employees from different departments.

The second console.log(report.getNumberOfDepartments(report.allEmployees)) displays the number of departments, which is 2 in this case.

```

## advanced

### 13\. Iterating through report objects

 
Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

This function will return an iterator to go through every employee in every department.

```
export default function createIteratorObject(report) {

}

```

Execution:

```
bob@dylan:~$ cat 100-main.js
import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js
Bob
Jane
Sylvie
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `100-createIteratorObject.js`

 Done? Help Check your code Ask for a new correction Get a sandbox QA Review

**CODE IMPLEMENTATION**

```
export default function createIteratorObject(report) {
  const all = Object.values(report.allEmployees).reduce((a, b) => {
    a.push(...b);
    return a;
  }, []);
  let currIndex = 0;
  const maxIndex = all.length;
  return {
    next() {
      if (currIndex < maxIndex) {
        const result = { value: all[currIndex], done: false };
        currIndex += 1;
        return result;
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]: () => this.next(),
  };
}
```

**CODE EXPLANATION**

```
createEmployeesObject: This function is the same as the one mentioned in the previous questions.
It takes a departmentName and an employees array as parameters and returns an object with the departmentName as the key and the employees array as the value.

createReportObject: This function takes an employeesList object as a parameter and returns an object with two properties.
The first property, allEmployees, is created by using the spread operator (...) to copy all the key-value pairs from the employeesList object into a new object.
 The second property, getNumberOfDepartments, is a method that takes in the employeesList object as a parameter and returns the number of departments by using Object.keys(employeesList).length to get the number of keys (departments) in the object.

createIteratorObject: This function takes a report object as a parameter.
It extracts all the employee arrays from the report.allEmployees object using Object.values(report.allEmployees).
It then flattens these arrays into a single array using the reduce method and the spread operator (...).
The resulting array is stored in the all variable.

The function also initializes two variables: currIndex (current index) set to 0 and maxIndex set to the length of the all array.

The function returns an object with a next method, which is used to iterate over the employees in the all array.
If the current index (currIndex) is less than the maximum index (maxIndex), the method returns an object with the value property set to the current employee and the done property set to false. The currIndex is then incremented.
If the current index is equal to or exceeds the maximum index, the method returns an object with the value property set to null and the done property set to true, indicating that the iteration is complete.

The [Symbol.iterator] property is set to a function that returns this.next(), enabling the iterator to be used in a for...of loop or with other iterable functions.

```

### 14\. Iterate through object

 
Finally, write a function named `iterateThroughObject`. The function's parameter `reportWithIterator` is the return value from `createIteratorObject`.

```
 export default function iterateThroughObject(reportWithIterator) {

 }

```

It should return every employee name in a string, separated by `|`

```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};

```

Should return `John Doe | Guillaume Salva`

Reminder - the functions will be *imported* by the test suite.

Full example:

```
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
>

```

Execution:

```
bob@dylan:~$ cat 101-main.js
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js
Bob | Jane | Sylvie
bob@dylan:~$

```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`
- File: `101-iterateThroughObject.js`

**CODE IMPLEMENTATION**

```
export default function iterateThroughObject(reportWithIterator) {
  let n = reportWithIterator.next();
  let res = '';

  while (!n.done) {
    res += `${n.value} | `;
    n = reportWithIterator.next();
  }
  return res.slice(0, res.length - 3);
}
```

**CODE EXPLANATION**

```

createEmployeesObject: This function is the same as the one mentioned in the previous questions.
It takes a departmentName and an employees array as parameters and returns an object with the departmentName as the key and the employees array as the value.

createReportObject: This function is also the same as the previous version. It takes an employeesList object as a parameter and returns an object with two properties.
The first property, allEmployees, is created by using the spread operator (...) to copy all the key-value pairs from the employeesList object into a new object.
The second property, getNumberOfDepartments, is a method that takes in the employeesList object as a parameter and returns the number of departments by using Object.keys(employeesList).length to get the number of keys (departments) in the object.

createIteratorObject: This function is the same as before. It takes a report object as a parameter and creates an iterator object.
It extracts all the employee arrays from the report.allEmployees object using Object.values(report.allEmployees).
It then flattens these arrays into a single array using the reduce method and the spread operator (...). The resulting array is stored in the all variable.

The function initializes two variables: currIndex (current index) set to 0 and maxIndex set to the length of the all array.

The function returns an object with a next method, which is used to iterate over the employees in the all array.
If the current index (currIndex) is less than the maximum index (maxIndex), the method returns an object with the value property set to the current employee and the done property set to false.
The currIndex is then incremented. If the current index is equal to or exceeds the maximum index, the method returns an object with the value property set to null and the done property set to true, indicating that the iteration is complete.

The [Symbol.iterator] property is set to a function that returns this.next(), enabling the iterator to be used in a for...of loop or with other iterable functions.

iterateThroughObject: This function takes a reportWithIterator object as a parameter, which is expected to be the result of calling createIteratorObject on a report object.
It iterates through the reportWithIterator object using a while loop. It appends each value to the res string, separated by a pipe (|) and a space.
The loop continues until the iterator is done, indicated by the done property being true. The function then slices the last three characters from the res string to remove the trailing pipe and space characters.

```
