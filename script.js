// Changes the intro paragraph's text and style like a magic spell
function castSpell() {
    const paragraph = document.getElementById("info");
    paragraph.textContent = "The spell is cast! You changed the text with JavaScript!";
    paragraph.style.color = "purple";
    paragraph.style.fontSize = "18px";
    paragraph.style.fontWeight = "bold";
  }
  
  // Adds a new magical item to the list
  function summonItem() {
    const list = document.getElementById("list");
    const newItem = document.createElement("li");
    newItem.textContent = "Crystal of Imagination";
    list.appendChild(newItem);
  }
  
  // Removes the last item in the magic list
  function vanishItem() {
    const list = document.getElementById("list");
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    }
  }
  
