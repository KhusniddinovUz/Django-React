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
    <div className='App container mt-4'>
      {state &&
        state.map((item) => (
          <div key={v4()} className='pl-5 pr-5 container card mt-4'>
            <h1 className='mx-auto'>{item.title}</h1>
            <p className='text-center'>{item.body}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
