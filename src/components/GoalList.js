import { useState } from "react";

export function GoalList({name}) {
  const [fname, setFname] = useState(name)
  
  return (<div>
    <h1>this is Goal list page name is  {fname}</h1>
    <button onClick={() => setFname("jay shree  ram")}>click</button>
  </div>);
}
