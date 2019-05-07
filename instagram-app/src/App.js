import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map(post => {
        return <PostContainer key={post.id} post={post} />
      })}
    </div>
  );
}

componentDidMount() {

}

export default App;
