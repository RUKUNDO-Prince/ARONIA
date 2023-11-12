$( "input" ).change(function() {
    setTimeout(function(){
    $('input').prop('checked', false);
  }, 1000);
});