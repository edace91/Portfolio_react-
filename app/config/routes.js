import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import Welcome from '../pages/Welcome'
import About from '../pages/About'
import Gallery from '../pages/Gallery'
import Intro from '../pages/Intro'
import GraphicDesign from '../pages/subject/GraphicDesign'
import Interactive from '../pages/subject/Interactive'
import Photography from '../pages/subject/Photography'
import Video from '../pages/subject/GraphicDesign'
import WebDesign from '../pages/subject/WebDesign'





module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>	
      <IndexRoute component={Welcome}/>
      <Route path="About" component={About}/>
      <Route path="Gallery" component={Gallery}>
      	<IndexRoute component={Intro}/>
      	<Route path="GraphicDesign" component={GraphicDesign}/>
      	<Route path="Interactive" component={Interactive}/>
      	<Route path="Photography" component={Photography}/>
      	<Route path="Video" component={Video}/>
      	<Route path="WebDesign" component={WebDesign}/>
      </Route>
    </Route>
  </Router>
);
