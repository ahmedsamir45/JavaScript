let products = ['Keyboard','Mouse',1,2,'pad',3,4,'Monitor'];

let colors = ['Red','Green','Black'];

for (let i = 0 ; i < products.length;i++){
    console.log(products[i]);
    if (products[i]==='pad'){
        break;
    }
}
console.log('=')
for (let i = 0 ; i < products.length;i++){
    if ( typeof products[i]==='number'){
        continue;
    }
    console.log(products[i]);
}

mainLoop: for(let i = 0 ; i < colors.length; i++){
    console.log(products[i]);
    nestedLoop: for (let j = 0; j<colors.length;j++){
        console.log(`-${colors[j]}`);
        if (colors[j]==='Green'){
            break nestedLoop;
        }
    }
}