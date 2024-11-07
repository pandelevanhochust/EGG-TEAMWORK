import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from "./layout/HomeScreen";
import TopicScreen from './layout/TopicScreen';
import LoginScreen from './layout/LoginScreen';
import RegisterScreen from './layout/RegisterScreen';
import Header from "./layout/Header";

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