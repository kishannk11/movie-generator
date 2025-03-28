import React, { useState } from 'react';
import './Homepage.css';

function Homepage() {
  const [selectedLanguages, setSelectedLanguages] = useState(['English']);
  const [movieDetails, setMovieDetails] = useState({
    title: '',
    year: '',
    director: '',
    cast: '',
    language: '',
  });
  
  const languages = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu'];
  
  const handleLanguageSelect = (language) => {
    if (selectedLanguages.includes(language)) {
      if (selectedLanguages.length > 1) {
        setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
      }
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };
  
  const generateMovie = () => {
    const randomLanguage = selectedLanguages[Math.floor(Math.random() * selectedLanguages.length)];
    
    setMovieDetails({
      title: 'Sample Movie Title',
      year: '2023',
      director: 'Famous Director',
      cast: 'Actor 1, Actor 2, Actor 3',
      language: randomLanguage,
    });
  };
  
  return (
    <main className="homepage">
      <h1 className="homepage-title">Let's play Dumb Charades. Enjoy with your team</h1>
      
      <div className="language-select-container">
        <div className="language-label">Select Languages:</div>
        <div className="language-buttons">
          {languages.map((language) => (
            <button 
              key={language}
              className={`language-btn ${selectedLanguages.includes(language) ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </button>
          ))}
        </div>
        <button className="generate-movie-btn" onClick={generateMovie}>Generate Movie</button>
      </div>
      
      <div className="movie-display-container">
        <div className="poster-area">
          <div className="poster-box">[Movie Poster]</div>
        </div>
        
        <div className="details-area">
          <div className="detail-row">
            <div className="detail-label">Title:</div>
            <div className="detail-value">{movieDetails.title}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Year:</div>
            <div className="detail-value">{movieDetails.year}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Director:</div>
            <div className="detail-value">{movieDetails.director}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Cast:</div>
            <div className="detail-value">{movieDetails.cast}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Language:</div>
            <div className="detail-value">{movieDetails.language}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;