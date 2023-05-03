import React, {FC} from 'react';
import { Person } from './components/Person';
import './App.css';

const App: FC = () => {

  const name: string = "Piyush"
  const age: number = 30
  const email: string = "peeyush0409@gmail.com"
  const isMale: boolean = true

  // //function 
  // const getName = (name: string): number => {
  //   if(name == "Piyush"){
  //     return 39
  //   }else{
  //     return 90
  //   }
  // }
  return (
    <div className="App">
       <Person name={name} email={email} />
    </div>
  );
}

export default App;
