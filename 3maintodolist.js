const inputTask = document.querySelector(".input-task");
const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");

//점 쓰기 꼭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(inputTask, addBtn, todoList);

addBtn.addEventListener("click", function () {
  if (inputTask.value === true) {
    inputTask.setAttribute("placeholder", "할 일을 입력해 주세요.");
  } else {
    const addLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    checkbox.addEventListener("click", function () {
      if (checkbox.checked === true) {
        // checkbox.parentNode.style = "text-decoration: line-through";
        checkbox.parentNode.style.textDecoration = "line-through";
      } else {
        checkbox.parentNode.style.textDecoration = "none";
      }
    });

    const deletedBtn = document.createElement("input");
    deletedBtn.setAttribute("type", "button");
    deletedBtn.setAttribute("value", "삭제");
    // deletedBtn.setAttribute("onclick", "deleteTask(this)");

    // addLi.append(checkbox);
    // addLi.append(inputTask.value);
    // addLi.append(deletedBtn);

    // 위와 동일함, append는 동시에 여러개 붙일 수 있음
    addLi.append(checkbox, inputTask.value, deletedBtn);

    todoList.append(addLi);

    inputTask.value = "";
  }
});

todoList.addEventListener("click", function (e) {
  if (
    e.target.tagName === "INPUT" &&
    e.target.getAttribute("type") === "button"
  ) {
    e.target.parentNode.remove();
  } //확인
  //   e.target.remove(); 전체를 지우는게 아니고 글자를 누르면 전부 지워지지만/체크박스만/하나씩 지움
});

// function deleteTask(t) {
//   t.parentNode.remove();
// }

// const test = document.querySelector(".test");
// test.addEventListener("click", function () {
//   console.log(test.checked);
// });
