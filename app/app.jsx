var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory}= require('react-router');
var Main = require('Main');


//Foundation css
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

var name = 'Mohit Arun'
var message = 'This messsage is from Prop'

ReactDOM.render(

  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      
    </Route>
  </Router>

  , document.getElementById('app'));
