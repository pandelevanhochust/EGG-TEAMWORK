import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from "./layout/Header";
import HomeScreen from "./layout/HomeScreen";
import LoginScreen from './layout/LoginScreen';
import RegisterScreen from './layout/RegisterScreen';
import TopicScreen from './layout/TopicScreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/topic" element={<TopicScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </Router>
  );
}

export default App;