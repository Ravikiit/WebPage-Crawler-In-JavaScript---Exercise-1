
//Challenge accepted
let a = document.links;

console.log(a);



Array.from(a).forEach(function(element)

{

    let x = element.href;

    if(x.includes('code'))

    console.log(x);

})

//and done