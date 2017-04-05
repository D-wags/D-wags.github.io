$(document).ready(function() {
    // gets the Id of the table 
    var tableID  = '#'
    tableID += $('table').attr('id');
    console.log(tableID);
    $(tableID).DataTable(
    	{
    "bSort" : false
	});
} );
