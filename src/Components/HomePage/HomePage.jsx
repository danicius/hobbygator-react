import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const hobbies = [
    {
      id: 1,
      title: 'Gardening',
      description: 'Discuss everything related to gardening.',
      image: 'https://example.com/gardening.jpg',
    },
    {
      id: 2,
      title: 'Photography',
      description: 'Share your photography tips and showcase your work.',
      image: 'https://example.com/photography.jpg',
    },
    // Add more hobbies here
  ];

  return (
    <div className="home-page">
      <h1>Welcome to HobbyGator!</h1>
      <p>Explore and share your hobbies with others.</p>
      <div className="hobbies-container">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-card">
            <img src={hobby.image} alt={hobby.title} className="hobby-image" />
            <h2 className="hobby-title">{hobby.title}</h2>
            <p className="hobby-description">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
