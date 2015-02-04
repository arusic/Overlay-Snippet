$(document).ready(function(){

  $('.click').on('click', function(){
    $('#overlay').fadeIn().on('click', function(){
        $(this).fadeOut();
    });
  });
  
});