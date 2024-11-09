import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './layout/HomeScreen';
import LoginScreen from './layout/LoginScreen';
import PostScreen from './layout/PostScreen';
import RegisterScreen from './layout/RegisterScreen';
import TopicScreen from './layout/TopicScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/topic" element={<TopicScreen />} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/thread/:id" element={<PostScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
