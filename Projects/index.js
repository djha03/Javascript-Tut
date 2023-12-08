const buttons = document.querySelectorAll('.button');
const body = document.querySelectorAll("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(chai){
        console.log(chai.target)
    })
})