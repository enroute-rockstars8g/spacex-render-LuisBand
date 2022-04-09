import React, {FC, useEffect} from 'react';
import { getRockets } from './services/spacex-rockets/service';
import './App.css';
import { RocketsRender } from './components/rockets-render/component';
import { Header } from './components/header/component';
import { Footer } from './components/footer/component';

export const App: FC = () =>{

  return (
    <div className="h-full">
      <Header/>
      <RocketsRender/>
      <Footer/>
    </div>
  );
}

export default App;
