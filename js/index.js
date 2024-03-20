let list = document.getElementById("shopping-list");
let input = document.querySelector("input");
let button = document.querySelector("button");
let itemCount = document.querySelector(".counter");

button.onclick = () => {
  let itemNumber = parseInt(itemCount.value) || 0; // Get the selected item number

  if (itemNumber === 0) {
    alert("Please select a number greater than 0.");
    return;
  }

  if (itemNumber > 10) {
    alert("Please select a number less than or equal to 10.");
    return;
  }

  if (input.value.trim() === "") {
    alert("Please enter an item.");
    return;
  }

  let myItem = input.value;
  input.value = "";

  let listItem = document.createElement("li");
  let listText = document.createElement("span");
  let listBtn = document.createElement("button");

  listText.textContent = `${itemNumber} `;
  listText.classList.add("item-number");

  listItem.appendChild(listText);
  listItem.appendChild(document.createTextNode(myItem));
  listItem.appendChild(listBtn);
  listBtn.textContent = "❌";
  listBtn.classList.add("delete-button");

  list.appendChild(listItem);

  listBtn.onclick = () => {
    list.removeChild(listItem);
  };

  input.focus();
};
