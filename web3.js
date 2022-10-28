window.onload = function () {
    console.log("window loaded");
    let cells= [
        "A0",
        "A1",
        "A2",
        "B0",
        "B1",
        "B2",
        "C0",
        "C1",
        "C2",
      ];
      var giftLocations = [];
      var totalAttempts = 0;
      var giftsFound = 0;
      for (i = 0; i < 3; i++) {
        let randomCell = cells[Math.floor(Math.random() * cells.length)];
        giftLocations.push(randomCell);
      }
    
      let submitBtn = document.getElementById("submit-btn");
    
      console.log(giftLocations);
      submitBtn.onclick = function () {
        totalAttempts++;
        let rating = 100 - Math.floor((totalAttempts / 36) * 100);
        let selectedCell = document.getElementById("val").value;
        if (!cells.includes(selectedCell)) {
          alert("Please enter a valid cell");
        } else if (giftLocations.includes(selectedCell)) {
          giftsFound++;
          if (giftsFound === 3) {
            alert(`You have found all the gifts. Your rating is ${rating}`);
          }
          document.getElementById(selectedCell).innerHTML = "Gift 🎁";
        } else {
          document.getElementById(selectedCell).innerHTML = "Miss 💀";
        }
      };
    };
  
