import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  function setStoredValue(newValue) {
    setValue(prev => {
      const valueToStore =
        typeof newValue === "function" ? newValue(prev) : newValue;

      localStorage.setItem(key, JSON.stringify(valueToStore));
      return valueToStore;
    });
  }

  return [value, setStoredValue];
}

export default useLocalStorage;