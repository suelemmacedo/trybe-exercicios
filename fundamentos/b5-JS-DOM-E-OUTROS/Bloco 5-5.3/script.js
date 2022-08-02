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
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector("#days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    let dayItem = document.createElement("li");
    dayItem.innerHTML = day;

    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = "day holiday"; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = "day friday"; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = "day holiday friday"; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = "day";
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth();

//2

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  newButton.innerHTML = buttonName;
  let newButtonID = "btn-holiday";
  newButton.id = newButtonID;

  buttonContainer.appendChild(newButton);
}

createHolidayButton("Feriados");

//3

function displayHolidays() {
  let getHolidayButton = document.querySelector("#btn-holiday");
  let getHolidays = document.querySelectorAll(".holiday");
  let backgroundColor = "rgb(238,238,238)";
  let setNewColor = "white";

  getHolidayButton.addEventListener("click", function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
displayHolidays();

//4

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  newButton.innerHTML = buttonName;
  let newButtonID = "btn-friday";
  newButton.id = newButtonID;

  buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
}
createFridayButton("Sexta-feira");

//5

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector("#btn-friday");
  let fridays = document.getElementsByClassName("friday");
  let newFridayText = "SEXTOU o/";

  getFridayButton.addEventListener("click", function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
        //caso o texto não tenha sido substituído, ao clicar no botão ele será substituido pelo novo texto;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
        //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
      }
    }
  });
}
let decemberFridays = [4, 11, 18, 25];
displayFridays(decemberFridays);

//6

function dayMouseOver() {
  let days = document.querySelector("#days");
  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600"; // ele pega o evento e altera o estilo de fontweight para 600
  });
}

function dayMouseOut() {
  let days = document.querySelector("#days");
  days.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}
dayMouseOver();
dayMouseOut();

//7

function newTaskSpan() {
  let taskContainer = document.querySelector(".my-tasks");
  let taskName = document.createElement("span");
  taskName.innerText = "projeto";

  taskContainer.appendChild(taskName);
}
newTaskSpan();

//8
function newTaskDiv(cor) {
  let taskContainer = document.querySelector(".my-tasks");
  let newTask = document.createElement("div");
  newTask.class = "task";
  newTask.style.backgroundColor = cor;

  taskContainer.appendChild(newTask);
}
newTaskDiv("blue");

//9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName("task selected");
  let myTasks = document.querySelector(".task");
  myTasks.addEventListener("click", function (event) {
    if (selectedTask.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  });
}
setTaskClass();

//10




