import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './views/HomePage/index';
import ViemsVideos from './views/ViewsVideos/index';
import NotFound from './views/NotFound/index';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={ViemsVideos} />
          <Route component={NotFound} />
        </Switch>
     </BrowserRouter>
  )
}

export default App;
