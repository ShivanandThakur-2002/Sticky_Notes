let btn = document.getElementById("button");
let text = document.getElementsByTagName("textarea")[0];
let color = document.getElementById("color");
let notes = document.getElementById("notes-container");
let hideLine = document.getElementById("hide_line");

function addNotes() {
  if (text.value === "") {
    alert("Enter some text");
    return;
  }

  hideLine.innerText = "";

  let div = document.createElement("div");
  div.classList.add("note");

  let p = document.createElement("p");
  let cross_btn = document.createElement("button");

  cross_btn.innerHTML = "X";
  p.innerText = text.value;

  div.appendChild(p);
  div.appendChild(cross_btn);
  notes.appendChild(div);

  div.style.backgroundColor = color.value;

  text.value = "";

  cross_btn.addEventListener("click", function () {
    div.remove();
    if (notes.children.length === 0) {
      hideLine.innerText = "You have not added a note yet";
    }
  });
}

function colorchange() {
  text.style.backgroundColor = color.value;
}

btn.addEventListener("click", addNotes);
color.addEventListener("change", colorchange);
