let button = document.getElementById('submit');

button.addEventListener('click', contar);

function contar() {
    let start = document.getElementById('number-start').value;
    let end = document.getElementById('number-end').value;
    let jump = document.getElementById('number-jump').value;
    let result = document.getElementById('camp-result');

    result.innerHTML = ' ';

    let s = Number(start);
    let e = Number(end);
    let j = Number(jump);

    if(start.length == 0 || end.length == 0 || jump.length == 0) {

        result.innerHTML = 'Impossivel contar';

    } else if(jump <= 0) {

        alert('Confira o salto dos numeros e tente novamente');
        cont();
        

        function cont() {
            for(let i = s; i <= e; i++) {

                result.innerHTML += ` \u{1F449} ${i} `;

            }
        }
        result.innerHTML += `\u{1F6A9}` 

    } else if (s <= end) {

        for(let n = s; n <= e; n += j) {
            result.innerHTML += ` \u{1F449} ${n} `;
        }
        result.innerHTML += `\u{1F6A9}` 
    } else {

        for(let v = s; v >= e; v -= j) {
            result.innerHTML += `\u{1F449} ${v} `;
        }
        result.innerHTML += `\u{1F6A9}` 
    } 
}