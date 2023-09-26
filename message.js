// Define an array of inspirational phrases
const inspirationalPhrases = [
    "Believe in yourself.",
    "Embrace the challenges.",
    "Keep pushing forward.",
    "Stay positive and focused.",
    "Dream big and work hard.",
    "Success is a journey, not a destination.",
    "You are capable of great things.",
    "Never give up on your dreams.",
    "Today is a new opportunity.",
  ];
  
  // Function to generate a random index from an array
  function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  
  // Function to generate a random inspirational message
  function generateInspirationalMessage() {
    const randomPhrase = inspirationalPhrases[getRandomIndex(inspirationalPhrases)];
  
    const message = `
  Inspirational Message:
  -----------------------
  ${randomPhrase}
  -----------------------
  `;
  
    return message;
  }
  
  // Call the generateInspirationalMessage function to get a random message
  const randomInspirationalMessage = generateInspirationalMessage();
  console.log(randomInspirationalMessage);
  