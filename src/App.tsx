import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="bg-black min-h-screen text-white">
      <h1>Pronttera Demo</h1>

      <button onClick={() => setCount((count) => count + 1)} className="border">
        Count is {count}
      </button>
    </div>
  );
}

export default App;
