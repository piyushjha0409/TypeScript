import React, {FC, createContext} from 'react';
import { Person, HairColor } from './components/Person';
import './App.css';

const  AppContext =  createContext<AppContextInterface | null>(null)

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const App: FC = () => {

  const name: string = "Piyush"
  const age: number = 30
  const email: string = "peeyush0409@gmail.com"
  const isMale: boolean = true

  const ContextValue: AppContextInterface = {
    name: "Piyush",
    age: 20,
    country: "India"
  }
  // //function 
  // const getName = (name: string): number => {
  //   if(name == "Piyush"){
  //     return 39
  //   }else{
  //     return 90
  //   }
  // }
  return (
    <AppContext.Provider value={ContextValue}>
    <div className="App">
       <Person name={name} email={email} hairColor={HairColor.Brown}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
