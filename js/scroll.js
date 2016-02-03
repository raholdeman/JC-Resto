var currentIndex = 0,
	items = $('.container div'),
	itemAmt = items.length;

function cycleItems() {
	var item = $('.container div').eq(currentIndex);
	items.hide();
	item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
	currentIndex += 1;
	if (currentIndex > itemAmt - 1) {
		currentIndex = 0;
	}
	cycleItems();
}, 3000);

$('.next').click(function() {
	clearInterval(autoSlide);
	currentIndex += 1;
	if (currentIndex > itemAmt - 1) {
		currentIndex = 0;
	}
	cycleItems();
});

$('.prev').click(function() {
	clearInterval(autoSlide);
	currentIndex -= 1;
	if (currentIndex < 0) {
		currentIndex = itemAmt - 1;
	}
	cycleItems();
});


/**************************************Menu*****************************************/


$('.menu1').click(function() {
  $('.menu').removeClass('selected');
  $('.tab').removeClass('selected');
  $('.menu1').addClass('selected');
});

$('.menu2').click(function() {
  $('.menu').removeClass('selected');
  $('.tab').removeClass('selected');
  $('.menu2').addClass('selected');
});

$('.menu3').click(function() {
  $('.menu').removeClass('selected');
  $('.tab').removeClass('selected');
  $('.menu3').addClass('selected');
});

$('.menu4').click(function() {
  $('.menu').removeClass('selected');
  $('.tab').removeClass('selected');
  $('.menu4').addClass('selected');
});

$('.menu5').click(function() {
  $('.menu').removeClass('selected');
  $('.tab').removeClass('selected');
  $('.menu5').addClass('selected');
});

/**************************************About*****************************************/

$('.story').click(function() {
  $('.section').removeClass('selected');
  $('.tab').removeClass('selected');
  $('.story').addClass('selected');
});

$('.value').click(function() {
  $('.section').removeClass('selected');
  $('.tab').removeClass('selected');
  $('.value').addClass('selected');
});

$('.commit').click(function() {
  $('.section').removeClass('selected');
  $('.tab').removeClass('selected');
  $('.commit').addClass('selected');
});