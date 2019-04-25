import React from 'react';
import './App.css';
import Header from './Components/header';
import Body from './Components/body';
import Footer from './Components/footer';
import Filter from './Components/filter';
import jobs from './jobs';
//import './Components/footer';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="body">
      <Header/>
      <Filter/>
      <Body jobsdata={jobs}/>
      <Footer/>
    </div>
  );
}

export default App;
