import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <input type="number" name="countValue" value={count} onChange={(event) => setCount(event.target.value)}/>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(parseInt(count) + 1)}>
        +1
      </button>
      <button onClick={() => setCount(parseInt(count) - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;