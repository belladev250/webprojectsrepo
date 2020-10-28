import React from 'react';
import './App.css';
import Contact from './components/contact';
import Blog from './components/blog';
import About from './components/about';
import Home from './components/home';
import Login from './login/login';





import{ BrowserRouter as Router,Route,Switch}  from 'react-router-dom';


function App() {


  

  return (
    
   


      
    <Router>
    <div className="App">
    
    
    <Switch>
    
     <Route path='/' exact component={Home}/>   
     <Route path='/about'  component={About}/>
     <Route path='/blog' component={Blog}/>
     <Route path='/contact' component={Contact}/>

     <Route path='/login' component={Login}/>

     
      
    </Switch>
   
    
    </div>
    </Router>
    
  
    
    
  );
}



export default App;
