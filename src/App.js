import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './Default.scss';
import { auth, handleUserProfile } from './Firebase/Utils'

//layouts
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

import Homepage from './Pages/Homepage/Homepage';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Recovery from './Pages/Recovery/Recovery'


const initialState = {
  currentUser: null
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    ...initialState
  };
}
  

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }

      this.setState({
        ...initialState
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {

    const {currentUser} = this.state;

  return (
    <div className="App"> 
      <Switch>
        <Route exact path='/' render={() => (
          <HomepageLayout currentUser={currentUser}>
            <Homepage/>
          </HomepageLayout>
        )}/>
        <Route path='/registration'
         render={() =>  currentUser ? <Redirect to='/' /> :(
          <MainLayout currentUser={currentUser}>
            <Registration />
          </MainLayout>
        )}/>
        <Route path='/login'
          render={() => currentUser ? <Redirect to='/' /> : (
            <MainLayout currentUser={currentUser}>
              <Login />
            </MainLayout>
          )}/>
        <Route path="/recovery" render={() =>(
            <MainLayout>
              <Recovery />
            </MainLayout>
        )} />
      </Switch>
    </div>
  );    
  }
}

export default App;
