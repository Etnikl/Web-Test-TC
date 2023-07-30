document.getElementById("selected").addEventListener("click", checkuserocc);
      function checkuserocc() {
          let resultoccupation = document.getElementById("selected").innerHTML;
          if (resultoccupation == "Reale Estate Agent") {
            document.getElementById("realestate-check").style.display = "flex";
            document.getElementById("realestatebroker-check").style.display = "none";
          }else if (resultoccupation == "Reale Estate Broker") {
            document.getElementById("realestatebroker-check").style.display = "flex";
            document.getElementById("realestate-check").style.display = "none";
          }else {
            document.getElementById("realestate-check").style.display = "none";
            document.getElementById("realestatebroker-check").style.display = "none";
          }
      }