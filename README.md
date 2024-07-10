# hash-key

hash-key is an npm package that can generate a 16-character hexadecimal string, useful for API keys, Passwords, IDs, and many more. The package offers four, main functions: generate() , hexBetween(start, end), dataCipher(data,key) and compareHash(data,hash,key).

## Installation

You can install the package using npm:

``` bash
npm install hash-key
```

# Usage

## Importing the Package

First, import the package into your project:

```js
const hexGen=require('hash-key')
```

## generate()

The generate() function generates a 16-character hexadecimal string by default. You can also pass a parameter to generate a string of a specified length.

**Example** 

Generate 16-character string:

```js
const apiKey=hexGen.generate()
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

Generate String between two hexadecimal values:

```js
const apiKey=hexGen.hexBetween('3', 'f')
console.log(apiKey) //Example output : 564b6ac6684b58d5 
```

## dataCipher(data,key)

The dataCipher(data,key) funtion transform data or massage into hash string. For hashing it use **Secure Hashing Algorithm (SAH-2)**. As parameters it need to pass data and key. Key could be any srting.

**Example**

Let's convert a string into hash:

```js
const hashData=hexGen.dataCipher('hello-world','ahnyritokjc');
console.log(hashData) //Example "b40440103f22529a690e4fd0a295bec16fe29610e31663a4288727e469f06de2"
```
## compareHash(data,hash,key)

The compareHash(data,hash,key) this function used to compare given piece of data with a provided hash value,using a specified key. If hash belongs to the data ,funtion return **true** , otherwise it return **false**

**Example**

Let's compare a string with a hash value:

```js
//string: 'hello-world'
//key: 'ahnyritokjc'
//hash for the string : 'b40440103f22529a690e4fd0a295bec16fe29610e31663a4288727e469f06de2'

const hash='b40440103f22529a690e4fd0a295bec16fe29610e31663a4288727e469f06de2'
const hashMatched=hexGen.compareHash('hello-world',hash,'ahnyritokjc');
console.log(hashMatched) // output: ture
```

## Use of dataCipher() and compareHash()

The **dataCipher** function can be used to transform passwords into hashed values, which can then be securely stored in the database. The **compareHash** function is utilized to compare input data with the stored hash, ensuring that the provided password is valid by verifying the match.


# Contributing

If you'd like to contribute to this project, please open an issue or submit a pull request. Contributions are welcome!

## Future Functionality

N.B. I will add more functionality in later versions

# contact

For more questions and feedback, please reach out to [souravsaha.prgmr@gmail.com].
