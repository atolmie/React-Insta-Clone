import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">
      {dummyData.map(post => {
        return <PostContainer post={post}/>
      })}
    </div>
  );
}

export default App;
