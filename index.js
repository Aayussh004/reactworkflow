import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import reportWebVitals from './reportWebVitals';
// import Tempheader from './Tempheader';
// import Maincontent from './Maincontent';
// import Footer from './Footer';

// function Tempfunction() {
//   return (
//     <div>
//       <Tempheader />
//       <Maincontent />
//       <Footer></Footer>
//     </div>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Tempfunction />);
// ReactDOM.render(<h1>Hello React</h1>, document.getElementById('root'));

///this is the method to render as our ReactDom.render is not functioning here

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// // const root = createRoot(rootElement!);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
