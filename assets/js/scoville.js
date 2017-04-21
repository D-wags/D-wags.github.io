$(document).ready(function() {
  // go through table and collect values
  $("#pepperTable tr").slice(1).each(function() {
    var rate = $(this).find('.scoville').html();
    var original_rate = rate;
    //console.log(rate);
    rate = rate.replace(",","").replace(",","");
    rate = rate.split("-")
    rate = rate[rate.length -1]
    rate = rate.replace(/\D/g,'');
    console.log(rate);
    var scale = [25,100,1000,3500,30000,50000,100000,350000,580000,1000000,3000000];
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
