import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Report';
import Profile from './pages/Profile';
import { IUser } from './interfaces/profile' 

const App: React.FC = () => {

  const [data, updateData] = useState<IUser | any >({})

  useEffect(() => {
    if (!localStorage.getItem('user1')) {
      fetch(process.env.REACT_APP_API_URL + 'users/1')
      .then(response => response.json())
      .then(result => {
          localStorage.setItem('user1', JSON.stringify(result))
          updateData(result)
      })
      .catch(error => console.log('error fetching user data:', error.message)) 
    } else {
      let userData: IUser = JSON.parse(localStorage.getItem('user1')!) 
      updateData(userData)
    }
  }, [])
  return (
    <Fragment>
      <Router>
        <Navbar user={data}/>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/reports' component={Reports} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
