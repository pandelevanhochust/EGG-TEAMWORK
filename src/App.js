import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import HomeScreen from "./layout/HomeScreen";
import Header from "./layout/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import RegisterScreen from './layout/RegisterScreen';
import LoginScreen from './layout/LoginScreen';
import ProfileScreen from './layout/ProfileScreen';
import WritingScreen from './layout/WritingScreen';
import PostScreen from './layout/PostScreen';
import TopicScreen from './layout/TopicScreen';

=======
import Header from "./layout/Header";
import HomeScreen from "./layout/HomeScreen";
import LoginScreen from './layout/LoginScreen';
import RegisterScreen from './layout/RegisterScreen';
import TopicScreen from './layout/TopicScreen';
>>>>>>> Phuc

function App() {
  return (
    <Router>
<<<<<<< HEAD
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
=======
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/topic" element={<TopicScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
>>>>>>> Phuc
    </Router>
  );
}

export default App;