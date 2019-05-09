import React from 'react';
import './SearchBar.css';


function SearchBar() {
    return (
        <div className="search-bar">
        <i class="fab fa-instagram"></i>
            <h1>Instagram</h1>
            <input type="text" />
            <i class="fas fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-user"></i>
        </div>
    );
}

export default SearchBar;

