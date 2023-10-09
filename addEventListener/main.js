let myP = document.querySelector('p')

// myP.onclick = function () {
//     console.log('Message From OnClick')
// }


// function one () {
//     console.log('Message from OnClick 1')
// }


// function two () {
//     console.log('Message from OnClick 2')
// }

// window.onload = "osama";

// myP.addEventListener('click', function() {
//     console.log("Message From OnClick 1 Event")
// })
// myP.addEventListener('click', one)
// myP.addEventListener('click', two)

// myP.addEventListener('click','string')
myP.onclick = function () {
    let newP = myP.cloneNode(true);
    newP.className = 'clone';
    document.body.appendChild(newP);
}
let cloned = document.querySelector(".clone")

// cloned.onclick = function () {
//     console.log("Iam Cloned");
// }

document.addEventListener("click",function (e) {
    if (e.target.className==='clone') {
        console.log('Iam Cloned')
    }
})