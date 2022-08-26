const quotes = [
  "인생은 선택과 책임에 지나지 않는다.",
  "절대적이며 상대적인 가치는 시간이다.",
  "La Vita Dolce!",
  "Good day to die.",
  "지금의 행복을 추구하라.",
];

const quote = document.querySelector(".quote span");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote;
