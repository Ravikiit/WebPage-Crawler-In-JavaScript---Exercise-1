
let str = 'python';
let links = document.links;
console.log(links);
let href;

array.from(links).forEach(function (element){

    href= element.href;
if (href.includes(str)) {
    console.log(href);

}
});
//and done