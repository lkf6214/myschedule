// // let spanEl = document.querySelector("span");
// // spanEl.remove();

// // $("span").remove(); //jquery 안쓰고 있는 추세. 업그레이드 되고있지만, 옛 jquery 지원안한다고 하면 다 뜯어고쳐야함.

// //-----

// $("input").val();

// // function showValue() {
// //   console.log(document.querySelector("input").value);
// // }

// //-----

// // function showValue() {
// $("input").val("가나다라마바사");

// // document.querySelector("input").value = "가나다라마바사"; //버튼까지 이름이 바뀜

// $("span").text("가나다라마바사");
// document.querySelector("span").textContent

// // //---

// const inputText = document.querySelector(".text-input");
// const writebtn = document.querySelector(".write-btn");
// const modifybtn = document.querySelector(".modify-btn");
// const spanEl = document.querySelector("span");

// modifybtn.addEventListener("click", function () {
//   inputText.value = "가나다라마바사";
// });

// function changeSpan() {
//   spanEl.textContent = inputText.value;
// }

// $(".write-btn").on("click", function () {
//   let text = $(".text-input").val();
//   $("span").text(text);
//   //   $("span").text($("text-input").val());
// });

// $("modify-btn").on("click", function () {
//   $(".text-input").val("가나다라마바사");
// });

// $(".text-input").on("click", function () {
//   $(".text-input").attr("type", "button");
//   $(".text-input").attr("value", "button");
// });
// const modifyBtn1 = document.querySelector(".modify-btn-1");
// modifyBtn1.addEventListener("click", function () {
//   document
//     .querySelector(".text-input")
//     .setAttribute("placeholder", "변경1을 누르셨습니다.");
// });

// const modifyBtn2 = document.querySelector(".modify-btn-2");
// modifyBtn2.addEventListener("click", function () {
//   document.querySelector(".text-input").setAttribute("type", "radio");
// });

// $(."modify-btn-1").on("click", function (){
//     $(.text)
// })

//실습
// $("div").css("background-color", "orange");

// (document.querySelector("div").style = "background-color: skyblue"),
//   "font-size:30px";

//  모르것ㄷ~~~~~~~~~~~~~~~~~~~~~~37
// function changeCss() {
//   document.querySelector("div").style = "background-color : orange";
// }

// function changeCss() {}

//---
// $("p").html("<h1>크롱<h1>");

// document.querySelector("p").innerHTML = "<h1>루피<h1>";

// const li = document.createElement("li");
// li.textContent = "추가용";

// const li = document.createElement("li");
// li.textContent = "추가2";

// $(".me").before(li);
// $(".me").after(li);

//43실습
// const textInput = document.querySelector(".text-input");
// const modifybtn1 = document.querySelector(".modify-btn-1");
// const modifybtn2 = document.querySelector(".modify-btn-2");
// const list = document.querySelector("ul");

// modifybtn1.addEventListener("click", () => {
//   const addLi = document.createElement("li");
//   addLi.textContent = textInput.value;

//   list.append(addLi);
//   textInput.value = "";
// });

// function prependLi() {
//   let text = $(".text-input").val();
//   $("ul").prepend(`<li>${text}</li>`);
// }

// ---

console.log("");
console.log("");
