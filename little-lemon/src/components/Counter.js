import React, { useState, useEffect } from "react";

export default function Counter(props) {
  const [counter, setCounter] = useState(0);

  const { updateGuest, from } = props;

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    updateGuest(counter, from);
  }, [counter]);

  return (
    <div className="counter">
      <button
        type="button"
        aria-label="select less adults guest"
        disabled={counter === 0}
        onClick={decrement}
      >
        -
      </button>
      <output
        className="txt-lead-b"
        id="adults"
        name="adults"
        aria-live="polite"
      >
        {counter}
      </output>
      <button
        type="button"
        aria-label="selct more adults guests"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
