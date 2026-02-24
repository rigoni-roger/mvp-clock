import "./App.css";
import { useState } from "react";
import {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  square,
  cube,
  squareRoot,
  cubeRoot,
  absolute,
} from "./utils";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <button onClick={() => setCount(add(count, 2))}>Add 2</button>
      <button onClick={() => setCount(subtract(count, 2))}>Subtract 2</button>
      <button onClick={() => setCount(multiply(count, 2))}>Multiply 2</button>
      <button onClick={() => setCount(divide(count, 2))}>Divide 2</button>
      <button onClick={() => setCount(modulo(count, 2))}>Modulo 2</button>
      <button onClick={() => setCount(power(count, 2))}>Power 2</button>
      <button onClick={() => setCount(square(count))}>Square</button>
      <button onClick={() => setCount(cube(count))}>Cube</button>
      <button onClick={() => setCount(squareRoot(count))}>Square Root</button>
      <button onClick={() => setCount(cubeRoot(count))}>Cube Root</button>
      <button onClick={() => setCount(absolute(count))}>Absolute</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
