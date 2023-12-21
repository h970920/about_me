const quotes = [
  {
    quote: "As long as there is life, there is hope.",
    author: "Keats",
  },
  {
    quote:
      "In the tranquil sea, skilled sailors navigate, but in a rough sea, the best sailors depart.",
    author: "William Shakespeare",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "Great achievements often start with small opportunities.",
    author: "Demosthenes",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote:
      "The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Good ideas are only as good as the actions that follow them.",
    author: "Neil Fiore",
  },
  {
    quote: "It's not about where you come from; it's about where you're going.",
    author: "Seneca",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
