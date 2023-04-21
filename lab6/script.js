//zad 1
// function silnia(n){
//     if (n > 1){
//         return n * silnia(n-1)
//     }
//     return 1;
// }
// console.log(silnia(5))

//zad2
const btns = document.querySelectorAll('button')
const elementToHide = document.querySelector('p')

let selectedBtn;


btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        if (selectedBtn) {
            selectedBtn.classList.remove('selected');

        }

        elementToHide.hidden = !elementToHide.hidden
        btn.classList.add('selected');
        selectedBtn = btn;
    })
})

const input = document.querySelector('input');
const submit = document.querySelector('#submit')
const ul = document.querySelector('ul')

submit.addEventListener('click', () => {
    const value = input.value;
    const li1 = document.createElement('li1')
    li1.appendChild(li1);
})