import "./App.css";
import Header from "./Header";
import Work from "./Work";
import { useCallback, useState } from "react";
const DarkTheme=[{
  backgroundColor :"white",
  color:"blue",
  fontFamily: "Oswald, sans-serif",

},{
  backgroundColor :" #121212",
  color:"blue",
  fontFamily: "Oswald, sans-serif",
}]
function App() {
  const [theme,setTheme]=useState(false);
  const Toggle= useCallback((e)=>{
    setTheme(!theme)
  })
  return (
    <div className="App" style={DarkTheme[+theme]}>
      <div className="Theme_control">
        <Header Toggle={Toggle} theme={theme}/>
        <Work />
      </div>
    </div>
  );
}

export default App;
