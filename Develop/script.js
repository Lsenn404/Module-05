var container = document.querySelector(".container");
console.log(container)
let blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let date = new Date();
function colorHours(hour) {
    if (date.getHours() > hour) {
      return 'past';
    } else if (date.getHours() === hour) {
      return 'present';
    } else {
      return 'future';
    }
  }
  
  function saveHourText () {
      let block = this.getAttribute("id");
      let text = document.getElementById(block).value;
      localStorage.setItem(block, text);
  }
  
for (var i = 0; i < blocks.length; i++) {
    let block = document.createElement("div");
    let blockState = colorHours(blocks[i]);
    block.setAttribute("class", "row time-block "+blockState);
    let timeDisplay = document.createElement("div");
    timeDisplay.setAttribute("class", "col-md-1 hour");
    if (blocks[i] > 12) {
        timeDisplay.textContent = " "+blocks[i] - 12 + "PM ";
    } else {
        timeDisplay.textContent = " "+blocks[i] + "AM ";
    }
    let textArea = document.createElement("textarea");
    textArea.setAttribute("class", "col-md-10 description");
    textArea.setAttribute("id", blocks[i]);
    textArea.value = localStorage.getItem(blocks[i]);
    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "col-md-1 saveBtn");
    saveButton.setAttribute("id", blocks[i]);
    saveButton.addEventListener("click", saveHourText);
    let saveIcon = document.createElement("i");
    saveIcon.setAttribute("class", "fas fa-save");
    saveButton.appendChild(saveIcon);
    block.appendChild(timeDisplay);
    block.appendChild(textArea);
    block.appendChild(saveButton);

    container.appendChild(block);
}




