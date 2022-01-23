//import { useState } from 'react'
//import Counter from './Counter'
import './App.css';
// import Nav from './Nav';
// import About from './about';
// import Shop from './shop';
// import Home from './home';
import React from 'react';
//import Counter from './Counter';
//import { useState } from 'react';
//import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todolist from './Component/Todoapp/Todolist';
//import { BrowserRouter ,Switch, Route} from 'react-router-dom';


function App() {
  //const [state, setState] = useState(false);
  return (

    <div className='App'>

      <Todolist />


    </div>
  );
}

// <h1 onClick={() => setState(!state)}>Show/Hide</h1>
// {state ? <Counter/> : null}
// <Nav />

// {/* <Routes>
//           {/* <Route path="/" component={Home} />
//           <Route path="/about" component={about} />
//           <Route path="/shop" component={shop} /> */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/shop" element={<Shop />} />
//         </Routes> */}
export default App;