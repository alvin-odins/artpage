//
//	Document ready
//

$(document).ready(function(){
	$('.js-like').click('click', function(event){
		event.preventDefault();
		
		$(this).text('Liked')
			.closest('.flask-item')
			.toggleClass('is-liked');
	});
	
	$('.js-add-link').on('click', function(event){
		event.preventDefault();
		
		$('.js-form').toggleClass('is-visible');
	});
	
	// 
	//  modal
	//
	$('.js-show-modal').on('click', function(event) {
    event.preventDefault();

    $('.js-modal').addClass('is-visible');
    $('.js-modal-overlay').addClass('is-visible');
  });
	
	$('.js-modal-overlay').on('click', function(event) {
    $('.js-modal').removeClass('is-visible');
    $('.js-modal-overlay').removeClass('is-visible');
  });
});