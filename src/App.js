import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './Default.scss';

//layouts
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

import Homepage from './Pages/Homepage/Homepage';
import Registration from './Pages/Registration/Registration';

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route exact path='/' render={() => (
          <HomepageLayout>
            <Homepage/>
          </HomepageLayout>
        )}/>
        <Route path='/registration' render={() =>(
          <MainLayout>
            <Registration />
          </MainLayout>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
