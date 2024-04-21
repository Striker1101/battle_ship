document.addEventListener("DOMContentLoaded", function (event) {
    // Function to create a ten by ten grid
    function createGrid(tbody, playerClass) {
      for (let i = 0; i < 10; i++) {
        const tr = document.createElement("tr");
        tr.classList.add(playerClass + "_row_" + i);
  
        for (let j = 0; j < 10; j++) {
          const th = document.createElement("th");
          th.classList.add(playerClass + "_box_" + j);
          th.classList.add(playerClass + "_body");
          tr.appendChild(th);
        }
  
        tbody.appendChild(tr);
      }
    }
  
    // Get tbody elements for both players
    const playerOneTbody = document.querySelector(".tbody.player_one");
    const playerTwoTbody = document.querySelector(".tbody.player_two");
  
    // Create grid for Player One
    createGrid(playerOneTbody, "player_one");
  
    // Create grid for Player Two
    createGrid(playerTwoTbody, "player_two");
  });
  