let list = document.querySelector('.list');
let btn = document.querySelector('button');
let numbers = document.querySelectorAll('.numbers');
let dataValue;

// Function to handle clicks on numbers
function handleClick(e) {
    e.preventDefault();

    // Remove 'white' class from all numbers
    numbers.forEach(num => num.classList.remove('white'));

    // Add 'white' class to the clicked number
    e.target.classList.add('white');

    // Add 'white' class to the button
    btn.classList.add('white');

    // Update dataValue with the clicked number's text
    dataValue = e.target.innerText;
}

// Attach event listeners to all numbers
numbers.forEach(num => {
    num.addEventListener('click', handleClick);
});

// Function to get the clicked value (if needed elsewhere)
function clicked() {
    let selected = [...numbers].find(num => num.classList.contains('white'));
    return selected ? selected.innerText : null;
}
dataValue = clicked();

let main = document.querySelector('.main-cont');
let thanks = document.querySelector('.cont2');
let span = document.querySelector('span');


btn.addEventListener('click',function submit(event){
    main.style.display = 'none';
    thanks.style.display = 'block';
    span.innerText = dataValue;
} );