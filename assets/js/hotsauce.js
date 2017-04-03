$(document).ready(function() {
  // go through table and collect values
  $("#sauceTable tr").slice(1).each(function() {
    var rate = $(this).find('.scoville').html();
    var original_rate = rate;
    //console.log(rate);
    rate = rate.replace(",","").replace(",","");
    var scale = [25,100,1000,3500,30000,50000,100000,350000,580000,1000000];
    var peppers = 0;
    for (var i = 0; i < scale.length; i++) {
      if (scale[i] >= rate) {
          peppers = i + 1
          break
      }
    }
    string = ''
    for (var i = 0; i < peppers; i++) {
      string += '&#x1f336;';
    }
    string += "<br /> <small class='scoville-scale'>(";
    string += original_rate;
    string += " SHU)</small>";
    $(this).find('.scoville').html(string)
  });

});


//Function will sort by ascending scoville
    function sortTable() {
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

          
          if (parseInt(pep1) < parseInt(pep2)) {
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

  // on-click sort function call
  $("#hotsauceSorter").click(function() {
    console.log("get $");
    sortTable();
  });
