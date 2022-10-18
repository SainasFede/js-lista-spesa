const spesa = ['carota', 'melanzane', 'pomodori', 'pane', 'banane'];
let listaSpesa = document.getElementById('lista-spesa');

for(let i = 0; i < spesa.length; i++){
  let list = document.createElement('li');
  listaSpesa.appendChild(list);
  list.innerHTML = spesa[i];
};