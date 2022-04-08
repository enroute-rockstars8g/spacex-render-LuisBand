import React, {FC, useEffect} from 'react';
import { getRockets } from './services/spacex-rockets/service';
import './App.css';
import { RocketsRender } from './components/rockets-render/component';

export const App: FC = () =>{

  useEffect(() => {
    getRockets();
  },[])

  return (
    <div className="App">
      <h1>SPACEX</h1>
      <RocketsRender/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
