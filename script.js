$('#topics').popover({content: "<div class='popover_block'><p>Topics</p><div class='checkbox'><input class='input_checkboxes' type='checkbox' id='prog'><label for='prog' value='programing'>Programming</label><span>345</span></div><div class='checkbox'><input class='input_checkboxes' type='checkbox' id='design'><label for='design' value='design'>Design</label><span>1345</span></div><div class='checkbox'><input class='input_checkboxes' type='checkbox' id='web_development'><label for='web_development' value='web_development'>Web development</label><span>145</span></div><div class='checkbox'><input class='input_checkboxes' type='checkbox' id='mobile_app'><label for='mobile_app' value='mobile_app'>Mobile app</label><span>345</span></div><div class='checkbox'><input class='input_checkboxes' type='checkbox' id='process'><label for='process' value='process'>Process</label><span>345</span></div></div>", html: true, animation:true, placement: "bottom"});


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
	