import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super () 
    this.state = {data: []}
  }


  componentDidMount() {
    this.setState({data: dummyData}) 
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => {
          return <PostContainer key={post.id} post={post} />
        })}
        { /* ^ send the dummyData to Post Container, which renders the images */ }
      </div>
    );
  }

}







export default App;
