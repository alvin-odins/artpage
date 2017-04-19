//
//	Document ready
//

$(document).ready(function(){
	$('.js-like').click('click', function(event){
		event.preventDefault();
		
		$(this).text('Liked')
			.closest('.flask-item')
			.addClass('is-liked');
	})
})