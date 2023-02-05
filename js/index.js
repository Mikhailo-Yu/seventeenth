let bodyEl = document.querySelector('body');
let tableEl = document.createElement('table');
let buttonEl = document.querySelector('button');

buttonEl.addEventListener('keyup', generateTable());
bodyEl.addEventListener('click', () => {
    bodyEl.removeChild(tableEl);
} );
function generateTable () {
for (let i = 0; i < 10; i++) {
    let trEl = document.createElement('tr');    
    for (let j = 0; j < 10; j++) {
        let tdEl = document.createElement('td');
        const textNumber = document.createTextNode((j + 10 * i) + 1);
        tdEl.appendChild(textNumber);
        trEl.appendChild(tdEl);
    };
    tableEl.appendChild(trEl);   
}
bodyEl.appendChild(tableEl);
tableEl.setAttribute('border', 1);
}
