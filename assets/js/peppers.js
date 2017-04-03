    function sortTable() {
      var rows, i, pep1, pep2, shouldSwitch;
      var table = document.getElementById("pepperTable");
      var switching = true;
      
      while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
          
          shouldSwitch = false;
          
          pep1 = rows[i].getElementsByTagName("TD")[2].getAttribute('data-sort');
          pep2 = rows[i + 1].getElementsByTagName("TD")[2].getAttribute('data-sort');
          
          if (parseInt(pep1) < parseInt(pep2)) {
            
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