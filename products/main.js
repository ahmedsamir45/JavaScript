


for (let i=0 ; i<100 ; i++){
let myMainElement = document.createElement('div')
let myHeading = document.createElement('h2')
let myParagraph = document.createElement('p')


let myHeadText = document.createTextNode(`Product Title ${i+1}`)
let myParagraphtext = document.createTextNode(`Product Description ${i+1}`)
 
    // Add Heading Text
    myHeading.appendChild(myHeadText);

    // Add Heading To Main Element
    myMainElement.appendChild(myHeading);

    // Add Paragraph Text
    myParagraph.appendChild(myParagraphtext)

    // Add Paragraph To Main Element
    myMainElement.appendChild(myParagraph)

    myMainElement.className = 'product';

    document.body.appendChild(myMainElement);

}





