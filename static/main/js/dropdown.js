const dropdown1 = document.getElementById("dropdown_1");
const dropdown2 = document.getElementById("dropdown_2");
const dropdown3 = document.getElementById("dropdown_3");
const dropdown4 = document.getElementById("dropdown_4");
const dropdown5 = document.getElementById("dropdown_5");
const dropdown6 = document.getElementById("dropdown_6");
// dropdown1
const dropdownBtn1 = document.getElementById("dropdownBtn1");
const dropdownContent1 = document.getElementById("dropdownContent1");

dropdownBtn1.addEventListener("click", () => {
  dropdownContent1.classList.toggle("active");
  dropdown2.classList.toggle("active_1");
});

// dropdown2
const dropdownBtn2 = document.getElementById("dropdownBtn2");
const dropdownContent2 = document.getElementById("dropdownContent2");

dropdownBtn2.addEventListener("click", () => {
  dropdownContent2.classList.toggle("active");
  dropdown3.classList.toggle("active_2");
});

// dropdown3
const dropdownBtn3 = document.getElementById("dropdownBtn3");
const dropdownContent3 = document.getElementById("dropdownContent3");

dropdownBtn3.addEventListener("click", () => {
  dropdownContent3.classList.toggle("active");
  dropdown4.classList.toggle("active_3");
});

// dropdown4
const dropdownBtn4 = document.getElementById("dropdownBtn4");
const dropdownContent4 = document.getElementById("dropdownContent4");

dropdownBtn4.addEventListener("click", () => {
  dropdownContent4.classList.toggle("active");
  dropdown5.classList.toggle("active_4");
});

// dropdown5
const dropdownBtn5 = document.getElementById("dropdownBtn5");
const dropdownContent5 = document.getElementById("dropdownContent5");

dropdownBtn5.addEventListener("click", () => {
  dropdownContent5.classList.toggle("active");
  dropdown6.classList.toggle("active_5");
})

// dropdown6
const dropdownBtn6 = document.getElementById("dropdownBtn6");
const dropdownContent6 = document.getElementById("dropdownContent6");

dropdownBtn6.addEventListener("click", () => {
  dropdownContent6.classList.toggle("active");
  dropdown1.classList.toggle("active_6");
})