import React from 'react';

//components
// import Header from "./Header.js";
import Footer from "./Footer.js";
import ToDoList from "./ToDoList.js";
 
import './App.css';
 
function App() {
 return (
   <div className="App">
    {/* <Header/> */}
    <ToDoList/>
    <Footer/>
   </div>
 );
}
 
export default App;