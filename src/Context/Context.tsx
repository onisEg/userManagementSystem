import { createContext, useState } from "react";

export let Counter = createContext(0);

export default function CounterContextProvider(props: any) {
  let [count, setCount] = useState(0);

  return (
    <Counter.Provider value={{ count, setCount }}>
      {props.children}
    </Counter.Provider>
  );
}
