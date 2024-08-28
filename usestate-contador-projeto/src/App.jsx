import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {

  }, [count]);

  function add () {
    setCount(count + 1);
  };

  function remove () {
    setCount(count - 1);

    if (count <= 0) {

      document.getElementById("end").innerHTML = "Tempo Esgotado!";

      document.getElementById("tempo").remove();
    };
  };

  return (
    <div className='container'>
      <h2 id='end'></h2>

      <h1 id='tempo'>{count}</h1>

      <button onClick={add}>Adicionar</button>

      <button onClick={remove}>Remover</button>
    </div>
  )
}

export default App
