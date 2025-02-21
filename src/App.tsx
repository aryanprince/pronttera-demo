import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Pronttera Demo</h1>

      <button onClick={() => setCount((count) => count + 1)} className="border">
        Count is {count}
      </button>
    </div>
  );
}

export default App;
