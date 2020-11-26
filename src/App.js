import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Default.scss';
import { checkUserSession} from "./Redux/User/User.actions";
import { useDispatch } from "react-redux";

//components
import AdminToolbar from './components/AdminToolbar/AdminToolbar'

//hoc
import WithAuth from './Hoc/WithAuth';
import WithAdminAuth from './Hoc/WithAdminAuth';

//layouts
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

//pages
import Homepage from './Pages/Homepage/Homepage';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Recovery from './Pages/Recovery/Recovery';
import Dashboard from './Pages/Dashboard/Dashboard';
import Admin from './Pages/Admin/Admin'


const App = props => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App"> 
    <AdminToolbar />
      <Switch>
        <Route exact path='/' render={() => (
          <HomepageLayout>
            <Homepage/>
          </HomepageLayout>
        )}/>
        <Route path='/registration'
         render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )}/>
        <Route path='/login'
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}/>
        <Route path="/recovery" render={() =>(
            <MainLayout>
              <Recovery />
            </MainLayout>
        )} />
        <Route path="/dashboard" render={() =>(
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
        )} />
        <Route path="/admin" render={() =>(
          <WithAdminAuth>
            <MainLayout>
              <Admin />
            </MainLayout>
          </WithAdminAuth>
        )} />
      </Switch>
    </div>
  );    
}

export default App;
