<h1 align="center">
    <a href="https://www.npmjs.com/package/dummy-code">
        <img src="./LOGO.png" alt="Dummy Code" width="150" />
    </a>
    <br>
    Dummy Code
    <br>
</h1>

<h4 align="center">A collection of useful TypeScript functions</h4>

<p align="center">
  <img src="https://img.shields.io/bundlephobia/min/dummy-code?label=Package" alt="npm package size">
  <img src="https://img.shields.io/npm/dm/dummy-code?label=Downloads" alt="npm package downloads">
  <img src="https://img.shields.io/npm/v/dummy-code" alt="npm package version">
</p>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#dummy-functions">Functions</a> •
  <a href="#contributing">Contributing</a>
</p>

## How To Use

Install the latest version of the package using yarn:

```bash
yarn add dummy-code@latest
```

or, if you prefer npm:

```bash
npm install --save dummy-code@latest
```

Now, you can import the functions you need:

```typescript
import { AddTwoNumbers } from 'dummy-code';
```

Example:

```typescript
import { AddTwoNumbers } from 'dummy-code';

let a = 5;
let b = 10;

let sum = AddTwoNumbers(a, b);

console.log(`The sum of '${a}' and '${b}' is '${sum}'`);
```

## Dummy Functions

You can find the list of all the functions in the [FUNCTION.md](FUNCTION.md) file.

## Contributing

If you want to contribute to this project, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file.
