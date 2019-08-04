import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/homepage/HomePage';
import Course from './components/coursepage/CoursePage';
import Lesson from './components/lessonpage/LessonPage';
import Login from './components/userpage/Login';
import Signup from './components/userpage/Signup';
// import Notfound from './components/Notfound';
import { connect } from 'react-redux';

class Routes extends Component {
  state = {}
  render() {
    return (
      <div>
        {localStorage.getItem('jwtToken') ? (
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/course' component={Course} />
            <Route exact path='/lesson' component={Lesson} />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={Home} />
          </Switch>
        ) : (
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route component={Login} />
            </Switch>
          )}

      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.user,
});

export default connect(
  mapStateToProps,
  null,
)(Routes);