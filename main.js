let todo = []
const ul = document.createElement("ul");
const body = document.querySelector("body");

document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();
    todo.push(document.querySelector("#todo").value);

    const template = todo.map( item => `
    <li>${item}</li>
    `)
    ul.innerHTML = template.join('');
    body.appendChild(ul);

})


