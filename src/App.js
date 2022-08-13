import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [contador, cambiarContador] = useState(0);
  const name = useRef("Mario");

  const cuentaRenderizado = useRef();
  console.log(cuentaRenderizado);

  useEffect(() => {
    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      return;
    }
    console.log(`El contador se actualizo y su valor es ${contador}`);
  }, [contador]);

  const changeName = () => {
    name.current = "Cortez";
    console.log(`You new name is : ${name.current}`);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => cambiarContador(contador + 1)}>+1</button>
      <br />
      <h1>Name: {name.current} </h1>
      <button onClick={changeName}>Change name</button>
    </div>
  );
};

export default App;
