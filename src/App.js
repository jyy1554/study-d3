import React, { useState } from 'react';
import ResponsiveChart from './components/ResponsiveChart';
import './App.css';


function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);

  return (
    <React.Fragment>
      <ResponsiveChart data={data} />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value <= 35))}>
        Filter data
      </button>
      <button onClick={() => setData([...data, Math.round(Math.random() * 100)])}>
        Add data
      </button>
  </React.Fragment>
  );
}

export default App;
