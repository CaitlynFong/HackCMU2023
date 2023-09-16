
const facts = ["fact 1","fact 2","fact 3","fact 4"];
var fact = document.getElementById('facts');
fact.innerHTML = facts[Math.floor(Math.random() * facts.length)];

