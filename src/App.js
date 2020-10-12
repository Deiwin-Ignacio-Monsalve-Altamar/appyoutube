import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

/**Import pages a display */
import Home from './views/HomePage/index';
import ViemsVideos from './views/ViewsVideos/index';
import NotFound from './views/NotFound/index';


function App() {
  return (
    <BrowserRouter>
    {/* Using Spa for component redirection*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={ViemsVideos} />
          <Route component={NotFound} />
        </Switch>
     </BrowserRouter>
  )
}

export default App;
