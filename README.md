# hash-key

Hash-key is an npm package that can generate 16-character hexadecimal strings, useful for API keys, passwords, IDs, and more. The package offers two main functions: `generate()` and `hexBetween(start, end)`.

## Installation

You can install the package using npm:

```bash
npm install hash-key

```

# Usage

## Importing the Package

First, import the package into your project:

```js
const hexGen=require('hash-key')
```

## generate()

The 'generate()' function generates a 16-character hexadecimal string by default. You can also pass a parameter to generate a string of a specified length.

**Example**

Generate a 16-character string:
```js
const apiKey=hexGen.generate();
console.log(apiKey); // Example output : '00a232d376d3e38a'
```
Generate a string of a specified length (e.g., 32 characters):
```js
const apiKey=hexGen.generate(32);
console.log(apiKey); // Example output : '8e3d13e76454658eeef8cea1fa4cc7e5'
```

## hexBetween(start, end)

The hexBetween(start, end) function generates a 16-character hexadecimal string between the given hexadecimal inputs.

**Example**

Generate a string between two given hexadecimal values:
```js
const apiKey=hexGen.hexBetween('3','f');
console.log(apiKey); // Example output : '564b6ac6684b58d5'
```

# Contributing

If you'd like to contribute to this project, please open an issue or submit a pull request. Contributions are welcome!

## Future Functionality

N.B. I will add more functionality in later versions.

# Contact

For any questions or feedback, please reach out to [souravsaha.prgmr@gmail.com].
