import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('black');
  return (
    <ThemeContext.Provider value={{ color: theme }}>
      <div className='wrapper'>
        Counter
        <Counter initialCount={0} />
      </div>
      <div className='wrapper'>
        CounterHooks
        <CounterHooks initialCount={0} />
      </div>
      <div className='wrapper'>
        <button onClick={() => setTheme(prevTheme => {
          //console.log(prevTheme === 'red' ? 'blue' : 'red');
          return prevTheme === 'black' ? 'blue' : 'black';
        })} type="button" className="btn btn-light">Toggle Theme</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
