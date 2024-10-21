import React, { useState, useEffect } from "react";

export default function Counter(props) {
  const [counter, setCounter] = useState(0);
  const [firstReload, setFirstReload] = useState(true);

  const { setValue, watch, from, savedData } = props;

  const counterWatch = watch?.("guest");

  useEffect(() => {
    if (savedData !== null) {
      if (firstReload) {
        setFirstReload(!firstReload);
        setValue("guest", savedData?.guest);
        setCounter(
          from === "adult" ? savedData.guest?.adult : savedData.guest?.children
        );
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increment = () => {
    setCounter(counter + 1);

    if (from === "adult") {
      setValue(
        "guest",
        { ...counterWatch, adult: counter + 1 },
        { shouldValidate: true }
      );
    } else {
      setValue(
        "guest",
        { ...counterWatch, children: counter + 1 },
        { shouldValidate: true }
      );
    }
  };

  const decrement = () => {
    setCounter(counter - 1);
    if (from === "adult") {
      setValue("guest", { ...counterWatch, adult: counter - 1 });
    } else {
      setValue("guest", { ...counterWatch, children: counter - 1 });
    }
  };

  return (
    <div className="counter">
      <button
        type="button"
        aria-label="select less adults guest"
        disabled={counter === 0}
        onClick={decrement}
        data-testid="decrement-button"
      >
        -
      </button>
      <output
        id="output-result"
        type="number"
        className="txt-lead-b"
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
