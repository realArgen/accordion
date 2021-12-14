import React from 'react';
import { useState } from 'react';
import questions from './components/data';
import Questions from './components/questions';
import './App.css';

function App() {


  const [question, setQuestion] = useState(questions);

  return (
    <div className="container">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <section className='info'>
        {
          question.map((q) => {
            return (<Questions key={q.id} {...q}> </Questions>)
          })
        }

      </section>
    </div>
  );
}

export default App;
