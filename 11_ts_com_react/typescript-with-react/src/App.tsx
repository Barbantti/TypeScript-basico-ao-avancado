import { createContext } from "react";
import "./App.css";
import Destructuring, { Category } from "./Components/Destructuring";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import State from "./Components/State";
import Context from "./Components/Context";

// Type
type textOrNull = string | null;

//type fixed = "Hello" | "Hi" | "How are you";

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // Variables
  const name: string = "Heitor";
  const age: number = 5;
  const isWorking: boolean = true;

  // Functions
  const userGreeting = (name: string): string => {
    return `Hello ${name}`;
  };

  //  Type
  const myText: textOrNull = "Have something here!";
  let mySecondText: textOrNull = null;

  mySecondText = "Hi!";

  // const textingFixed:fixed = "Hi"

  // Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <h1>Iniciando TypeScript com React</h1>
        <h2>Name: {name}</h2>
        <h2>Age: {age} months</h2>
        {isWorking && (
          <div>
            <p>It's working now!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name='Second' />
        <Destructuring
          title='TypeScript'
          content='TypeScript...'
          commentsQty={10}
          tags={["ts", "js", "react"]}
          category={Category.TS}
        />

        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name='JavaScript' />
        <Destructuring
          title='First Post'
          content='JavaScript...'
          commentsQty={10}
          tags={["ts", "js", "react"]}
          category={Category.JS}
        />
        <State />
        {myText && <p>Have text on variable</p>}
        {mySecondText && <p>Have text on second variable!</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
