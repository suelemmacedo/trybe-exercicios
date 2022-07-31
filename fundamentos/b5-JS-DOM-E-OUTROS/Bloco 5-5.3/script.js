function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

//1 
createDaysOfTheWeek();
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function criandoCalendario() {
  let getDaysList = document.querySelector("#days");
  for (let index = 0; index < decemberDaysList.length; index += 1); //  este loop vai ocorrer enquanto o index for menor que o tamanho do DecemberDaysList. Esse loop popula a UL com a lista.

  let day = decemberDaysList[index];
  let dayItem = document.createElement("li");
  dayItem.innerHTML = day;

  if (day === 24 || day === 31) {
    dayItem.className = "day holiday";
    getDaysList.appendChild(dayItem);
  } else if (day === 4 || day === 11 || day === 18) {
    dayItem.className = "day friday";
    getDaysList.appendChild(dayItem);
  } else if (day === 25) {
    dayItem.className = "day holiday friday";
    getDaysList.appendChild(dayItem);
  } else {
    dayItem.className = "day";
    getDaysList.appendChild(dayItem); // caso o dia for qualquer outro dia que não seja os de cima.
  }
}

//2

function criandoBotao(){
  let botao = document.querySelector('buttons-container');
  let botaoFeriados = document.createElement('botao');
  let botaoID = 'btn-holiday';

  botao.innerHTML = feriados;
  botao.id = botaoID;

  botao.appendChild(botaoFeriados);

}
criandoBotao("feriados");