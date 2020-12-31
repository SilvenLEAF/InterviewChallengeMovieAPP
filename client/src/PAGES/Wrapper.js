import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import Details from '../components/details/Details';




import Home from '../components/home/Home'
import SearchResults from '../components/search/SearchResults';



function Wrapper() {
  
  return (
    <div id="myWrapper">
      

      <Switch >


        <Route exact path="/" component={Home} />
        <Route path="/results" component={SearchResults} />
        <Route path="/details" component={Details} />
        
       




      </Switch>
      
  </div>
  )
}

export default Wrapper
