const spesa = ['carota', 'melanzane', 'pomodori', 'pane', 'banane'];
let listaSpesa = document.getElementById('lista-spesa');

let i = 0;

while(i < spesa.length){
  let list = document.createElement('li');
  listaSpesa.appendChild(list);
  list.innerHTML = spesa[i];
  i++;
};