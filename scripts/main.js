console.log('The Iron Yard Rocks');

$("section").click(function(){
  $("section").removeClass('activeBox')
  $(this).addClass('activeBox');
});
