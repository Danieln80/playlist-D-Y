import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import {loginUser} from './context/Context';




function App() {
  const [user , setUser] = useState({})
  return (
    <loginUser.Provider value={{user , setUser}}>
    <div className="App">
      <Header/>
    </div>
    </loginUser.Provider>
  );
}


export default App;
