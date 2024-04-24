<p align="center">
    <img width="180" src="./src/ArrSolutionLogo.png" alt="logo">
    <p align="center" style="text-align:center;color:#52b4cc;font-size:45px">React Array</p>
</p>
<br/>
<p align="center">
  <a href="https://www.npmjs.com/package/react-array"><img src="https://img.shields.io/npm/v/react-array" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/react-array" alt="node compatibility"></a>
    <a href="https://www.npmjs.com/package/react-array"><img src="https://img.shields.io/npm/dt/react-array?label=Total%20Downloads" alt="Total Downloads"></a>
<!--     <a href="https://www.npmjs.com/package/react-array"><img src="https://img.shields.io/npm/dm/react-array" alt="npm downloads"></a> -->
<!-- <img src="https://img.shields.io/npm/dw/react-array"/> -->

</p>
<br/>

# React Array 🚀

Tired of writing your React lists in multiple lines with clunky syntax? 😤 Introducing React Array! 🚀 Say goodbye to tedious list formatting and hello to streamlined efficiency. With React Array, coding lists is as simple as a single line of code! 😎 .

> Features :

- 💡 Write your lists in one single line
- 💪 Helps you make your code cleaner and more readable

## Getting Started

```bash
npm i react-array
```

## Basic Usage

```
import "./mycontainer.css";
import { ReactArr } from "react-array";

// Define a separate functional component
  // if you are using normal array
const HelloComponent = ({ e }) => (
  <div>
    <p>{e}</p>
  </div>
);
  // If you are using an array with objects, the keys in your component must match the keys in your array.
const TestComponent = ({ type,value }) => (
  <div>
    <p>{type}</p>
    <p>{value}</p>
  </div>
);

export default function MyContainer() {

  // if you are using normal array
  cont arr = ["one", "two", "three"];

  // If you are using an array with objects, the keys in your component must match the keys in your array.
  cont arr = [{type:"normal text",value:"one},
              {type:"anything",value:"two"},
              {type:"just number",value:"three"}];

  return (
    <>
      <main>
        <h1>Title</h1>
        <ul role="list">
          <ReactArr arr={arr} Component={TestComponent} />
        </ul>
      </main>
    </>
  );
}


```

## Props

| Props     | Default  | Description                                                           |
| --------- | -------- | --------------------------------------------------------------------- |
| arr       |          | array                                                                 |
| Component |          | A component that will be used to render each item in the passed array |
| listRole  | listitem | li role value                                                         |

## License

[MIT](LICENSE).
