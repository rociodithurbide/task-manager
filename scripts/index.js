const addButton = document.querySelector("#addButton");
const taskInput = document.querySelector("#taskInput");
const listItemWrapper = document.querySelector("#listItemWrapper");

const handleAddClick = () => {
  const userInput = taskInput.value;
  
  const newListItem = document.createElement("li");
  newListItem.classList.add("listItem");
  newListItem.setAttribute("id", "listItem");
  
  const newLabelItem = document.createElement("label");
  newLabelItem.classList.add("itemLabel");
  
  const newInputItemCheckbox = document.createElement("INPUT");
  newInputItemCheckbox.setAttribute("type", "checkbox");
  newInputItemCheckbox.classList.add("itemCheckbox");
  
  const newSpanItem = document.createElement("span");
  newSpanItem.classList.add("itemText");
  
  const newDeleteItem = document.createElement("button");
  newDeleteItem.classList.add("deleteItem");

  listItemWrapper.appendChild(newListItem);
  newListItem.appendChild(newLabelItem);
  newLabelItem.appendChild(newInputItemCheckbox);
  newLabelItem.appendChild(newSpanItem);
  newLabelItem.appendChild(newDeleteItem);
  
  newDeleteItem.innerText = "X";
  newLabelItem.querySelector(".itemText").innerText = userInput;
  
  taskInput.value = "";
  console.log(userInput);
  
  const handleDeleteClick = () => {
    if (newListItem.parentNode) {
      newListItem.parentNode.removeChild(newListItem);
    }
  }
  newDeleteItem.addEventListener("click", handleDeleteClick);
}

const handleEnterOnInput = (event) => {
  if (event.keyCode == 13){
    //console.log('Apreto el enter');
    handleAddClick();
  }
  //console.log(event.keyCode);
}


addButton.addEventListener("click", handleAddClick);
taskInput.addEventListener("keydown", handleEnterOnInput);