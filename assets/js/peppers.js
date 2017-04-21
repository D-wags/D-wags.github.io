    function sortTablebyNum(ascending) {
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


          if ((parseInt(pep1) > parseInt(pep2)) && (ascending==true)) {
            
            shouldSwitch = true;
            break;
          }
          
          if ((parseInt(pep1) < parseInt(pep2)) && (ascending==false)) {
            
            shouldSwitch = true;
            break;
          }
        }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

function sortTable(ascending, indx) {
      var rows, i, x, y, shouldSwitch;
      var table = document.getElementById("pepperTable");
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

  $("#asc-pepper-sort").click(function() {
    sortTable(true, 0)
  });

  $("#desc-pepper-sort").click(function() {
    sortTable(false, 0)
  });


  $("#asc-origin-sort").click(function() {
    sortTable(true, 1)
  });

  $("#desc-origin-sort").click(function() {
    sortTable(false, 1)
  });


  $("#asc-scoville-sort").click(function() {
    sortTablebyNum(true)
  });

  $("#desc-scoville-sort").click(function() {
    sortTablebyNum(false)
  });


   $("#asc-dish-sort").click(function() {
    sortTable(true, 3)
  });

  $("#desc-dish-sort").click(function() {
    sortTable(false, 3)
  });


   $("#asc-info-sort").click(function() {
    sortTablebyNum(true)
  });

  $("#desc-info-sort").click(function() {
    sortTablebyNum(false)
  });


 

  