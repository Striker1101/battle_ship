document.addEventListener("DOMContentLoaded", function (event) {
  // Function to create a ten by ten grid
  function createGrid(container, playerClass) {
    if (!container) return; // Check if container exists

    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      row.classList.add(playerClass + "_row");

      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add(playerClass + "_box");
        cell.style.width = "30px";
        cell.style.height = "30px";
        cell.style.border = "1px solid red";
        row.appendChild(cell);
      }

      container.appendChild(row);
    }
  }

  // Get container elements for both players
  const playerOneContainer = document.querySelector(".player_one_board");
  const playerTwoContainer = document.querySelector(".player_two_board");

  // Create grid for Player One
  createGrid(playerOneContainer, "player_one");

  // Create grid for Player Two
  createGrid(playerTwoContainer, "player_two");
});
