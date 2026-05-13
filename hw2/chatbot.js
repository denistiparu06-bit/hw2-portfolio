// chatbot.js — Simple Q&A chatbot with question bank

const questionBank = [
  {
    keywords: ["html", "stand", "stands", "acronym"],
    question: "What does HTML stand for?",
    answer: "HTML stands for HyperText Markup Language. It is the standard language for creating web pages."
  },
  {
    keywords: ["css", "cascading", "stylesheet"],
    question: "What does CSS stand for?",
    answer: "CSS stands for Cascading Style Sheets. It controls the visual presentation of HTML elements."
  },
  {
    keywords: ["semantic", "element", "tag", "meaning"],
    question: "What is a semantic HTML element?",
    answer: "A semantic element clearly describes its meaning, such as <header>, <nav>, <main>, <section>, <article>, and <footer>."
  },
  {
    keywords: ["flexbox", "flex"],
    question: "What is Flexbox?",
    answer: "Flexbox is a CSS layout model that arranges items in a row or column, making it easy to align and distribute space between elements."
  },
  {
    keywords: ["grid", "css grid"],
    question: "What is CSS Grid?",
    answer: "CSS Grid is a two-dimensional layout system that lets you create rows and columns, giving precise control over page layout."
  },
  {
    keywords: ["javascript", "js", "language"],
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language that adds interactivity to web pages. It runs in the browser and can manipulate the DOM."
  },
  {
    keywords: ["dom", "document object model"],
    question: "What is the DOM?",
    answer: "The DOM (Document Object Model) is a tree-like representation of a web page that JavaScript can read and modify dynamically."
  },
  {
    keywords: ["responsive", "media", "query"],
    question: "What is a media query?",
    answer: "A media query is a CSS technique that applies styles only when certain conditions are met, such as screen width — used for responsive design."
  },
  {
    keywords: ["git", "github", "version", "control"],
    question: "What is Git?",
    answer: "Git is a version control system that tracks changes to files. GitHub is a platform that hosts Git repositories online."
  },
  {
    keywords: ["accessibility", "a11y", "screen", "reader"],
    question: "What is web accessibility?",
    answer: "Web accessibility means designing websites so people with disabilities can use them — including proper labels, keyboard navigation, and semantic HTML."
  }
];

const chatMessages = document.getElementById("chat-messages");
const chatInput    = document.getElementById("chat-input");
const chatForm     = document.getElementById("chat-form");
const suggestList  = document.getElementById("suggest-list");

// Build suggested questions list
questionBank.forEach(function(item, index) {
  var li = document.createElement("li");
  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "suggest-btn";
  btn.textContent = item.question;
  btn.addEventListener("click", function() {
    chatInput.value = item.question;
    chatInput.focus();
  });
  li.appendChild(btn);
  suggestList.appendChild(li);
});

function appendMessage(text, sender) {
  var msg = document.createElement("div");
  msg.className = "message " + sender;
  var bubble = document.createElement("p");
  bubble.textContent = text;
  msg.appendChild(bubble);
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function findAnswer(userText) {
  var lower = userText.toLowerCase();
  var best = null;
  var bestScore = 0;
  questionBank.forEach(function(item) {
    var score = 0;
    item.keywords.forEach(function(kw) {
      if (lower.includes(kw)) score++;
    });
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  });
  if (best && bestScore > 0) {
    return best.answer;
  }
  return "I'm not sure about that. Try asking about HTML, CSS, JavaScript, Flexbox, Grid, the DOM, Git, or accessibility!";
}

// Handle form submit event
chatForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var userText = chatInput.value.trim();
  if (!userText) return;

  appendMessage(userText, "user");
  chatInput.value = "";

  // Simulate a short delay before bot replies
  setTimeout(function() {
    var answer = findAnswer(userText);
    appendMessage(answer, "bot");
  }, 400);
});
