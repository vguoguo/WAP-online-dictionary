$(function(){
	$('input').keyup(function(event){if (event.keyCode == 13) {search()}  });
	$('button').click(search);

	function search(){
/*		$.get("Search",{"word":  $('input').val(), "search": true})
		 .done(result)
		 .fail(failure);
		 
		 function result(data){
		    	$('#results').removeClass('hide');
		    	$('#searchWord').text($('input').val());
		    	$('#nResults').text(result.length);
		        //clear all TR data in table
		        $('table tbody tr').slideUp().remove();
		        //append new rows
		        if(result.length > 0){
		        	$('table').removeClass('hide');
		        	for(var i=0; i<result.length; i++){
						if(result[i].word)
		        		$('<tr><td>'+(i+1)+'</td><td>'+result[i].word+'</td><td>'+result[i].wordtype+'</td><td>'+result[i].definition+'</td></tr>').appendTo($('table tbody')).slideDown("slow");
		        		// $('table tbody').append('<tr><td>'+result[i].word+'</td><td>'+result[i].wordtype+'</td><td>'+result[i].definition+'</td></tr>').slideDown("fast");
					}	
		        }else{
		        	$('table').addClass('hide');
		        }  			        
		 }*/

		$.ajax({ 
			type: "GET",
		    url: "/dictionary/Search",
		    data: {"word":  $('input').val(), "search": true},
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(result){
		    	$('#results').removeClass('hide');
		    	$('#searchWord').text($('input').val());
		    	$('#nResults').text(result.length);
		        //clear all TR data in table
		        $('table tbody tr').slideUp().remove();
		        //append new rows
		        
		        if(result.length > 0){
		        	$('table').removeClass('hide');
		        	for(var i=0; i<result.length; i++){
		        	if(result[i].word)
		        		$('<tr><td>'+(i+1)+'</td><td>'+result[i].word+'</td><td>'+result[i].type+'</td><td>'+result[i].definition+'</td></tr>').appendTo($('table tbody')).slideDown("slow");
		        		// $('table tbody').append('<tr><td>'+result[i].word+'</td><td>'+result[i].wordtype+'</td><td>'+result[i].definition+'</td></tr>').slideDown("fast");
		        }	
		        }else{
		        	$('table').addClass('hide');
		        }  			        
		    }
		});
	}
/*
	$("input").autocomplete({
				delay: 500,
				minLength: 1,
				source: function(request, response) {
					$.ajax({ 
						type: "GET",
					    url: "data.php",
					    data: {"linkword":  $('input').val(), "search": false},
					    contentType: "application/json; charset=utf-8",
					    dataType: "json",
					    success: function(result){
							response(result.suggestions);
					    }
					});
				},
				focus: function(event, ui) {
					// prevent autocomplete from updating the textbox
					event.preventDefault();
				},
				select: function(event, ui) {
					// prevent autocomplete from updating the textbox
					event.preventDefault();
					$('input').val(ui.item.value);
					search();
				}
			});*/
	function ajaxFailure() {
		$('#errors').text('An ajax error occurred.');
	}
	function anticipate(){

	}
});