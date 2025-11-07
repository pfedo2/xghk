const button = document.getElementById("myButton");
const input = document.getElementById("textInput");

button.addEventListener("click", function () {
  button.textContent = input.value;
});

const image = document.getElementById("myImage");
image.src = "./img/Easy-Strawberry-Lime-Refrigerator-Jam.jpg";

const link = document.getElementById("myLink");
const photo = document.getElementById("myPhoto");

link.href =
  "https://soufflebombay.com/easy-refrigerator-strawberry-jam-recipe/";
photo.alt = "Це новий опис зображення";

const list = document.getElementById("myList");
list.firstElementChild.textContent = "Оновлений перший елемент";
