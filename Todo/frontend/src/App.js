import { useState } from 'react';
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

  return (
    <div className='App'>
      {state &&
        state.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
