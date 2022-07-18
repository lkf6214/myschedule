let button = document.querySelector("button");
let date = document.querySelector("#date");
let content = document.querySelector("#content");
let table = document.querySelector("table");
let target = null;

// console.log(button, date, content, table);

table.addEventListener("click", function (e) {
  if (e.target.tagName === "P") {
    date.value = e.target.textContent;

    target = e.target.parentNode;
  }
});

function writeSchedule() {
  const divEl = document.createElement("div");
  //   content.value = e.target.content;
  divEl.textContent = content.value;
  target.append(divEl);
}

//   const box = document.createElement("div");
//   const boxtext = document.createTextNode("dd");
//   box.appendChild(boxtext);
//   document.table.appendChild(box);
