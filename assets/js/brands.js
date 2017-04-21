 // function sorts hot sauce brand names alphabetically
 function sortTable(ascending, indx) {
      var rows, i, x, y, shouldSwitch;
      var table = document.getElementById("brandTable");
      var switching = true;
      while (switching) {
       
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
         
          x = rows[i].getElementsByTagName("TD")[indx];
          y = rows[i + 1].getElementsByTagName("TD")[indx];

          if ((x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) && (ascending == true)) {
       
            shouldSwitch= true;
            break;
          }
        
          
          if ((x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) && (ascending == false)) {
       
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

  $("#asc-brand-sort").click(function() {
    sortTable(true, 0)
  });

  $("#desc-brand-sort").click(function() {
    sortTable(false, 0)
  });

  $("#asc-sauce-sort").click(function() {
    sortTable(true, 0)
  });

  $("#desc-sauce-sort").click(function() {
    sortTable(false, 0)
  });


  $("#asc-logo-sort").click(function() {
    sortTable(true, 0)
  });

  $("#desc-logo-sort").click(function() {
    sortTable(false, 0)
  });


   $("#asc-founder-sort").click(function() {
    sortTable(true, 1)
  });

  $("#desc-founder-sort").click(function() {
    sortTable(false, 1)
  });


   $("#asc-other-sort").click(function() {
    sortTable(true, 3)
  });

  $("#desc-other-sort").click(function() {
    sortTable(false, 3)
  });


   $("#asc-address-sort").click(function() {
    sortTable(true, 4)
  });

  $("#desc-address-sort").click(function() {
    sortTable(false, 4)
  });

