import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import axios from 'axios';

function App() {
  const list = [
    {
      id: 1,
      title: '1st todo',
      body: 'Learn Django properly.',
    },
    {
      id: 2,
      title: 'Second item',
      body: 'Learn Python.',
    },
    {
      id: 3,
      title: 'Learn HTTP',
      body: "It's important.",
    },
  ];
  const [state, setState] = useState(list);

  const getTodos = () => {
    axios
      .get('http://localhost:8000/api/')
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className='App'>
      {state &&
        state.map((item) => (
          <div key={v4()}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
