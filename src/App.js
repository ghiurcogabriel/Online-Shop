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
import AdminLayout from './Layouts/AdminLayout';
import DashboardLayout from './Layouts/DashboardLayout';

//pages
import Homepage from './Pages/Homepage/Homepage';
import Search from './Pages/Search/Search';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Recovery from './Pages/Recovery/Recovery';
import Dashboard from './Pages/Dashboard/Dashboard';
import Admin from './Pages/Admin/Admin'


const App = props => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App"> 
    <AdminToolbar />
      <Switch>
        <Route exact path='/' render={() => (
          <HomepageLayout>
            <Homepage/>
          </HomepageLayout>
        )}/>
        <Route exact path="/search" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
        <Route path="/search/:filterType" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
        <Route path='/registration'
         render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )}/>
        <Route path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
        <Route path="/recovery"
          render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />
        <Route path="/dashboard" 
          render={() => (
          <WithAuth>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path="/admin" 
        render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
      </Switch>
    </div>
  );    
}

export default App;
