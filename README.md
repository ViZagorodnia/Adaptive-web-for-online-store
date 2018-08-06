# Adaptive-web-for-online-store
Simple design for online store web with filtering option using jQuery
#### Interesting solution for popup multiselect option menu using Bootstrap popover

#### Also implemented filter option depending on choice in popup multiselect on jQuery:

```
var filter_list = [];
var list_img_block = $('.image_block');
var filtered_img_block =[];

$('.filter_option').on('click', function (e) {

 	var checkbox = $('div.checkbox > label');
 	checkbox.on('click', function(e) {
 		$(e.target).toggleClass( "checked" );
 		$( "label.checked" ).each(function() {
		  var new_el = $( this ).attr('value');
		  filter_list.push('#' + new_el);		  
		});

	  filtered_img_block = list_img_block.filter(document.querySelectorAll(filter_list), 
	  	function(elem){
				return elem.nodeName == 'DIV'; });

		for (var i = 0; i < list_img_block.length; i++) {
			list_img_block[i].style.display = 'none';
		};
		for (var i = 0; i < filtered_img_block.length; i++) {
			filtered_img_block[i].style.display = 'grid';
		}
	  filter_list = [];
	});		
 });
