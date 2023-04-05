import React from 'react';
import { ReactDOM } from 'react';
import Main from './Component/Main';
import Navbar from './Component/Navbar';

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
}

// ReactDOM.render(<Newfunction />, document.getElementById('root'));
