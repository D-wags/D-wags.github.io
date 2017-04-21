


//Function will sort by ascending scoville
    function sortTablebyNum(ascending) {
      var rows, i, pep1, pep2, shouldSwitch;
      var table = document.getElementById("sauceTable");
      var switching = true;

      while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
          console.log("???")
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

  //     function sortTablebyNum(ascending) {
  //     var rows, i, pep1, pep2, shouldSwitch;
  //     var table = document.getElementById("sauceTable");
  //     var switching = true;

  //     while (switching) {
  //       switching = false;
  //       rows = table.getElementsByTagName("TR");
  //       for (i = 1; i < (rows.length - 1); i++) {

  //         shouldSwitch = false;

  //         pep1 = rows[i].getElementsByTagName("TD")[2].getAttribute('data-sort');
  //         pep2 = rows[i + 1].getElementsByTagName("TD")[2].getAttribute('data-sort');


  //         if ((parseInt(pep1) > parseInt(pep2)) && (ascending==true)) {

  //           shouldSwitch = true;
  //           break;
  //         }

  //         if ((parseInt(pep1) < parseInt(pep2)) && (ascending==false)) {

  //           shouldSwitch = true;
  //           break;
  //         }
  //       }

  //     if (shouldSwitch) {
  //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //       switching = true;
  //     }
  //   }
  // }

function sortTable(ascending, indx) {
      var rows, i, x, y, shouldSwitch;
      var table = document.getElementById("sauceTable");
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



  // on-click sort function calls
  $("#asc-sauce-sort").click(function() {
    sortTable(true, 0)
  });

  $("#desc-sauce-sort").click(function() {
    sortTable(false, 0)
  });


  $("#asc-pepper-sort").click(function() {
    sortTable(true, 1)
  });

  $("#desc-pepper-sort").click(function() {
    sortTable(false, 1)
  });


  $("#asc-scoville-sort").click(function() {
    sortTablebyNum(true)
  });

  $("#desc-scoville-sort").click(function() {
    sortTablebyNum(false)
  });


   $("#asc-origin-sort").click(function() {
    sortTable(true, 3)
  });

  $("#desc-origin-sort").click(function() {
    sortTable(false, 3)
  });


   $("#asc-site-sort").click(function() {
    sortTablebyNum(true)
  });

  $("#desc-site-sort").click(function() {
    sortTablebyNum(false)
  });
