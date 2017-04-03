 // function sorts hot sauce brand names alphabetically
 function sortTable() {
      var rows, i, x, y, shouldSwitch;
      var table = document.getElementById("brandTable");
      var switching = true;
      while (switching) {
       
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
         
          x = rows[i].getElementsByTagName("TD")[0];
          y = rows[i + 1].getElementsByTagName("TD")[0];
          
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
       
            shouldSwitch= true;
            break;
          }
        }
      if (shouldSwitch) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  $("#brandSorter").click(function() {
    sortTable()
  });

