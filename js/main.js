// 1-MASALA

// const arrayOfMultipitles = (num1, num2) => {
//   const output = [];
//   for (let i = 1; i <= num2; i++) {
//     output.push(i * num1);
//   }
//   return output;
// };

// console.log(arrayOfMultipitles(7, 5));

// 2-MASALA

// const compact = (arr) => {
//   return arr.filter((el) => el);
// };

// console.log(compact([1, false, "", 2, 3]));

// 3-MASALA

// const newArr = [];

// const test = (arr) => {
//   for (let i of arr) {
//     arr.every((el) => el === el);
//   }
// };

// console.log(test([1, 1, 1, 1]));

// ========================================================== XATO ☝ ===================================================================

// 4-MASALA

// const func = (str) => {
//   let res1 = str.split(' ').findIndex(val => val === "Nemo")
//   console.log(res1 + 1);
// };

// console.log(func("I am finding Nemo !"));

// ========================================================== XATO ☝ ===================================================================

// 5-MASALA

// const arr = ["rsq", "g", "pl", "rsqgpl"];

// const func = (array) => {
//   let total = '';
//   for (let i = 0; i < array.length - 1; i++) {
//     total += array[i];
//   }
//   return total === array[array.length - 1];
// };

// console.log(func(arr));

// ============================================================ UY ISHI ====================================================================

const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-input");
const elActiveBtnText = document.querySelector(".active-btn-text");
const elBtn1 = document.querySelector(".btn1");
const elBtn2 = document.querySelector(".btn2");
const elBtn3 = document.querySelector(".btn3");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (elInput.value == 1) {
    elBtn1.style.color = "black";
    elBtn2.style.color = "gray";
    elBtn3.style.color = "gray";
    elActiveBtnText.textContent = elBtn1.textContent;
  }
  if (elInput.value == 2) {
    elBtn1.style.color = "gray";
    elBtn3.style.color = "gray";
    elBtn2.style.color = "black";
    elActiveBtnText.textContent = elBtn2.textContent;
  }
  if (elInput.value == 3) {
    elBtn1.style.color = "gray";
    elBtn2.style.color = "gray";
    elBtn3.style.color = "black";
    elActiveBtnText.textContent = elBtn3.textContent;
  }
  if(elInput.value != 1 && elInput.value != 2 && elInput.value != 3){
    alert("this index invalid !!!")
  }

  elInput.value = "";
});

// ======================================== USTOZ YANA QO'RQIB KETMEN PROSTA ERINDIM QISQA QILIB YOZISHGA 😂 ===============================

elBtn1.addEventListener("click", () => {
  elActiveBtnText.textContent = elBtn1.textContent;
  elBtn1.style.color = "black";
  elBtn2.style.color = "gray";
  elBtn3.style.color = "gray";
});

elBtn2.addEventListener("click", () => {
  elActiveBtnText.textContent = elBtn2.textContent;
  elBtn2.style.color = "black";
  elBtn1.style.color = "gray";
  elBtn3.style.color = "gray";
});

elBtn3.addEventListener("click", () => {
  elActiveBtnText.textContent = elBtn3.textContent;
  elBtn3.style.color = "black";
  elBtn2.style.color = "gray";
  elBtn1.style.color = "gray";
});
