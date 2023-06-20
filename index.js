// Define arrays with different data
const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const emotions = ['happy', 'excited', 'calm', 'sad', 'angry', 'anxious', 'relaxed', 'confused'];
const activities = ['go for a walk', 'read a book', 'listen to music', 'cook a meal', 'watch a movie', 'write in a journal'];

const generateButton = document.getElementById('generateButton');
const outputElement = document.getElementById('output');

const generateRandomMessage = (array) => {
  return Math.floor(Math.random() * array.length)
}

const randomMessage = () => {
  const indexSigns = generateRandomMessage(signs)
  const indexEmotions = generateRandomMessage(emotions)
  const indexActivities = generateRandomMessage(activities)

  const sign = signs[indexSigns]
  const emotion = emotions[indexEmotions]
  const activity = activities[indexActivities]

  const message = `Your Sign is: ${sign}, Today you feel: ${emotion}, so you need to: ${activity}`;
  return message;
}

const updateElement = () => {
  outputElement.textContent = randomMessage()
}

generateButton.addEventListener('click', updateElement)