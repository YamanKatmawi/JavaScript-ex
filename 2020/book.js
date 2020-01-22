var allitems = document.querySelectorAll(".list li");
console.log(allitems);
var content = document.querySelector("#content");
var btn = document.querySelector("#addToCart");
var totalPrice = 0;

allitems.forEach(function(item) {
  item.onclick = function() {
    totalPrice += item.getAttribute("Price");

    content.innerHTML += item.textContent + " ";

    if (content.innerHTML != "") {
      btn.getElementsByClassName.display = "block";
    }
  };
});

btn.onclick = function() {
  console.log(totalPrice);
};

/////
