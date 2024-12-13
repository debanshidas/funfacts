const facts = [
    "I am 20 years old and have a passion for exploring mountainous regions.",
    "I have hiked several mountain trails and enjoy the serenity of nature.",
    "I am fascinated by the diverse wildlife and ecosystems found in mountain areas.",
    "I love capturing the breathtaking views of mountains through photography.",
    "I aspire to climb some of the world's most famous peaks in the future."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
