import React from 'react';
import './App.css';
import HomeScreen from "./layout/HomeScreen";
import Header from "./layout/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import RegisterScreen from './layout/RegisterScreen';
import LoginScreen from './layout/LoginScreen';
import ProfileScreen from './layout/ProfileScreen';
import WritingScreen from './layout/WritingScreen';
import PostScreen from './layout/PostScreen';
import TopicScreen from './layout/TopicScreen';


function App() {
  return (
    <Router>
      <Header/>
      <>
      <Route path="/topic" component={TopicScreen}/>
      <Route path="/post" component={PostScreen}/>
      <Route path="/writing" component={WritingScreen}/>
      <Route path="/profile" component={ProfileScreen}/>
      <Route path="/login" component={LoginScreen}/>
      <Route path="/register" component={RegisterScreen}/>
      
      <Route path="/" component ={HomeScreen}/>
      </>
    </Router>
  );
}

export default App;
