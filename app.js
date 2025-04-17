let heading = document.querySelector('h1');
let div = document.querySelector('div');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let red = Math.floor((Math.random() * 255) + 1);
    let green = Math.floor((Math.random() * 255) + 1);
    let blue = Math.floor((Math.random() * 255) + 1);

    heading.style.color = `rgb(${red}, ${green}, ${blue})`;
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    div.style.border = `none`;
});
