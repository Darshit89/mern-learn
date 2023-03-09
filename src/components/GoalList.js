import { useState } from "react";

export function GoalList({name}) {
  const [fname, setFname] = useState(name)
  
  return (<div>
    <h1>this is Goal list page name is  {fname}</h1>
    <button onClick={() => setFname("change name by click")}>click</button>
  </div>);
}
