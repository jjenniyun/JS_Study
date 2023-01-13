const quotes = [
    {
        quote:"You will face many defeats in life, but never let yourself be defeated.",
        author:"Maya Angelou",
    },
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela",
    },
    {
        quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author:"Thomas A. Edison",
    },
    {
        quote:"Life is either a great adventure or nothing.",
        author:"Helen Keller",
    },
    {
        quote:"Keep your eyes on the stars and your feet on the ground.",
        author:"Theodore Roosevelt",
    },
    {
        quote:"Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies.",
        author:"Alexander Pope",
    },
    {
        quote:"Love asks me no questions, and gives me endless support.",
        author:"William Shakespeare",
    },
    {
        quote:"If you would be loved, love and be lovable.",
        author:"Benjamin Franklin",
    },
    {
        quote:"Love doesn’t make the world go round. Love is what makes the ride worthwhile.",
        author:"Franklin P. Jones",
    },
    {
        quote:"The supreme happiness in life is the conviction that we are loved.",
        author:"Victor Hugo",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;