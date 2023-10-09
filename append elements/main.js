let element = document.getElementById("my-div");
let createdp = document.createElement("p")

// element.before('Hello From JS');

element.before(createdp)

element.append('Hello From JS');

element.prepend('before')

element.remove()