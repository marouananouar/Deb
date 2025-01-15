// JavaScript to generate snowflakes
const snowContainer = document.querySelector('.snow-container');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  
  // Random size for the snowflake
  const size = Math.random() * 5 + 5; // Snowflakes between 5px to 10px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  
  // Random position
  snowflake.style.left = `${Math.random() * 100}%`;
  
  // Random animation duration for falling speed
  snowflake.style.animationDuration = `${Math.random() * 3 + 3}s`; // Between 3s and 6s
  
  // Random animation delay for staggered effect
  snowflake.style.animationDelay = `${Math.random() * 5}s`; // Staggered start
  
  snowContainer.appendChild(snowflake);
}

// Create snowflakes every 100ms
setInterval(createSnowflake, 100);
