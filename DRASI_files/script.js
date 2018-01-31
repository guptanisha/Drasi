// JavaScript Document

//Dropdown Menu
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});

//City Lists
$(function() {
    var availableTags = [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Ahmedabad",
      "Chennai",
      "Kolkata",
     
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });



/*Banner Script*/
$('#myCarousel').carousel({
  interval: 5000
})


$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});



//Filter Items Show morw
$('ul.term-list').each(function(){
  
  var LiN = $(this).find('li').length;
  
  if( LiN > 3){    
    $('li', this).eq(5).nextAll().hide().addClass('toggleable');
    $(this).append('<li class="more">More...</li>');    
  }
  
});


$('ul.term-list').on('click','.more', function(){
  
  if( $(this).hasClass('less') ){    
    $(this).text('More...').removeClass('less');    
  }else{
    $(this).text('Less...').addClass('less'); 
  }
  
  $(this).siblings('li.toggleable').slideToggle();
    
}); 