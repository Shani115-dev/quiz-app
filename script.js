const questions = [
  {
    question: "What is the capital of the United States?",
    options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"],
    answer: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: 2,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    answer: 2,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: 0,
  },
  {
    question: "Which year did the Titanic sink?",
    options: ["1905", "1912", "1923", "1898"],
    answer: 1,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Michelangelo",
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
    ],
    answer: 1,
  },
  {
    question: "Which organ is responsible for pumping blood in the human body?",
    options: ["Lungs", "Liver", "Heart", "Kidneys"],
    answer: 2,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: 2,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "South Korea"],
    answer: 2,
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Florence", "Naples", "Milan"],
    answer: 0,
  },
  {
    question: "Who discovered gravity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: 1,
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
    answer: 1,
  },
  {
    question: "What does the 'E' in E=mc² stand for?",
    options: ["Energy", "Electricity", "Erosion", "Earth"],
    answer: 0,
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: 2,
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Stephen Hawking",
      "Albert Einstein",
      "Marie Curie",
      "Isaac Newton",
    ],
    answer: 1,
  },
  {
    question: "Which country is known for the Eiffel Tower?",
    options: ["Italy", "Spain", "France", "Germany"],
    answer: 2,
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: 2,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Osmium", "Oxide", "Olive"],
    answer: 0,
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: 2,
  },
  {
    question: "Which bird is known as the symbol of peace?",
    options: ["Eagle", "Sparrow", "Dove", "Parrot"],
    answer: 2,
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
    answer: 2,
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: 2,
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
    answer: 2,
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: 1,
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "James Watt",
    ],
    answer: 0,
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "Germany", "Canada", "United Kingdom"],
    answer: 0,
  },
  {
    question: "How many planets are in the Solar System?",
    options: ["7", "8", "9", "10"],
    answer: 1,
  },
  {
    question: "Which is the smallest planet in our solar system?",
    options: ["Mars", "Mercury", "Venus", "Pluto"],
    answer: 1,
  },
  {
    question: "What does DNA stand for?",
    options: [
      "Dynamic Neural Activity",
      "Deoxyribonucleic Acid",
      "Data Network Access",
      "Digital Numeric Algorithm",
    ],
    answer: 1,
  },
  {
    question: "What is the freezing point of water?",
    options: ["0°C", "100°C", "32°F", "-32°F"],
    answer: 0,
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Kangaroo"],
    answer: 0,
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Onion", "Avocado", "Lime"],
    answer: 2,
  },
  {
    question: "Who is known as the Father of Computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    answer: 0,
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: 1,
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: 0,
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Caravaggio"],
    answer: 2,
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    answer: 2,
  },
  {
    question: "Which element has the symbol 'Na'?",
    options: ["Neon", "Sodium", "Nitrogen", "Nickel"],
    answer: 1,
  },
  {
    question: "What is the national flower of Japan?",
    options: ["Cherry Blossom", "Rose", "Tulip", "Sunflower"],
    answer: 0,
  },
  {
    question: "Which year was the first manned moon landing?",
    options: ["1965", "1969", "1972", "1980"],
    answer: 1,
  },
  {
    question: "Which is the smallest continent?",
    options: ["Europe", "Antarctica", "Australia", "South America"],
    answer: 2,
  },
  {
    question: "What is the name of the Greek god of the sea?",
    options: ["Zeus", "Poseidon", "Apollo", "Hades"],
    answer: 1,
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    options: ["Piano", "Guitar", "Harp", "Drums"],
    answer: 0,
  },
  {
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Giza", "Alexandria", "Luxor"],
    answer: 0,
  },
  {
    question: "How many degrees are in a circle?",
    options: ["90", "180", "360", "720"],
    answer: 2,
  },
  {
    question: "Which metal is used to make coins and jewelry?",
    options: ["Iron", "Copper", "Silver", "Aluminum"],
    answer: 2,
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Camel", "Elephant", "Horse", "Donkey"],
    answer: 0,
  },
  {
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Sophocles", "Virgil", "Aristotle"],
    answer: 0,
  },
];

let currentQuestion = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;
  optionsEl.innerHTML = "";

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = option;
    btn.onclick = () => selectOption(index);
    optionsEl.appendChild(btn);
  });

  progressEl.textContent = `Question ${currentQuestion + 1} of ${
    questions.length
  }`;
  nextBtn.disabled = true;
}

function selectOption(index) {
  selectedOption = index;
  const allOptions = document.querySelectorAll(".quiz-option");
  allOptions.forEach((option, i) => {
    option.classList.toggle("selected", i === index);
  });
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  if (selectedOption === questions[currentQuestion].answer) {
    alert("Correct!");
  } else {
    alert("Wrong answer!");
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz Completed! 🎉");
    currentQuestion = 0;
    loadQuestion();
  }
};

loadQuestion();
