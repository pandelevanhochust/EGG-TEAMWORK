import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './layout/HomeScreen';
import LoginScreen from './layout/LoginScreen';
import PostScreen from './layout/PostScreen/PostScreen';
import ProfileScreen from './layout/ProfileScreen/ProfileScreen';
import RegisterScreen from './layout/RegisterScreen';
import TopicScreen from './layout/TopicScreen/TopicScreen';
import WritingScreen from './layout/WritingScreen/WritingScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/topic" element={<TopicScreen />} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/thread/:id" element={<PostScreen/>} />
        <Route path="/profile" element={<ProfileScreen/>} />
        <Route path="/writing" element={<WritingScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
