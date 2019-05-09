import React from 'react';
import './SearchBar.css';


function SearchBar() {
    return (
        <div className="search-bar">
        <i className="fab fa-instagram"></i>
            <h1>Instagram</h1>
            <input type="text" />
            <i className="fas fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-user"></i>
        </div>
    );
}

export default SearchBar;

